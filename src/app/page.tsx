"use client";
import { MainAvatar } from "@/components/atoms/avatar";
import AccountCard from "@/components/features/account-balance/account-card";
import Transaction from "@/components/features/create-transaction/create-transaction-blok";
import { DialogWindow } from "@/components/features/dialog-for-transaction/transaction-dialog";
import { ChartIncomeExpenses } from "@/components/features/income-expenses-chart/chart";
import { TransactionsTable } from "@/components/features/transactions-table/transactions-table";
import { Button } from "@/components/ui/button";
import { useAppInit } from "@/hooks/useAppInit";
import { useGetBalance } from "@/hooks/useGetBalance";
import { useGetInvoices } from "@/hooks/useGetInvoices";
import { useSearchParams } from "next/navigation";

export default function HomePage() {
  const params = useSearchParams();
  const refresh = params.get("refresh") ?? 0;
  useAppInit();

  const { data, transformData } = useGetInvoices(Number(refresh));
  const total = transformData((i) =>
    i.reduce((acc, cur) => acc + cur.totalAmount, 0),
  );
  const { data: balance } = useGetBalance(Number(refresh));

  const expenses = transformData((i) =>
    i
      .filter((inv) => inv.paymentStatus === "Paid")
      .reduce((acc, cur) => acc + cur.totalAmount, 0),
  );

  const income = transformData((i) =>
    i
      .filter((inv) => inv.paymentStatus === "Income")
      .reduce((acc, cur) => acc + cur.totalAmount, 0),
  );

  const chartData = [
    { type: "income", amount: income, fill: "var(--color-income)" },
    { type: "expenses", amount: expenses, fill: "var(--color-expenses)" },
    {
      type: "balance",
      amount: balance.value?.balance,
      fill: "var(--color-balance)",
    },
  ];

  return (
    <div className="grid w-full gap-3 p-3 md:grid-flow-col md:grid-rows-6 smd:grid-cols-1">
      <AccountCard
        data-testid="account-card"
        expenses={expenses}
        income={income}
        balance={balance.value?.balance}
        className="w-full md:row-span-2 smd:col-span-1"
      />
      <ChartIncomeExpenses
        data-testid="chart-income-expenses"
        chartData={chartData}
        className="col-span-1 md:row-span-4"
      />
      <Transaction
        render={() => (
          <DialogWindow
            trigger={
              <Button className="border-none bg-transparent hover:border-none hover:bg-transparent">
                <MainAvatar
                  fallback="+"
                  fallbackStyles="cursor-pointer bg-red-200 text-3xl text-white font-bold"
                />
              </Button>
            }
          />
        )}
        data-testid="transaction"
        className="md:row-span-4 smd:col-span-1"
      />
      <TransactionsTable
        data-testid="transactions-table"
        invoices={data.value}
        total={total}
        className="md:row-span-10 smd:col-span-1"
      />
    </div>
  );
}

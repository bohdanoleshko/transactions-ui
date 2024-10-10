import { getFromLocalStorage } from "@/utils/getFromLocalStorage";
import {
  setListInLocalStorage,
  setObjectInLocalStorage,
} from "@/utils/setInLocalStorage";
import { balanceSchema } from "@/zod/schema";

export function useMutateInvoices() {
  function mutate({ iban, amount }: { iban: string; amount: number }) {
    const balance = getFromLocalStorage("balance", balanceSchema);
    const data = [
      {
        iban: iban.toUpperCase(),
        invoice: `INV${Math.random().toString().slice(2, 6)}`,
        paymentStatus: "Paid",
        totalAmount: amount,
        paymentMethod: "Bank Transfer",
      },
    ];
    if (balance?.value) {
      setObjectInLocalStorage("balance", {
        balance: balance.value?.balance - amount,
      });
    }
    setListInLocalStorage("invoices", data);
  }
  return { mutate };
}

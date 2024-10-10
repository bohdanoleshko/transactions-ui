"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CardForExpensesTable } from "./ui/card";
import { cn } from "@/lib/utils";
import { type z } from "zod";
import { type invoicesSchema } from "@/zod/schema";

export function TransactionsTable({
  className,
  invoices,
  total,
}: {
  className?: string;
  invoices?: z.infer<typeof invoicesSchema>;
  total?: number;
}) {
  if (!invoices) {
    return <div>loading</div>;
  }
  return (
    <CardForExpensesTable className={cn(className, "h-full w-full")}>
      <Table className="h-full md:w-[30dvw] lg:w-[40dvw]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                ${invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">${total}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </CardForExpensesTable>
  );
}

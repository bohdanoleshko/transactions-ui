"use client";
import { cn } from "@/lib/utils";
import { Cpu } from "lucide-react";

export default function AccountCard({
  className,
  balance,
  expenses,
  income,
}: {
  className?: string;
  balance?: number;
  expenses?: number;
  income?: number;
}) {
  return (
    <div
      className={cn(
        className,
        "flex flex-col justify-between gap-2 rounded-xl bg-red-400 p-3",
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl font-normal text-white">Total Balance</span>
        <Cpu className="size-10 text-white" />
      </div>

      <div className="flex items-center">
        <span className="text-3xl font-bold text-white">USD {balance}</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-sm text-gray-100">Income</span>
          <span className="text-2xl font-bold text-white">{income}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-100">Expences</span>
          <span className="text-2xl font-bold text-white">{expenses}</span>
        </div>
      </div>
    </div>
  );
}

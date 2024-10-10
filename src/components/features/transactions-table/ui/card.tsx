"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export function CardForExpensesTable({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <Card className={cn(className)} id="transaction-table-card">
      <CardHeader>
        <CardTitle>Expenses</CardTitle>
      </CardHeader>
      <CardContent className="max-h-[80dvh] w-full overflow-y-auto md:max-h-[84dvh] smd:max-h-[20dvh]">
        {children}
      </CardContent>
    </Card>
  );
}

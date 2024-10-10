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
      <CardContent className="w-full overflow-y-auto md:max-h-[78dvh] lg:max-h-[80dvh] smd:max-h-[30dvh]">
        {children}
      </CardContent>
    </Card>
  );
}

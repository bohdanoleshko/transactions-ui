import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export function TransactionCard({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <Card className={cn(className)} id="transaction-card">
      <CardContent className="flex gap-2 p-4">{children}</CardContent>
    </Card>
  );
}

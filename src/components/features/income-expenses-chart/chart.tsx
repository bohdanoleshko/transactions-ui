"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";

type ChartData = { type: string; amount?: number; fill: string }[];

const chartConfig = {
  amount: {
    label: "Amount",
  },
  income: {
    label: "Inc",
    color: "hsl(var(--chart-1))",
  },
  expenses: {
    label: "Exps",
    color: "hsl(var(--chart-2))",
  },
  balance: {
    label: "Bal",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function ChartIncomeExpenses({
  className,
  chartData,
}: {
  className?: string;
  chartData: ChartData;
}) {
  return (
    <Card className={cn(className)} id="chart-card">
      <CardHeader>
        <CardTitle>Financial Overview</CardTitle>
        <CardDescription>Income, Expenses, and Balance</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="smd:max-h-[15dvh]">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="type"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="amount" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="amount" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

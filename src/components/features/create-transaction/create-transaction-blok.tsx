import { MainAvatar } from "@/components/atoms/avatar";
import { TransactionCard } from "./ui/card";
import { cn } from "@/lib/utils";

const recievers = Array.from({ length: 15 }, () => ({
  avatar: "https://github.com/shadcn.png",
  id: Math.floor(Math.random() * 1000000),
}));

export default function Transaction({
  className,
  render,
}: {
  className?: string;
  render: React.ReactNode | (() => React.ReactNode);
}) {
  return (
    <TransactionCard
      className={cn(
        className,
        "jsutify-center flex max-w-[29rem] items-center overflow-x-auto",
      )}
    >
      {typeof render === "function" ? render() : render}
      {recievers.map((i) => (
        <MainAvatar key={i.id} src={i.avatar} fallback="BO" />
      ))}
    </TransactionCard>
  );
}

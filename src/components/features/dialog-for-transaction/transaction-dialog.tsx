"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, type ReactNode } from "react";
import { TransactionForm } from "./ui/form";

export function DialogWindow({
  trigger,
  title = "Create new transfer",
}: {
  trigger: ReactNode;
  title?: string;
  description?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <TransactionForm close={setOpen} />
      </DialogContent>
    </Dialog>
  );
}

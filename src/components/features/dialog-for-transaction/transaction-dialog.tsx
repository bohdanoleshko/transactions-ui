"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, type ReactNode } from "react";
import { TransactionForm } from "./ui/form";

export function DialogWindow({
  trigger,
  title = "Title",
  description = "Dialog description",
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
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <TransactionForm close={setOpen} />
      </DialogContent>
    </Dialog>
  );
}

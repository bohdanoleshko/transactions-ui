import { z } from "zod";

const invoiceSchema = z.object({
  iban: z.string().min(1, "IBAN is required"),
  invoice: z.string().min(1, "Invoice number is required"),
  paymentStatus: z.enum(["Paid", "Unpaid", "Income"]),
  totalAmount: z.number(),
  paymentMethod: z.enum([
    "Credit Card",
    "Debit Card",
    "Bank Transfer",
    "PayPal",
  ]),
});

export const invoicesSchema = z.array(invoiceSchema);

export const balanceSchema = z.object({
  balance: z.number(),
});

export const formSchema = z.object({
  iban: z
    .string()
    .min(16, { message: "IBAN must be at least 16 characters." })
    .regex(/^[A-Za-z]{2}/, { message: "IBAN must start with two letters." }),
  amount: z.number().min(0, { message: "Amount must be a positive number." }),
});

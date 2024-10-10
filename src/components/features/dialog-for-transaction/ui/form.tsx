"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutateInvoices } from "@/hooks/useMutateInvoices";
import { formSchema } from "@/zod/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { type z } from "zod";

export function TransactionForm({
  close,
}: {
  close: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const params = useSearchParams();
  const refresh = params.get("refresh");

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      iban: "",
      amount: undefined,
    },
  });
  const { mutate } = useMutateInvoices();

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
    router.push(refresh ? `?refresh=${Number(refresh) + 1}` : "?refresh=1");
    close((prev) => !prev);
    toast({
      title: "Payment was successful!",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input
                  placeholder="amount"
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="iban"
          render={({ field }) => (
            <FormItem>
              <FormLabel>IBAN</FormLabel>
              <FormControl>
                <Input placeholder="Iban number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

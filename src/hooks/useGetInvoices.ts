import { getFromLocalStorage } from "@/utils/getFromLocalStorage";
import { invoicesSchema } from "@/zod/schema";
import { useState, useEffect } from "react";
import { type z } from "zod";

const getInvoices = () => getFromLocalStorage("invoices", invoicesSchema);

export function useGetInvoices(refresh?: number) {
  const [data, setData] = useState<{
    value?: z.infer<typeof invoicesSchema>;
    error?: string;
    validationError?: z.ZodError;
  }>({});

  useEffect(() => {
    setData(getInvoices);
  }, [refresh]);

  function transformData<I = z.infer<typeof invoicesSchema>, O = unknown>(
    cb: (val: I) => O,
  ) {
    return cb((data.value ?? []) as I);
  }

  return { data, transformData };
}

import { getFromLocalStorage } from "@/utils/getFromLocalStorage";
import { balanceSchema } from "@/zod/schema";
import { useEffect, useState } from "react";
import { type z } from "zod";

const getBalance = () => getFromLocalStorage("balance", balanceSchema);

export function useGetBalance(refresh?: number) {
  const [data, setData] = useState<{
    value?: z.infer<typeof balanceSchema>;
    error?: string;
    validationError?: z.ZodError;
  }>({});
  useEffect(() => {
    setData(getBalance);
  }, [refresh]);
  return { data };
}

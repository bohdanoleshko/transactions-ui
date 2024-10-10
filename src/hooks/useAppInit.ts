import { balance, invoices } from "@/dummy-data";
import {
  setListInLocalStorage,
  setObjectInLocalStorage,
} from "@/utils/setInLocalStorage";
import { useLayoutEffect } from "react";

export function useAppInit() {
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const isInvoicesInLocalStorage = window.localStorage.getItem("invoices")
        ? true
        : false;

      const isBalanceInLocalStorage = window.localStorage.getItem("balance")
        ? true
        : false;

      if (!isInvoicesInLocalStorage) {
        setListInLocalStorage("invoices", invoices);
      }

      if (!isBalanceInLocalStorage) {
        setObjectInLocalStorage("balance", balance);
      }
    }
  }, []);
}

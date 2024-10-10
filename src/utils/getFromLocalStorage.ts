import { type z, type Schema } from "zod";

export function getFromLocalStorage<S extends Schema>(
  key: string,
  schema: S,
): {
  error?: string;
  validationError?: z.ZodError;
  value?: z.infer<S>;
} {
  if (typeof window === "undefined") {
    return {
      error: "window is not defined",
    };
  }
  try {
    const localStorageValue = window.localStorage.getItem(key);
    if (!localStorageValue) {
      return {
        error: "value not found",
      };
    }
    const parsedValue: unknown = JSON.parse(localStorageValue);
    const res = schema.safeParse(parsedValue);

    if (!res.success) {
      return { validationError: res.error };
    }

    return {
      value: res.data as z.infer<S>,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "unknown error",
    };
  }
}

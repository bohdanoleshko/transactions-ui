export function setObjectInLocalStorage<T>(key: string, data: T): void {
  if (typeof window === "undefined") return;

  try {
    const localStorageItem = window.localStorage.getItem(key);
    const parsedValue = localStorageItem ? safeParse(localStorageItem) : null;

    const newObj = {
      ...(parsedValue || {}),
      ...data,
    };

    window.localStorage.setItem(key, JSON.stringify(newObj));
  } catch (error) {
    console.error("Failed to set item in localStorage", error);
  }
}

export function setListInLocalStorage<
  T extends Array<Record<string, string | number>>,
>(key: string, data: T): void {
  if (typeof window === "undefined") return;

  try {
    const localStorageItem = window.localStorage.getItem(key);
    const parsedValue = localStorageItem
      ? safeParse<Array<Record<string, string | number>>>(localStorageItem)
      : [];

    const newObj = [...(parsedValue ?? []), ...data];

    window.localStorage.setItem(key, JSON.stringify(newObj));
  } catch (error) {
    console.error("Failed to set item in localStorage", error);
  }
}

function safeParse<T>(value: string): T | null {
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

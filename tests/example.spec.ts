import { test, expect } from "@playwright/test";

test.describe("HomePage Component Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test("Check if components exist on the page", async ({ page }) => {
    const accountCard = page.locator("#account-card");
    console.log(accountCard);
    await expect(accountCard).toBeVisible();

    const chartIncomeExpenses = page.locator("#chart-card");
    await expect(chartIncomeExpenses).toBeVisible();

    const transaction = page.locator("#transaction-card");
    await expect(transaction).toBeVisible();

    const transactionsTable = page.locator("#transaction-table-card");
    await expect(transactionsTable).toBeVisible();
  });
});

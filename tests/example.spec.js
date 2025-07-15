// @ts-check
import { test, expect } from '@playwright/test';

test('Test login with invalid credential', async ({ page }) => {
  await page.goto('https://front.serverest.dev/login')
  await page.getByTestId('email').fill('teste@testecypress.com')
  await page.getByTestId('senha').fill('1234')
  await page.getByTestId('entrar').click()
  await expect(page.getByRole('alert')).toBeVisible
})

const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')

test('successful login', async ({ page }) => {

  const loginPage = new LoginPage(page)

  await page.goto('https://www.saucedemo.com')

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  )

  await expect(page).toHaveURL(/inventory/)
})
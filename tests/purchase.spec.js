const { test, expect } = require('@playwright/test')

const { LoginPage } = require('../pages/LoginPage')
const { ProductsPage } = require('../pages/ProductsPage')

test('add product to cart', async ({ page }) => {

  const loginPage = new LoginPage(page)
  const productsPage = new ProductsPage(page)

  await page.goto('https://www.saucedemo.com')

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  )

  await productsPage.addFirstProductToCart()

  await productsPage.openCart()

  await expect(page).toHaveURL(/cart/)
})
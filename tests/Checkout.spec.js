const { test, expect } = require('@playwright/test')

const { LoginPage } = require('../pages/LoginPage')
const { ProductsPage } = require('../pages/ProductsPage')
const { CartPage } = require('../pages/CartPage')
const { CheckoutPage } = require('../pages/CheckoutPage')

const { users, checkoutInfo } = require('../utils/testData')

test('complete purchase flow', async ({ page }) => {

  const loginPage = new LoginPage(page)
  const productsPage = new ProductsPage(page)
  const cartPage = new CartPage(page)
  const checkoutPage = new CheckoutPage(page)

  await page.goto('https://www.saucedemo.com')

  await loginPage.login(
    users.standard.username,
    users.standard.password
  )

  await productsPage.addFirstProductToCart()
  await productsPage.openCart()

  await cartPage.goToCheckout()

  await checkoutPage.fillCheckoutInfo(
    checkoutInfo.firstName,
    checkoutInfo.lastName,
    checkoutInfo.zip
  )

  await checkoutPage.finishOrder()

  await expect(checkoutPage.confirmationMessage)
    .toHaveText('Thank you for your order!')
})
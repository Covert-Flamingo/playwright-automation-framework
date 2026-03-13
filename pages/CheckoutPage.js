class CheckoutPage {

  constructor(page) {
    this.page = page

    this.firstName = page.locator('#first-name')
    this.lastName = page.locator('#last-name')
    this.postalCode = page.locator('#postal-code')

    this.continueButton = page.locator('#continue')
    this.finishButton = page.locator('#finish')

    this.confirmationMessage = page.locator('.complete-header')
  }

  async fillCheckoutInfo(first, last, zip) {
    await this.firstName.fill(first)
    await this.lastName.fill(last)
    await this.postalCode.fill(zip)
    await this.continueButton.click()
  }

  async finishOrder() {
    await this.finishButton.click()
  }

}

module.exports = { CheckoutPage }
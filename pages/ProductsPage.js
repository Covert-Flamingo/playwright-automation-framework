class ProductsPage {

  constructor(page) {
    this.page = page
    this.firstAddToCart = page.locator('.inventory_item button').first()
    this.cartIcon = page.locator('.shopping_cart_link')
  }

  async addFirstProductToCart() {
    await this.firstAddToCart.click()
  }

  async openCart() {
    await this.cartIcon.click()
  }

}

module.exports = { ProductsPage }
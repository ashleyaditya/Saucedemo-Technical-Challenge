export const getter = {
  getUserName: () => cy.get("#user-name"),
  getPassword: () => cy.get("#password"),
  getLoginButton: () => cy.get("#login-button"),
  getErrorMessage: () => cy.get('[data-test="error"]'),
  getBurgerMenu: () => cy.get("#react-burger-menu-btn"),
  getBackToProductsButton: () => cy.get('[data-test="back-to-products"]'),
  getShoppingCartButton: () => cy.get(".shopping_cart_link"),
}

export default getter

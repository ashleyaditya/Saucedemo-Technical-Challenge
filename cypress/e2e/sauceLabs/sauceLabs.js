import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import getter from "../shared/variables.js"

Given("I am on the login page", () => {
  cy.visit("https://www.saucedemo.com/")
  cy.get(".login_logo").should("be.visible")
})

When("I enter valid username and password", () => {
  getter.getUserName().type("standard_user")
  getter.getPassword().type("secret_sauce")
})

Then("I click on login button", () => {
  getter.getLoginButton().click()
})

Then("I should be on the home page", () => {
  getter.getBurgerMenu().should("be.visible")
})

When("I enter invalid username and password", () => {
  getter.getUserName().type("invalid_user")
  getter.getPassword().type("invalid_password")
})

Then("I should see an error message", () => {
  getter.getErrorMessage().should("be.visible")
})

When("I add products to cart", () => {
  cy.fixture("products.json").then((products) => {
    products.forEach((product) => {
      const convertedString = product.productName
        .toLowerCase()
        .replace(/\s+/g, "-")
      cy.get(`[data-test=add-to-cart-${convertedString}]`).click()
    })
  })
})

Then("I should see the products in the cart", () => {
  getter.getShoppingCartButton().should("be.visible")
  getter.getShoppingCartButton().click()
  cy.fixture("products.json").then((products) => {
    products.forEach((product) => {
      cy.get(".inventory_item_name").contains(product.productName)
    })
  })
})

Feature: sauceLabs Login

Background:
Given I am on the login page

Scenario: Login with valid credentials
When I enter valid username and password
And I click on login button
Then I should be on the home page

Scenario: Login with invalid credentials
When I enter invalid username and password
And I click on login button
Then I should see an error message


Scenario: Adding items to cart
Given I enter valid username and password
When I click on login button
When I add products to cart
Then I should see the products in the cart

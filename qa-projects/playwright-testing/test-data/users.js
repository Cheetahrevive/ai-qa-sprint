// Shared demo data for SauceDemo (same data as ecommerce-qa-testing/04-test-data).
module.exports = {
  standardUser: { username: "standard_user", password: "secret_sauce" },
  lockedOutUser: { username: "locked_out_user", password: "secret_sauce" },
  checkoutInfo: { firstName: "Ravi", lastName: "Kalagara", zip: "75038" },
  products: {
    backpack: { slug: "sauce-labs-backpack", name: "Sauce Labs Backpack", price: 29.99 },
    bikeLight: { slug: "sauce-labs-bike-light", name: "Sauce Labs Bike Light", price: 9.99 },
  },
};

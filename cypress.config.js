const { defineConfig } = require('cypress')

let totalPrice

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        resetTotalPrice() {
          totalPrice = 0
          return null
        },
        saveTotalPrice(data) {
          const [price, quantity] = data
          return totalPrice += price * quantity
        },
        getTotalPrice() {
          return totalPrice
        }
      })
      return config
    },
    supportFile: false,
  },
  fixturesFolder: false
})

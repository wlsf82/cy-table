describe('Sums table rows', () => {
  beforeEach(() => cy.visit('./src/sum-table-rows.html'))

  context('OK table assertions', () => {
    it('asserts on table rows lenght and other stuff', () => {
      cy.get('table tbody tr')
        .its('length')
        .should('be.equal', 4)
      cy.get('table tfoot td')
        .eq(1)
        .should('contain', 'R$')
        .next()
        .then($qty => {
          const qtyToInt = parseInt($qty[0].textContent)
          expect(qtyToInt).to.be.above(0)
        })
    })
  })

  context('DO NOT DO THIS', () => {
    beforeEach(() => cy.task('resetTotalPrice'))

    it('sums table rows successfully', () => {
      cy.get('[data-row="price"]').each((el, index) => {
        let price = el[0].innerText
        price = price.replace('R$', '').replace(',', '.')
        price = Number(price)
        cy.get('[data-row="quantity"]')
          .eq(index)
          .then(quantity => {
            let qty = quantity[0].innerText
            qty = Number(qty)
            cy.task('saveTotalPrice', [price, qty])
          })
      })
      cy.get('#total-price').then(totalPrice => {
        totalPrice = totalPrice[0].innerText
        totalPrice = totalPrice.replace('R$', '').replace(',', '.')
        totalPrice = Number(totalPrice)
        cy.task('getTotalPrice').then(sum => {
          expect(totalPrice).to.eq(sum)
        })
      })
    })
  })
})

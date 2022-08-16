describe("Users' logs", () => {
  beforeEach(() => cy.visit('./src/users-logs.html'))

  it('finds log1 1 of user 1', () => {
    cy.get('tr:contains(Usuário 1)')
      .find('td:contains(Log 1)')
  })

  it('finds log 2 of user 1', () => {
    cy.get('tr:contains(Usuário 1)')
      .find('td:contains(Log 2)')
  })

  it('finds log 1 of user 2', () => {
    cy.get('tr:contains(Usuário 2)')
      .find('td:contains(Log 1)')
  })

  it('finds log 2 of user 2', () => {
    cy.get('tr:contains(Usuário 2)')
      .find('td:contains(Log 2)')
  })
})

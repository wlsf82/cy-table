describe("Students' messages", () => {
  beforeEach(() => cy.visit('./src/students-messages.html'))

  it('finds message 1 of student 1', () => {
    cy.get('tr:contains(Message 1)')
      .find('td:contains(Student 1)')
      .parent()
      .find('td')
      .first()
  })

  it('finds message 2 of student 1', () => {
    cy.get('tr:contains(Message 2)')
      .find('td:contains(Student 1)')
      .parent()
      .children()
      .first()
  })

  it('finds message 1 of student 2', () => {
    cy.get('tr:contains(Message 1)')
      .find('td:contains(Student 2)')
      .parent()
      .find('td')
      .first()
  })

  it('finds message 2 of student 2', () => {
    cy.get('tr:contains(Message 2)')
      .find('td:contains(Student 2)')
      .parent()
      .children()
      .eq(0)
  })
})

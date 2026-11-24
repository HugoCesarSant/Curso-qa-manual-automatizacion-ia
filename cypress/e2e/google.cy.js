describe('Google', () => {
  it('visita la página de Google', () => {
    cy.visit('https://www.google.com');

    cy.location('hostname').should('match', /(^|\.)google\./);
    cy.title().should('include', 'Google');
  });
});

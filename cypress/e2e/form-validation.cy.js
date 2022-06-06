const TEMPCardNumber = 2349847987445654;
const TEMPCardHolder = 'John Kowalsky';
const url = 'localhost:3000';

describe('Validation test', () => {
  it('Visit main page', () => {
    cy.visit(url);
  });

  it('Checking card number matching', () => {
    cy.get('[data-card="card-number"]').click().type(TEMPCardNumber);
    cy.get('h1').then(el => {
      const text = el.text().replace(/ /g, '');
      text.match(TEMPCardNumber);
    });
  });

  it('Checking card holder matching', () => {
    cy.get('[data-card="card-holder"]').click().type(TEMPCardHolder);
    cy.get('p:nth-of-type(1)').contains(TEMPCardHolder);
  });

  it('Checking card number validation', () => {
    cy.get('[data-card="card-number"]')
      .click()
      .clear()
      .type('zaqwertyuiop123456')
      .get('[data-card="card-number"] fieldset')
      .should('have.css', 'borderColor', 'rgb(211, 47, 47)');
  });
});

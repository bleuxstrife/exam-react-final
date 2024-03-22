/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display Logout and Profile at Navigation Homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login');
    cy.wait(2000);
  });

  it('should display login page correctly', () => {
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Masuk$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    cy.get('button').contains(/^Masuk$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Email"]').type('renokun21@gmail.com');
    cy.get('button').contains(/^Masuk$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display homepage when email and password are correct', () => {
    cy.get('input[placeholder="Email"]').type('renokun21@gmail.com');

    cy.get('input[placeholder="Password"]').type('12341234');

    cy.get('button').contains(/^Masuk$/).click();

    cy.wait(1000);
    cy.visit('http://localhost:5173');

    cy.get('nav').contains(/^Reno Rizky$/).should('be.visible');
    cy.get('button').contains('Logout').should('be.visible');
  });
});

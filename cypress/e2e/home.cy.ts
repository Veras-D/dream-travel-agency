describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the hero section', () => {
    cy.get('section').first().should('exist');
  });

  it('renders 3 destination cards with correct content', () => {
    cy.get('#destinations h2').contains('Popular Destinations');
    cy.get('#destinations .col-md-4').should('have.length', 3);

    cy.get('#destinations').within(() => {
      cy.contains('Tropical Beaches');
      cy.contains('Mountains');
      cy.contains('Iconic Cities');
      cy.get('img[alt="Beach"]').should('exist');
      cy.get('img[alt="Mountains"]').should('exist');
      cy.get('img[alt="Cities"]').should('exist');
    });
  });

  it('renders 2 package cards with correct content', () => {
    cy.get('#packages h2').contains('Special Packages');
    cy.get('#packages .col-md-6').should('have.length', 2);

    cy.contains('Romantic Package');
    cy.contains('Perfect experiences for couples');
    cy.contains('Family Package');
    cy.contains('Guaranteed fun for the whole family');
  });

  it('navigates to About page via Navbar', () => {
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('About Us');
  });

  it('is responsive on mobile', () => {
    cy.viewport('iphone-6');
    cy.get('.col-md-4').should('be.visible');
    cy.get('.col-md-6').should('be.visible');
  });
});

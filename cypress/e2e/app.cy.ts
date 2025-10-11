describe('Navigation', () => {
    it('should navigate to the "how it works" page and check the title', () => {
      
      // Start from the index page
      cy.visit('http://localhost:3000/')
   
      // Find a link with an href attribute containing "about" and click it
      cy.get('a[href*="how-it-works"]').click()
   
      // The new url should include "/about"
      cy.url().should('include', '/how-it-works')
   
      // The new page should contain an h1 with "About"
      cy.get('h2').contains('How ReferrFarm works?')
    })
  })
  
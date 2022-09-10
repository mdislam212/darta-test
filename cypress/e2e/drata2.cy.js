import homepage from '../pages/homepage'

describe('Drata UI -Test Cases -Suite1', () => {
    beforeEach(() => {
        cy.visit('https://drata.com/')
        cy.viewport(1024, 768)
        cy.wait(10000)
    })
  
    it('TC4 Request Demo Page Validation', () => {
           cy.get("#dark-open-menu > div > div > a > span > span.elementor-button-icon.elementor-align-icon-left").click()
           cy.get('#sidenav-content > div > div > div > div.elementor-element.elementor-element-b251834.elementor-widget__width-auto.btn-primary.elementor-widget.elementor-widget-button > div > div > a > span > span')
           .click()
          cy.title().should('eq', 'Drata - Request a Demo Today')
          cy.url().should('eq', 'https://drata.com/demo')
    })
  
    it('TC5 Verify Customers Page', () => {
      
      cy.get("#dark-open-menu > div > div > a > span > span.elementor-button-icon.elementor-align-icon-left").click()
      cy.get('#sidenav-content > div > div > div > div.elementor-element.elementor-element-32139421.btn-light.ml-lg-5.mr-2.elementor-widget__width-auto.elementor-widget.elementor-widget-button > div > div > a > span > span').click()
      cy.title().should('eq', 'Drata')
         
  })

  it('TC6 - Get Started Validation',()=> {
    homepage.clickOnGetStarted();
    cy.title().should('eq', 'Drata - Request a Demo Today')
  })
   
  })
  
/// <reference types="cypress" />


describe('Drata UI -Test Cases -Suite1', () => {
  beforeEach(() => {
      cy.visit('https://drata.com/')
      cy.viewport(1024, 768)
      cy.wait(10000)
  })

  it('TC1 Verify Drata Landing Page', () => {
           cy.title().should('eq', 'Drata - Put SOC 2, ISO 27001, and HIPAA Compliance On Autopilot')
  })

  it('TC2 Verify Customers Page', () => {
    
    cy.get("#dark-open-menu > div > div > a > span > span.elementor-button-icon.elementor-align-icon-left").click()
    cy.get('#menu-2-9b4787d > li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-3648 > a').click()
    cy.title().should('eq', 'Drata - Customers')
    cy.url().should('eq', 'https://drata.com/customers')
   
})
it('TC3 Verify Auditors Page', () => {
  cy.get("#dark-open-menu > div > div > a > span > span.elementor-button-icon.elementor-align-icon-left").click()
  cy.get("#menu-2-9b4787d > li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-4627 > a").click()
  cy.title().should('eq', 'Auditors - Drata')
  cy.url().should('eq', 'https://drata.com/auditors')
 })


})

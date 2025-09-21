/// <reference types="cypress" />

describe('finding links on landing page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has a button in header', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.contains('button', 'Sign up')
    })

  it('has buttons for social media', () => {
    cy.get('a[href*="facebook"]')
    cy.get('a[href*="t.me"]')
    cy.get('a[href*="youtube"]')
    cy.get('a[href*="instagram"]')
    cy.get('a[href*="linkedin"]')
    cy.get('a[href="https://ithillel.ua"]')
    cy.contains('support@ithillel.ua').as('supportButton')
    cy.get('@supportButton')
  })
  })
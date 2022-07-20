import Homepage  from '../pageObject/Homepage'
import Constants from '../PageObject/Constants'
import Assertions from '../pageObject/Assertions'
import SearchPage from '../pageObject/SearchPage'

describe('Booking.com Search', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('https://booking.com/')
    Assertions.homePageTitle()
  })

  it('Search Field functionality', () => {
    Homepage.searchDilijan()
    Homepage.clickOnCalendar()
    Homepage.selectStartDate(3)
    Homepage.selectEndDate(12)
    Homepage.addAdults()
    Homepage.searchButton().click()
    Homepage.getResultOfEndDay()
    Homepage.getResultOfStartDay()
    Assertions.assertTheNightStayCount()
    Assertions.assertDatesResult()
    Assertions.assertNumberOfAdults()
    Assertions.assertResultOfAddress()
    SearchPage.select4StarCheckbox()
    Assertions.assertTheStarsCounts()
  })
})

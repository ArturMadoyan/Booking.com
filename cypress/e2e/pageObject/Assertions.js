import Homepage  from '../pageObject/Homepage'
import Constants from '../PageObject/Constants'
import SearchPage from '../pageObject/SearchPage'

    class Assertions{

        homePageTitle(){
            cy.title().should('include',Constants.homePageTitle)
        }

        assertTheNightStayCount(){
           SearchPage.getNightStayCount().should('include.text',
               Homepage.generateDifferenceOfDates())
        }

        assertNumberOfAdults(){
            SearchPage.getNumberOfAdults().should('contain.text',Constants.numberOfAdults)
        }

        assertResultOfAddress(){
            SearchPage.searchResultAddress().each(element => {
                let txt = element.text();
                expect(txt).to.be.oneOf([Constants.searchedLocation, Constants.strangeLocation])
            })
        }

        assertDatesResult(){
            SearchPage.getStartDayFieldResult().should('contain.text',
                Homepage.getResultOfStartDay())
            SearchPage.getEndDayFieldResult().should('contain.text',
                Homepage.getResultOfEndDay())
        }

        assertTheStarsCounts() {
            SearchPage.getStarsResults().each(el => {
                let stars = el.find("span");
                expect(stars).to.have.lengthOf(3);
            });
    }
}

module.exports = new Assertions();

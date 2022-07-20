import Homepage  from '../pageObject/Homepage'

class SearchPage{

    get4StarCheckBox(){
       return  cy.contains('3 stars')
    }

    getStartDayFieldResult(){
        return cy.get('button[data-testid="date-display-field-start"]')
    }
    getEndDayFieldResult(){
        return cy.get('button[data-testid="date-display-field-end"]')
    }

    getNumberOfAdults(){
        return cy.get('[class="d47738b911"]')
    }

    getNightStayCount(){
        return  cy.get('[class="d8eab2cf7f e2a710e162"]:last-child')
    }

    searchResultAddress(){
        return cy.get('[data-testid="address"]')
    }

    select4StarCheckbox(){
        this.get4StarCheckBox().click()
        cy.wait(2000);
    }

    getStarsResults(){
        return cy.get('[data-testid^="rating-"]')
    }
}

module.exports = new SearchPage();

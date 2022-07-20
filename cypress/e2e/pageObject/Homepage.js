
class Homepage {

    getAdultsField(){
        return cy.get('[id="xp__guests__toggle"]')
    }

    getSearchField(){
        return cy.get('#ss')
    }

    getIncreaseAdultsNumberButton(){
        return cy.get('[aria-label="Increase number of Adults"]')
    }

    calendarField(){
        return cy.get('[class="xp__dates-inner"]')
    }

    searchDilijan(){
        this.getSearchField().type('Dilijan')
    }

    clickOnCalendar(){
        this.calendarField().click()
    }

    searchButton(){
        return cy.get('.js-sb-submit-text')
    }

    selectStartingDateField(start_date ) {
        let startDate = new Date(today.setDate(today.getDate()+start_date)).
        toISOString().split('T')[0]

        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let startDay = new Date(today.setDate(today.getDate()))
            .toLocaleString(undefined, options);

        assertStartDay = startDay
        getStartDayToAssert = start_date
        return cy.get('[data-date="'+startDate+'"]')
    }

    selectEndDateField(end_date){
        let endDate = new Date(finishDay.setDate(finishDay.getDate()+end_date)).
        toISOString().split('T')[0]

        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let endDay = new Date(finishDay.setDate(finishDay.getDate()))
            .toLocaleString(undefined, options);

        assertEndDay = endDay
        getEndDateToAssert = end_date
        return cy.get('[data-date="'+endDate+'"]')
    }

    addAdults(){
        this.getAdultsField().click()
        this.getIncreaseAdultsNumberButton().click()
    }

    generateDifferenceOfDates(){
        let result = getEndDateToAssert -getStartDayToAssert
        return result
    }

    getResultOfStartDay(){
        return assertStartDay
    }

    getResultOfEndDay(){
        return assertEndDay
    }

    selectStartDate(start_date) {
        this.selectStartingDateField(start_date).click()
    }

    selectEndDate(end_date) {
        this.selectEndDateField(end_date).click()
    }
}
    module.exports = new Homepage();
    let today = new Date()
    let finishDay = new Date()
    let getStartDayToAssert;
    let getEndDateToAssert;
    let assertStartDay;
    let assertEndDay


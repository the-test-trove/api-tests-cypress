
///<reference types = 'cypress'/>
describe('POST API Test', () => {
    it('Create Activity', () => {

        cy.fixture('activity.json').as('inputRequest')
        cy.POST(Cypress.config().baseUrl,"Activities").then((response => 
        {
            expect(response.status,200)
            cy.log("The Status cod receieved is: " + response.status)
            cy.log( JSON.stringify(response.body))
            }
            
            ))
        
    });


});
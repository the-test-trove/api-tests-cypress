
///<reference types = 'cypress'/>
describe('PUT API Tests', () => {
    it('Update Activity', () => {

        cy.fixture('updateactivity.json').as('inputRequest')
        cy.PUT(Cypress.config().baseUrl,"Activities",13).then((response => 
        {
            expect(response.status,200)
            cy.log("The Status cod receieved is: " + response.status)
            cy.log( JSON.stringify(response.body))
            }
            
            ))
        
    });
});
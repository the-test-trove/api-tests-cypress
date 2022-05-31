
///<reference types = 'cypress'/>
describe('Delete API Test', () => {
    it('Delete Activity', () => {

        cy.fixture('updateactivity.json').as('inputRequest')
        cy.DELETE(Cypress.config().baseUrl,"Activities",13).then((response => 
        {
            expect(response.status,200)
            cy.log("The Status cod receieved is: " + response.status)
            cy.log( JSON.stringify(response.body))
            }
            
            ))
        
    });
});
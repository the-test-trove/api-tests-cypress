
///<reference types = 'cypress'/>
describe('Activities', () => {
    it('Get All Activity Details', () => {
        cy.GETALL(Cypress.config().baseUrl,"Activities").then((response => 
            {
            expect(response.status,200)
            cy.log("The Status cod receieved is: " + response.status)
            cy.log( JSON.stringify(response.body))
            }
            
            ))
        
    });

    it('Get Activity Details By ID', () => {
        cy.GETBYID(Cypress.config().baseUrl,"Activities", 2).then((response => 
            {
            expect(response.status,200)
            cy.log("The Status cod receieved is: " + response.status)
            cy.log( JSON.stringify(response.body))
            }
            
            ))
        
    });
});
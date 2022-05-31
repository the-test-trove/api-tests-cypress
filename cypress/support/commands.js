// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('GETALL', (baseURL, activities) =>
{
   
        cy.request(
            {
                method: "GET",
                url : baseURL +"/api/v1/"+ activities ,
                failOnStatusCode: false,
                //Authtication if required
                // auth:
                // {
                //     username : userName,
                //     password: "password"
                // },
                headers:
                {
                    'Content-Type': 'application/json;charset=UTF-8'
                },

            })

});


Cypress.Commands.add('GETBYID', (baseURL, activities, id) =>
{
   
        cy.request(
            {
                method: "GET",
                url : baseURL +"/api/v1/"+ activities+"/"+id,
                failOnStatusCode: false,
                //Authtication information can be specified here
                // auth:
                // {
                //     username : userName,
                //     password: "password"
                // },
                headers:
                {
                    'Content-Type': 'application/json;charset=UTF-8'
                },

            })

});



Cypress.Commands.add('POST', (baseURL,activities) =>
{
    cy.get('@inputRequest').then(inputdata =>{
        
        cy.request(
            {
                method: "POST",
                url : baseURL+"/api/v1/"+ activities, 
                failOnStatusCode: false,
                headers:
                {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: inputdata

            })
    })

});



Cypress.Commands.add('PUT', (baseURL,activities,id) =>
{
    cy.get('@inputRequest').then(inputdata =>{
        
        cy.request(
            {
                method: "PUT",
                url : baseURL+"/api/v1/"+ activities+"/"+ id, 
                failOnStatusCode: false,
                headers:
                {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: inputdata

            })
    })

});




Cypress.Commands.add('DELETE', (baseURL, activities, id) =>
{
   
        cy.request(
            {
                method: "DELETE",
                url : baseURL +"/api/v1/"+ activities+"/"+id,
                failOnStatusCode: false,
                headers:
                {
                    'Content-Type': 'application/json;charset=UTF-8'
                },

            })

});

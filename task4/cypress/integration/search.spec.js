describe('Search', () => {
    it('succesfully searches by title', () => {
        // visit 'baseUrl'
        cy.visit('/');

        cy.get("input.searchMovie").type('test');
        cy.get("button.search").click();

        cy.get('.movieThumbnailContainer').should('have.length', 1);
    });
    /*it('succesfully searches by title', () => {

        cy.visit('/');

        cy.get("input.searchMovie").type('test');
        cy.get("button.search").click();

        cy.get('.movieThumbnailContainer').should('have.length', 1);
    });
*/
    it('cy.server() - control behavior of network requests and responses', () => {
        // https://on.cypress.io/server

        cy.server().should((server) => {
            // the default options on server
            // you can override any of these options
            expect(server.delay).to.eq(0)
            expect(server.method).to.eq('GET')
            expect(server.status).to.eq(200)
            expect(server.headers).to.be.null
            expect(server.response).to.be.null
            expect(server.onRequest).to.be.undefined
            expect(server.onResponse).to.be.undefined
            expect(server.onAbort).to.be.undefined

            // These options control the server behavior
            // affecting all requests

            // pass false to disable existing route stubs
            expect(server.enable).to.be.true
            // forces requests that don't match your routes to 404
            expect(server.force404).to.be.false
            // whitelists requests from ever being logged or stubbed
            expect(server.whitelist).to.be.a('function')
        })
    });

});
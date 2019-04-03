describe('Search', () => {
    it('succesfully searches by title', () => {
        // visit 'baseUrl'
        cy.visit('/');

        cy.get("input.searchMovie").type('test');
        cy.get("button.search").click();

        cy.get('.movieThumbnailContainer').should('have.length', 1);
    });
/*
    it('succesfully searches by title', () => {

        cy.visit('/');

        cy.get("input.searchMovie").type('test');
        cy.get("button.search").click();

        cy.get('.movieThumbnailContainer').should('have.length', 1);
    });*/
});
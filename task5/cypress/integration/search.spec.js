describe('Search', () => {
    it('searches by title', () => {
        cy.visit('/');

        cy.get('input.searchMovie').type('test');
        cy.get('button.search').click();
        cy.wait(1000);

        cy.get('.movieThumbnailContainer').should('have.length', 1);
    });

    it('searches by genre', () => {
        cy.visit('/');

        cy.get("input.searchMovie").type('action');
        cy.get("#genre").click();
        cy.get("button.search").click();
        cy.wait(1000);

        cy.get('.movieThumbnailContainer').each(($el) => {
            expect($el.find('.genres')).to.contain('Action');
        });
    });

    it('sorts by release date', () => {
        cy.visit('/');

        cy.get("#sortByRelease").click();
        cy.wait(1000);

        cy.get(':first-child > .title-year > div').contains('Guardians of the Galaxy Vol. 3');
    });

    it('sorts by rating', () => {
        cy.visit('/');

        cy.get("#sortByRating").click();
        cy.wait(1000);

        cy.get(':first-child > .title-year > div').contains('Gemini');
    });
});
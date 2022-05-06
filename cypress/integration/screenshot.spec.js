describe('Screenshot index page', () => {
    it('successfully loads index', () => {
        cy.visit('/');
        cy.screenshot('index');
    });
});

describe('Screenshot destination page', () => {
    it('successfully loads index', () => {
        cy.visit('/destination');
        cy.screenshot('destination');
    });
});

describe('Screenshot crew page', () => {
    it('successfully loads index', () => {
        cy.visit('/crew');
        cy.screenshot('crew');
    });
});

describe('Screenshot technology page', () => {
    it('successfully loads index', () => {
        cy.visit('/technology');
        cy.screenshot('technology');
    });
});
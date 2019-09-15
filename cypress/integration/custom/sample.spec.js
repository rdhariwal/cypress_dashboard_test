describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
        cy.visit('https://office.staging.move.mil')
        cy.get('.officeHeaderOne')
            .contains("office.move.mil")
    })
})
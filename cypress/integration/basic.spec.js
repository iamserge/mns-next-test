describe("Basic test", () => {
    it("should show M&S Logo", () => {
        cy.visit("/");
        cy.contains("M&S TEST SHOP").should("exist");
    });
    it("should show Log in button", () => {
        cy.visit("/");
        cy.contains("Log in").should("exist");
    });
    it("should show specific product", () => {
        cy.visit("/");
        cy.contains("Jersey Animal Print Swing Mini Dress").should("exist");
    });
});

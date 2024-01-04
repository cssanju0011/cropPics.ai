class copyAutomation {

    duplicate() {
        cy.wait(6000);
        return cy.get(".project-card_projectCard__IIOiG:first-child .project-card_option__HSx9D:nth-child(3)")
    }

    confirm() {
        cy.wait(5000);
        return cy.get('.ant-modal-footer > .ant-btn-primary')
    }
}

export default copyAutomation;
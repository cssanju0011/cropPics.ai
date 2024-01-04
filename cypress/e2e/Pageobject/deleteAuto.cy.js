class deletecart {

    deleteAutomation() {
        cy.wait(5000);
        return cy.get(".project-card_projectCard__IIOiG:first-child .project-card_option__HSx9D:last-child")
    }


    confirmPopup() {
        return cy.get(".input_inputBox__MVXXp")
    }

    confirm() {
        return cy.get('.ant-modal-footer > .ant-btn-primary > span')
    }


}

export default deletecart;
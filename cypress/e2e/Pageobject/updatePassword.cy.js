class password {

    settings() {
        return cy.get(".ant-row-space-between .ant-btn-lg")
    }

    profile_Security() {
        return cy.get(':nth-child(1) > .action_actionCardContainer__5uX63')
    }

    changepassword() {
        return cy.get('.vlayout_NoFlex__MlS2e > .ant-btn')
    }

    currentPassword() {
        return cy.get(':nth-child(3) > .ant-input-affix-wrapper > .ant-input')
    }

    newPassword() {
        return cy.get(':nth-child(4) > .ant-input-affix-wrapper > .ant-input')
    }

    confirmPassword() {
        return cy.get(':nth-child(5) > .ant-input-affix-wrapper > .ant-input')
    }

    savePassword() {
        return cy.get('.vlayout_NoFlex__MlS2e > .ant-btn')
    }

    toastmsg(){
        cy.get('.toast_toastContent__l_VNq').should('have.text',"Incorrect username or password.")
    }






}
export default password;
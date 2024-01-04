
class createUser {

    geturl() {
        return cy.visit("https://app.dev.crop.photo/user/login")
    }

    getcreateaccount() {
        return cy.get('.hlayout_hlayout__82E6D > .ant-btn-default > span')
    }

    getfirstname() {
        return cy.get('[style="width: 100%; margin-right: 16px;"] > .input_inputBoxDiv__eRWIc > .ant-input')
    }

    getlastname() {
        return cy.get('[style="justify-content: center; align-items: center; gap: 0px;"] > :nth-child(2) > .ant-input')

    }

    getemail() {
        return cy.get('.vlayout_vlayout__y3Z6q > :nth-child(2) > .ant-input')
    }

    getpassword() {
        return cy.get('.ant-input-affix-wrapper > .ant-input')

    }

    getsubmit() {
        return cy.get('.ant-btn-primary > span')

    }

}

export default createUser;

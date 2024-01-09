class cardbilling {

    billing() {
        return cy.get("div#__next div.navigationList_bottomItems__sSwR1 > div:nth-child(1) > button#navigationList_navigationButton__u0GNV > span")

    }

    removeCard() {
        return cy.get('.Billing_removeCardButton__Je3j4 > .Billing_balanceTitle__tNPHY')
    }

    changePlan() {
        return cy.get('.ant-space-item > .ant-btn > span')
    }

    searchProjects() {
        return cy.get('.ant-input-affix-wrapper')
    }

    userLogout(){
        cy.get('.ant-row-space-between .ant-btn-lg').click()
      return  cy.get('.Settings_settingsPageLogoutButton__g44dt')
    }

}

export default cardbilling;
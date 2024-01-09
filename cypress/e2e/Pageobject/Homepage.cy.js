   class Homepage
 {

    getloginurl()
    {

        return cy.visit("https://app.dev.crop.photo/user/login")
    }

    getUserEmail()
    {
        return cy.get(':nth-child(1) > .ant-input')
    }

    getUserPassword()
    {
       return cy.get('.ant-input-affix-wrapper > .ant-input')
    }

    Signin()
    {
        return cy.get('.ant-btn-primary > span')
    }

    userLogout() {
        cy.get('.ant-row > :nth-child(2) > .ant-btn').click({ multiple: true })
        cy.wait(3000)
        return cy.get('.Settings_settingsPageLogoutButton__g44dt')
      }

 }

 export default Homepage;
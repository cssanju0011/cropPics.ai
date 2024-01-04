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

 }

 export default Homepage;
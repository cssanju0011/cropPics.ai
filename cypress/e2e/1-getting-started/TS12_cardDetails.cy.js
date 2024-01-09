//<reference types="cypress" />
import Homepage from "../Pageobject/Homepage.cy";
import cardbilling from "../Pageobject/cardDetails.cy";


describe('Login', function Userlogin() {
    const homepage = new Homepage()
    var card = new cardbilling()

    before(() => {
        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })

    it('billing', function () {

        cy.viewport(1200, 800);
        //visit URL
        homepage.getloginurl()

        //Enter the UserEmail iD
        homepage.getUserEmail().type(this.data.Email)

        //Enter the User password
        homepage.getUserPassword().type(this.data.Password, { force: true })

        //Clicks on signup button
        homepage.Signin().click()

        cy.wait(5000);

        card.searchProjects().type("Shadow")

        //Clicks on billing
        card.billing().click({ force: true })

        //clicks on remove card 
        card.removeCard().click()

        //change plan
        card.changePlan().click()

        //Take a screenshot
        cy.screenshot('Editcard');

    })
})


















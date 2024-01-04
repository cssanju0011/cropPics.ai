//<reference types="cypress" />
import Homepage from "../Pageobject/Homepage.cy";
import copyAutomation from "../Pageobject/cartDuplicate.cy";


describe('Login', function duplicate() {

    const homepage = new Homepage()
    const cart = new copyAutomation()

    before(() => {
        cy.fixture('example').then(function (data) {
            this.data = data

        })

    })

    it('userlogin', function() {

        cy.viewport(1200, 800);
        //visit URL
        homepage.getloginurl()

        //Enter the UserEmail iD
        homepage.getUserEmail().type(this.data.Email)

        //Enter the User password
        homepage.getUserPassword().type(this.data.Password, { force: true })

        //Clicks on signup button
        homepage.Signin().click()
 
        //click on duplicate automation
        cart.duplicate().click()
           
        //click on confirm button
        cart.confirm().click()

        //Take a screenshot
        cy.screenshot('copyAutomation');
        
    })
})




















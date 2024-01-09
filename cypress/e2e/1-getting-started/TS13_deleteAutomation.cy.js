//<reference types="cypress" />
import Homepage from "../Pageobject/Homepage.cy";
import deletecart from "../Pageobject/deleteAuto.cy";

export function emptyCart() {
    describe('Test11', function deleteAutomation() {

        const homepage = new Homepage()
        const dltCart = new deletecart()

        before(() => {
            cy.fixture('example').then(function (data) {
                this.data = data

            })

        })

        it('userlogin', function () {

            cy.viewport(1200, 800);
            //visit URL
            homepage.getloginurl()

            //Enter the UserEmail iD
            homepage.getUserEmail().type(this.data.Email)

            //Enter the User password
            homepage.getUserPassword().type(this.data.Password, { force: true })

            //Clicks on signup button
            homepage.Signin().click()

            for (let i = 0; i < 4; i++) {
                //clicks on delete automation
                dltCart.deleteAutomation().click()

                //type delete 
                dltCart.confirmPopup().type("Delete")

                //clicks on delete button
                dltCart.confirm().click()

                //Take a Screenshot
                //  cy.screenshot('DeleteCart');

            }

        })
    })
}
//<reference types="cypress" />
import Homepage from "../Pageobject/Homepage.cy";

export function login() {
    describe('login_logout', function () {

        const homepage = new Homepage()
        before(() => {
            cy.fixture('example').then(function (data) {
                this.data = data

            })
        })

        it('login', function () {

            cy.viewport(1200, 800);
            //visit URL
            homepage.getloginurl()

            //Enter the UserEmail iD
            homepage.getUserEmail().type(this.data.Email)

            //Enter the User password
            homepage.getUserPassword().type(this.data.Password, { force: true })

            //Clicks on signup button
            homepage.Signin().click()

        })

    })
}
export function logout() {
    const homepage = new Homepage()
    it('logout', function () {

        homepage.userLogout().click()

    })
}



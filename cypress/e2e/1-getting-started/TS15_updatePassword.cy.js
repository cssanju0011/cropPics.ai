//<reference types="cypress" />
import Homepage from "../Pageobject/Homepage.cy";
import password from "../Pageobject/updatePassword.cy";



describe('Login', function updatePassword() {

    const homepage = new Homepage()
    const pswd = new password()
    
    before(() => {
        cy.fixture('example').then(function (data) {
            this.data = data

        })

    })

    it('userlogin', function () {

       /* cy.viewport(1200, 800);
        //visit URL
        homepage.getloginurl()

        //Enter the UserEmail iD
        homepage.getUserEmail().type(this.data.Email)

        //Enter the User password
        homepage.getUserPassword().type(this.data.Password, { force: true })

        //Clicks on signup button
        homepage.Signin().click()*/

        cy.wait(5000);

        //clicks on setting 
        pswd.settings().click()

       //clicks on profile&security
        pswd.profile_Security().click()

        //clicks on current password
        pswd.changepassword().click()

        //Enter current password
        pswd.currentPassword().type("Sanjay@011")

        //Enter new password
        pswd.newPassword().type("Sanjay@1995")

        //confirm new password
        pswd.confirmPassword().type("Sanjay@1995")

        //Clicks on save button
        pswd.savePassword().click()

        //validate the toaste message
        pswd.toastmsg()

        //Take a Screenshot
        cy.screenshot('update password');
        
    })

})
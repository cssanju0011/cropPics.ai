//<reference types="cypress" />
import createUser from "../Pageobject/createUser.cy"

export function createNewUser() {
   describe('SecondTest', function () {

      before(() => {
         cy.fixture('example').then(function (data) {
            this.data = data
         })

      })

      it('newUser', function () {
         const homepage = new createUser()

         //Visit URL
         homepage.geturl()

         //Click on create New Account
         homepage.getcreateaccount().click()

         //Enter User First Name
         homepage.getfirstname().type(this.data.Name)

         //Enter User Last Name
         homepage.getlastname().type(this.data.Lastname)

         //Enter User Email ID
         homepage.getemail().type(this.data.Email)

         //Enter User Password
         homepage.getpassword().type(this.data.Password)

         //Clicks on submit button
         homepage.getsubmit().click();

      })

   })
}

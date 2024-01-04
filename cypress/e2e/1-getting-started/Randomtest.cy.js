//<reference types="cypress" />
import Headless from "../Pageobject/Headlesscrop.cy";
import Homepage from "../Pageobject/Homepage.cy";
import { random_name } from "../Pageobject/Randomname.cy";


describe('Login', function hdless() {

    const homepage = new Homepage()
    var headless = new Headless()

    var random;

    random = random_name();

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

        //clicks on Automation
        headless.headlessAutomation().click()

        for(let i =0; i <50 ; i++){
        //Select the image and upload
        cy.get('input[type=file]').selectFile('cypress/fixtures/UploadImages/image2.jpeg', { force: true })
        }




    })
})
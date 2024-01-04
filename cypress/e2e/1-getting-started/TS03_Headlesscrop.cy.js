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

        //Select the image and upload
        headless.uploadImage().selectFile('cypress/fixtures/UploadImages/image2.jpeg', { force: true })

        //Enter project Name
        headless.projectName().type(random + "Headless_crop")

        //Select imagebackground 
        headless.selectBackground().click()

        //Clicks on crop button
        headless.startCrop().click()

        //click on cross button
        headless.closeAutomation().click()

        //Take a screenshot 
        cy.screenshot('Headless');
        
    })

    after(() => {
        headless.userLogout().click()

    })
})























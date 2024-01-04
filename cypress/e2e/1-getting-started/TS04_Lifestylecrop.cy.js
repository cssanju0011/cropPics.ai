//<reference types="cypress" />
import Homepage from "../Pageobject/Homepage.cy";
import Lifestyle from "../Pageobject/Lifestylecrop.cy";
import { random_name } from "../Pageobject/Randomname.cy";


describe('Login', function lyfStyle() {

    const homepage = new Homepage()
    var headless = new Headless()

    var random;

    random = random_name();

    before(() => {
        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })

    it('lifeStylecrop', function () {
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
        lifestyle.lifestyleAutomation().click()

        //Select the image and upload
        lifestyle.uploadImage().selectFile('cypress/fixtures/UploadImages/image2.jpeg', { force: true })

        //Enter project Name
        lifestyle.projectName().type(random + "lifestyle_crop")

        //Select imagebackground
        lifestyle.reviewSettings().click()

        //Clicks on crop button
        lifestyle.startCrop().click()

        //click on cross button
        lifestyle.closeAutomation().click() 
    })

    after(() => {
        lifestyle.userLogout().click()

    })
})




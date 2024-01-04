//<reference types="cypress" />
import Headshotfix from "../Pageobject/Headshotfix.cy";
import Homepage from "../Pageobject/Homepage.cy";
import { random_name } from "../Pageobject/Randomname.cy";


describe('Login', function Hshot() {
    const homepage = new Homepage()
    var headShot = new Headshotfix()

    var random;

    random = random_name();

    before(() => {
        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })

    it('headShot', function () {
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
        headShot.headshot().click()

        for( let i=0; i <10; i++) {
        //Select the image and upload
        headShot.uploadImage().selectFile('cypress/fixtures/UploadImages/headshot.jpeg', { force: true })
        }

        //Enter project Name
        headShot.projectName().type(random + "head_Shot")

        //Select imagebackground 
        headShot.selectBackground().click()

        //Clicks on crop button
        headShot.startCrop().click()

        //click on cross button
        headShot.closeAutomation().click()

    })
    after(() => {
        headShot.userLogout().click()

    })
})

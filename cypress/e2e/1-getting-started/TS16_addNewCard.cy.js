//<reference types="cypress" />
import Flatmagic from "../Pageobject/Flatlaymagic.cy";
import Homepage from "../Pageobject/Homepage.cy";
import { random_name } from "../Pageobject/Randomname.cy";


describe('Login', function Flat_M() {
    const homepage = new Homepage()
    var flat = new Flatmagic()
    var random;

    random = random_name();

    before(() => {
        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })

    it('vPhotos', function () {
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
        flat.flatMagic().click()

        //Select the image and upload
        flat.uploadImage().selectFile('cypress/fixtures/UploadImages/image2.jpeg', { force: true })

        //Enter project Name
        flat.projectName().type(random + "flat_Photos")

        //Select imagebackground 
        flat.selectBackground().click()

        //Clicks on crop button
        flat.startCrop().click()

        //click on cross button
        flat.closeAutomation().click()

    })
    after(() => {
        flat.userLogout().click()

    })
})
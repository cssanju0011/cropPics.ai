//<reference types="cypress" />
import Shadow from "../Pageobject/Shadow.cy";
import Homepage from "../Pageobject/Homepage.cy";
import { random_name } from "../Pageobject/Randomname.cy";


describe('Login', function S_Imgs() {
    const homepage = new Homepage()
    var shadowImgs = new Shadow()
    var random;

    random = random_name();

    before(() => {
        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })

    it('shadowImg', function () {
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
        shadowImgs.shadowImages().click()

        //Select the image and upload
        shadowImgs.uploadImage().selectFile('cypress/fixtures/UploadImages/image2.jpeg', { force: true })

        //Enter project Name
        shadowImgs.projectName().type(random + "flat_Photos")

        //Select imagebackground 
        shadowImgs.selectBackground().click()

        //Clicks on crop button
        shadowImgs.startCrop().click()

        //click on cross button
        shadowImgs.closeAutomation().click()

    })
    after(() => {
        shadowImgs.userLogout().click()

    })
})




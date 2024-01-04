//<reference types="cypress" />
import Homepage from "../Pageobject/Homepage.cy";
import { random_name } from "../Pageobject/Randomname.cy";
import volumePhotos from "../Pageobject/Volumephotos.cy";


describe('Login', function v_pics() {
    const homepage = new Homepage()
    var Vphto = new volumePhotos()
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
        Vphto.vPhotos().click()

        //Select the image and upload
        Vphto.uploadImage().selectFile('cypress/fixtures/UploadImages/image2.jpeg', { force: true })

        //Enter project Name
        Vphto.projectName().type(random + "volume_Photos")

        //Select imagebackground 
        Vphto.selectBackground().click()

        //Clicks on crop button
        Vphto.startCrop().click()

        //click on cross button
        Vphto.closeAutomation().click()

    })
    after(() => {
        Vphto.userLogout().click()

    })
})
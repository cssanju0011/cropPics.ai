//<reference types="cypress" />
import Bodyaware from "../Pageobject/Bodyawarecrop.cy";
import Homepage from "../Pageobject/Homepage.cy";
import { random_name } from "../Pageobject/Randomname.cy";


describe('Test5', function bdyAware() {
    const homepage = new Homepage()
    var body = new Bodyaware()
    var random;

    random = random_name();

    before(() => {
        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })

    it('userlogin', function () {
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
        body.bodyCropAutomation().click()

        //Select the image and upload
        body.uploadImage().selectFile('cypress/fixtures/UploadImages/image2.jpeg', { force: true })

        //Enter project Name
        body.projectName().type(random + "BodyAware_crop")

        //Select imagebackground 
        body.selectBackground().click()

        //Clicks on crop button
        body.startCrop().click()

        //click on cross button
        body.closeAutomation().click()

    })
    after(() => {
        body.userLogout().click()

    })
})



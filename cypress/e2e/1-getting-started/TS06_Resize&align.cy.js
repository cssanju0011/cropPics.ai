//<reference types="cypress" />
import Resizeandalign from "../Pageobject/Resize&align.cy";
import Homepage from "../Pageobject/Homepage.cy";
import { random_name } from "../Pageobject/Randomname.cy";


describe('Login', function R_align() {
    const homepage = new Homepage()
    var body = new Bodyaware()
    var random;

    random = random_name();

    before(() => {
        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })

    it('Resize&align', function () {
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
        resize.autoResize().click()

        //Select the image and upload
        resize.uploadImage().selectFile('cypress/fixtures/UploadImages/image2.jpeg', { force: true })

        //Enter project Name
        resize.projectName().type(random + "Resize_align")

        //Select imagebackground 
        resize.selectBackground().click()

        //select Margin
        resize.selectMargin().invoke('click');

        //Clicks on crop button
        resize.startCrop().click()

        //click on cross button
        resize.closeAutomation().click()

    })
    after(() => {
        resize.userLogout().click()

    })
})

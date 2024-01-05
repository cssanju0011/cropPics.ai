//<reference types="cypress" />
import Headless from "../Pageobject/Headlesscrop.cy.js";
import Homepage from "../Pageobject/Homepage.cy";
import { random_name } from "../Pageobject/Randomname.cy";


describe('Automation', function headlesscrop() {

    const homepage = new Homepage()
    var headless = new Headless()

    var random;

    random = random_name();

    before(() => {
        cy.fixture('example').then(function (data) {
            this.data = data

        })

    })

    it('Headlss', function () {

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
        headless.projectName().clear().type(random + "Headless_crop")

        //Select Body Parts
        headless.selectBodyParts().type("Face")

        //Validate the body parts
        headless.validateBodyParts().each(($e1, index, $list) => {
            if ($e1.text() === "Face") {
                $e1.click()
            }
        })

       /* //Crop areas
        headless.topCropArea().clear().type("90%")
        headless.leftCropArea().clear().type("90%")
        headless.rightCropArea().clear().type("90%")
        headless.downCropArea().clear().type("90%")*/

        headless.selectBackGround().click()

        //Select imagebackground 
        headless.orignalBackground().click()
       // headless.transParent().click()
       // headless.whiteBackGround().click()
       // headless.solidBackGround().click()

       
        headless.selectOutputSize().click()

        //ImageCropSize
        headless.Square().click()
        //headless.landScape().click()
       // headless.portRait().click()
       // headless.amazon().click()

       //Clicks on advance setting
        headless.advanceSetting().click()
        
        headless.selectOutputFormat().click()

        //Formatsize
        headless.auto().click()
       // headless.JPEG().click()
       // headless.PNG().click()
      //  headless.WEBP().click()

        headless.imageQuality().clear().type("8")

        headless.reviewSettings().click()

        //Clicks on crop button
        headless.startCrop().click()

        //click on cross button
        headless.closeAutomation().click()

        //Take a screenshot 
       // cy.screenshot('Headless');

    })
})























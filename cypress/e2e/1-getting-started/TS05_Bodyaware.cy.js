//<reference types="cypress" />
import Bodyaware from "../Pageobject/Bodyawarecrop.cy";
import Homepage from "../Pageobject/Homepage.cy";
import { random_name } from "../Pageobject/Randomname.cy";

export function bodyAwareCrop() {
    describe('Test4', function () {
        const homepage = new Homepage()
        var body = new Bodyaware()
        var random;

        random = random_name();

        before(() => {
            cy.fixture('example').then(function (data) {
                this.data = data
            })

        })

        it('bodyA', function () {
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
            body.projectName().clear().type(random + "BodyAware_crop")

            //Select Body Parts
            body.selectBodyParts().type("Face")

            //Validate the body parts
            body.validateBodyParts().each(($e1, index, $list) => {
                if ($e1.text() === "Face") {
                    $e1.click()
                }
            })

            /* //Crop areas
           body.topCropArea().clear().type("90%")
           body.leftCropArea().clear().type("90%")
           body.rightCropArea().clear().type("90%")
           body.downCropArea().clear().type("90%")*/

           body.selectBackGround().click()

            //Select imagebackground 
            body.orignalBackground().click()
            // body.transParent().click()
            // body.whiteBackGround().click()
            // body.solidBackGround().click()


            body.selectOutputSize().click()

            //ImageCropSize
            body.Square().click()
            //body.landScape().click()
            // body.portRait().click()
            // body.amazon().click()

            //Clicks on advance setting
            body.advanceSetting().click()

            body.selectOutputFormat().click()

            //Formatsize
            body.auto().click()
            // body.JPEG().click()
            // body.PNG().click()
            //  body.WEBP().click()

            body.imageQuality().clear().type("8")

            body.reviewSettings().click()

            //Clicks on crop button
            body.startCrop().click()

            //click on cross button
            body.closeAutomation().click()

            //Take a screenshot 
            // cy.screenshot('Headless');

        })

    })
}



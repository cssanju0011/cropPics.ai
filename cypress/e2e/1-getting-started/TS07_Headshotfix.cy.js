//<reference types="cypress" />
import Headshotfix from "../Pageobject/Headshotfix.cy";
import Homepage from "../Pageobject/Homepage.cy";
import { random_name } from "../Pageobject/Randomname.cy";


    describe('Test6', function Hshot() {
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
            headShot.headshotCart().click()

            for (let i = 0; i < 2; i++) {
                //Select the image and upload
                headShot.uploadImage().selectFile('cypress/fixtures/UploadImages/headshot.jpeg', { force: true })
            }

            //Enter project Name
            headShot.projectName().clear().type(random + "head_Shot")

            //Select Body Parts
            headShot.selectBodyParts().type("Face")

            //Validate the body parts
            headShot.validateBodyParts().each(($e1, index, $list) => {
                if ($e1.text() === "Face") {
                    $e1.click()
                }
            })

            /* //Crop areas
             headShot.topCropArea().clear().type("90%")
             headShot.leftCropArea().clear().type("90%")
             headShot.rightCropArea().clear().type("90%")
             headShot.downCropArea().clear().type("90%")*/

             headShot.selectBackground().click()

             //Select imagebackground 
             headShot.orignalBackground().click()
             // headShot.transParent().click()
             // headShot.whiteBackGround().click()
             // headShot.solidBackGround().click()
 
 
             headShot.selectOutputSize().click()
 
             //ImageCropSize
             headShot.Square().click()
             //headShot.landScape().click()
             // headShot.portRait().click()
             // headShot.amazon().click()
 
             //Clicks on advance setting
             headShot.advanceSetting().click()
 
             headShot.selectOutputFormat().click()
 
             //Formatsize
             headShot.auto().click()
             // headShot.JPEG().click()
             // headShot.PNG().click()
             //  headShot.WEBP().click()
 
             headShot.imageQuality().clear().type("8")
 
             headShot.reviewSettings().click()
 
             //Clicks on crop button
             headShot.startCrop().click()
 
             //click on cross button
             headShot.closeAutomation().click()

        })

    })


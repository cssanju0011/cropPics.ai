//<reference types="cypress" />
import Homepage from "../Pageobject/Homepage.cy";
import { random_name } from "../Pageobject/Randomname.cy";
import volumePhotos from "../Pageobject/volumePhotos.cy";

export function volumCrop() {
    describe('Test8', function v_pics() {
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
            Vphto.projectName().clear().type(random + "volume_Photos")

             //Select Body Parts
             Vphto.selectBodyParts().type("Face")

             //Validate the body parts
             Vphto.validateBodyParts().each(($e1, index, $list) => {
                 if ($e1.text() === "Face") {
                     $e1.click()
                 }
             })
 
             /* //Crop areas
              Vphto.topCropArea().clear().type("90%")
              Vphto.leftCropArea().clear().type("90%")
              Vphto.rightCropArea().clear().type("90%")
              Vphto.downCropArea().clear().type("90%")*/
 
              Vphto.selectBackGround().click()
 
             //Select imagebackground 
             Vphto.orignalBackground().click()
             // Vphto.transParent().click()
             // Vphto.whiteBackGround().click()
             // Vphto.solidBackGround().click()
 
 
             Vphto.selectOutputSize().click()
 
             //ImageCropSize
             Vphto.Square().click()
             //Vphto.landScape().click()
             // Vphto.portRait().click()
             // Vphto.amazon().click()
 
             //Clicks on advance setting
             Vphto.advanceSetting().click()
 
             Vphto.selectOutputFormat().click()
 
             //Formatsize
             Vphto.auto().click()
             // Vphto.JPEG().click()
             // Vphto.PNG().click()
             //  Vphto.WEBP().click()
 
             Vphto.imageQuality().clear().type("8")
 
             Vphto.reviewSettings().click()
 
             //Clicks on crop button
             Vphto.startCrop().click()
 
             //click on cross button
             Vphto.closeAutomation().click()
 
             //Take a screenshot 
             // cy.screenshot('Headless');


        })

    })
}
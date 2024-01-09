//<reference types="cypress" />
import Homepage from "../Pageobject/Homepage.cy";
import { random_name } from "../Pageobject/Randomname.cy";
import Lifestyle from "../Pageobject/Lifestylecrop.cy";


describe('thirdTest', function () {

    const homepage = new Homepage()
    var lifestyle = new Lifestyle()
    var random;

    random = random_name();

    before(() => {
        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })

    it('lifeStylecrop', function () {

        //visit URL
        homepage.getloginurl()

        //Enter the UserEmail iD
        homepage.getUserEmail().type(this.data.Email)

        //Enter the User password
        homepage.getUserPassword().type(this.data.Password, { force: true })

        //Clicks on signup button
        homepage.Signin().click()

        //clicks on Automation
        lifestyle.lifestyleAutomation().click()

        //Select the image and upload
        lifestyle.uploadImage().selectFile('cypress/fixtures/UploadImages/image2.jpeg', { force: true })

        //Enter project Name
        lifestyle.projectName().clear().type(random + "lifestyle_crop")

        //clicks on select Margin
        lifestyle.selectMargin().click()

        //optional if select as pixel margin
        //lifestyle.Margin_based_on_Pixels().click()

        lifestyle.topCropArea().clear().type("90%")
        lifestyle.leftCropArea().clear().type("90%")
        lifestyle.rightCropArea().clear().type("90%")
        lifestyle.bottomCropArea().clear().type("90%")

        //clicks on select output type
        lifestyle.selectOutputSize().click()

        //ImageCropSize
        lifestyle.Square().click()
        //lifestyle.landScape().click()
        // lifestyle.portRait().click()
        // lifestyle.amazon().click()


        //Clicks on advance setting
        lifestyle.advanceSetting().click()

        lifestyle.selectOutputFormat().click()

        //Formatsize
        lifestyle.auto().click()
        // lifestyle.JPEG().click()
        // lifestyle.PNG().click()
        //  lifestyle.WEBP().click()

        lifestyle.imageQuality().clear().type("8")

        lifestyle.reviewSettings().click()

        //Clicks on crop button
        lifestyle.startCrop().click()

        //click on cross button
        lifestyle.closeAutomation().click()

        //Take a screenshot 
        // cy.screenshot('Headless');
    })

})





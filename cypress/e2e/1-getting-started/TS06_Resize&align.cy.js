//<reference types="cypress" />
import Resizeandalign from "../Pageobject/Resize&align.cy";
import Homepage from "../Pageobject/Homepage.cy";
import { random_name } from "../Pageobject/Randomname.cy";


describe('Test5', function R_align() {
    const homepage = new Homepage()
    var resize = new Resizeandalign()
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
        resize.projectName().clear().type(random + "Resize_align")

        resize.selectBackGround().click()

        //Select imagebackground 
        resize.orignalBackground().click()
        // resize.transParent().click()
        // resize.whiteBackGround().click()
        // resize.solidBackGround().click()

        resize.selectMargin().click()

        // resize.disbaleMargin().click()

      //  resize.removeAllEdgeContact().click()


        resize.selectshadowRatio().click()

        //resize.enableDropShow().click()


        //shadow ratio
      /*  resize.horizontalRatio().clear().type('10')
        resize.verticalRatio().clear().type('10')
        resize.BlurRatio().clear().type('10')
        resize.Scalingfactor().clear().type('10')*/


        resize.selectOutputSize().click()

        //ImageCropSize
        resize.Square().click()
        //resize.landScape().click()
        // resize.portRait().click()
        // resize.amazon().click()

        //Clicks on advance setting
        resize.advanceSetting().click()

        resize.selectOutputFormat().click()

        //Formatsize
        resize.auto().click()
        // resize.JPEG().click()
        // resize.PNG().click()
        //  resize.WEBP().click()

        resize.imageQuality().clear().type("8")

        resize.reviewSettings().click()

        //Clicks on crop button
        resize.startCrop().click()

        //click on cross button
        resize.closeAutomation().click()

        //Take a screenshot 
        // cy.screenshot('Headless');


    })

})


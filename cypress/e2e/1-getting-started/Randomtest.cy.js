//<reference types="cypress" />
import Headless from "../Pageobject/Headlesscrop.cy.js";
import Homepage from "../Pageobject/Homepage.cy";
import { random_name } from "../Pageobject/Randomname.cy";


describe('Login', function hdless() {

    const homepage = new Homepage()
    var headless = new Headless()

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
        headless.headlessAutomation().click()


        //Select the image and upload
        cy.get('input[type=file]').selectFile('cypress/fixtures/UploadImages/image2.jpeg', { force: true })

        cy.wait(7000)

        cy.contains("Next: Choose Crop Marker").click()

        cy.get(".ant-select-selector").type("Face")

        cy.get("div.ant-select-item.ant-select-item-option.ant-select-item-option-active > div > span").each(($e1, index, $list) => {
            if ($e1.text() === "Face") {
                $e1.click()
            }
        })


        //crop area top
        cy.get(':nth-child(1) > .ant-input-number-affix-wrapper').clear().type("50%")

        //crop area left
        cy.get('.crop-area_inputWrapperMiddle__jgWW7 > :nth-child(1)').clear().type("50%")

        //crop area down
        cy.get(':nth-child(3) > .ant-input-number-affix-wrapper').clear().type("50%")

        //crop area right
        cy.get('.crop-area_inputWrapperMiddle__jgWW7 > :nth-child(3)').clear().type("50%")

        cy.contains("Next: Choose Background").click()

        //keep original background
        cy.get('#backgrond-settings-radio0 > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()

        //keep Transparent
        cy.get('#backgrond-settings-radio1 > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()

        //Keep White
        cy.get('#backgrond-settings-radio2 > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()

        //Keep solid 
        cy.get('#backgrond-settings-radio3 > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()

        cy.contains("Next: Choose Crop Size").click()

        //Square output size (1080*1080)
        cy.get('#customFormats > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()

        //Landscape output size(1080*540)
        cy.get(':nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()

        //portait output size(540*1080)
        cy.get(':nth-child(3) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()

        //amazon output size(2000*2000)
        cy.get(':nth-child(4) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()


        //Advance setting
        cy.get('.ant-collapse-expand-icon').click()

        //Click on output format
        cy.get('.select-format_advancedSettingsContainer__Yscvy > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()

        //Auto
        cy.get(':nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()

        //PNG
        cy.get(':nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()

        //JPEG
        cy.get(':nth-child(3) > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()

        //WEBP
        cy.get(':nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click()

        //Check Quality
        cy.get('.select-format_advancedSettingsContainer__Yscvy > :nth-child(3) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()

        //quality type
        cy.get('.ant-input-number-input').clear().type("5")

        cy.contains("Next: Review Settings").click()

        cy.contains("Start Crop").click()




    })
})
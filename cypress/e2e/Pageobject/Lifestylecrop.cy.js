
class Lifestyle {

    lifestyleAutomation() {
        cy.wait(5000);
        return cy.get(':nth-child(2) > .card_gifContainer__S58C5 > img')
    }

    uploadImage() {
        return cy.get('input[type=file]')
    }

    projectName() {

        return cy.get('.input_inputBoxDiv__eRWIc > .ant-input')

    }
    selectMargin() {
        cy.wait(4000);
        return cy.get(':nth-child(2) > .stepperV2_svgContainer__Pszm8')
    }

    Margin_based_on_Pixels() {
        cy.wait(4000);
        return cy.get('.ant-radio-button-wrapper:last-child')
    }

    topCropArea() {
        return cy.get(':nth-child(1) > .ant-input-number-affix-wrapper')
    }

    leftCropArea() {
        return cy.get('.crop-area_inputWrapperMiddle__jgWW7 > :nth-child(1)')
    }

    rightCropArea() {
        return cy.get('.crop-area_inputWrapperMiddle__jgWW7 > :nth-child(3)')
    }

    bottomCropArea() {
        return cy.get(':nth-child(3) > .ant-input-number-affix-wrapper')
    }

    selectOutputSize() {
        return cy.contains("Next: Choose Crop Size")
    }

    Square() {
        return cy.get('#customFormats > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input')
    }

    landScape() {
        return cy.get(':nth-child(2) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input')
    }

    portRait() {
        return cy.get(':nth-child(3) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input')
    }

    amazon() {
        return cy.get(':nth-child(4) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input')
    }

    advanceSetting() {
        return cy.get('.ant-collapse-expand-icon')
    }

    selectOutputFormat() {
        return cy.get('.select-format_advancedSettingsContainer__Yscvy > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input')
    }

    auto() {
        return cy.get(':nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input')
    }

    PNG() {
        return cy.get(':nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input')
    }

    JPEG() {
        return cy.get(':nth-child(3) > .ant-radio-wrapper > .ant-radio > .ant-radio-input')
    }

    WEBP() {
        return cy.get(':nth-child(1) > .ant-radio-wrapper > .ant-radio > .ant-radio-input')
    }

    imageQuality() {
        cy.get('.select-format_advancedSettingsContainer__Yscvy > :nth-child(3) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        return cy.get('.ant-input-number-input')
    }

    reviewSettings() {
        return cy.contains("Next: Review Settings")
    }

    startCrop() {
        cy.wait(5000)
        return cy.contains("Start Crop")
    }

    download() {
        return cy.get('.ant-btn-primary')
    }

    closeAutomation() {
        cy.wait(3000)
        return cy.get('.LeftPanel_leftHeader__kN2Ek > .ant-btn')
    }
}
export default Lifestyle;
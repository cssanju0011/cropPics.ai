class Headshotfix {

  headshotCart() {
    cy.wait(5000);
    return cy.get(':nth-child(5) > .card_gifContainer__S58C5 > img')

  }

  uploadImage() {
    return cy.get('input[type=file]')
  }


  projectName() {
    return cy.get('.input_inputBoxDiv__eRWIc > .ant-input')
  }
  selectBodyParts() {
    cy.get(':nth-child(2) > .stepperV2_svgContainer__Pszm8').click()
    return cy.get(".ant-select-selector")

  }

  validateBodyParts() {
    return cy.get("div.ant-select-item.ant-select-item-option.ant-select-item-option-active > div > span")
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

  downCropArea() {
    return cy.get(':nth-child(3) > .ant-input-number-affix-wrapper')
  }

  selectBackground() {
    return cy.contains("Next: Choose Background")
  }
  orignalBackground() {
    return cy.get('#backgrond-settings-radio0 > .ant-radio-wrapper > .ant-radio > .ant-radio-input')
  }

  transParent() {
    return cy.get('#backgrond-settings-radio1 > .ant-radio-wrapper > .ant-radio > .ant-radio-input')
  }

  whiteBackGround() {
    return cy.get('#backgrond-settings-radio2 > .ant-radio-wrapper > .ant-radio > .ant-radio-input')
  }

  solidBackGround() {
    return cy.get('#backgrond-settings-radio3 > .ant-radio-wrapper > .ant-radio > .ant-radio-input')
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

export default Headshotfix;
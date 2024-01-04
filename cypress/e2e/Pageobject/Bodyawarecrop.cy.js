class Bodyaware
 {
    bodyCropAutomation() {
        cy.wait(5000);
        return cy.get(':nth-child(3) > .card_gifContainer__S58C5 > img')
    
    
      }
    
      uploadImage() {
        return cy.get('input[type=file]')
      }
    
    
      projectName() {
        cy.wait(5000);
        cy.get('.ant-input').clear()
        return cy.get('.input_inputBoxDiv__eRWIc > .ant-input')
    
      }
    
      selectBodyParts() {
        cy.get('.ant-select-selector').click()
        return cy.get('div:nth-child(7) > div')
    
      }
    
      selectBackground() {
        cy.wait(5000);
        cy.get(':nth-child(3) > .stepperV2_svgContainer__Pszm8').click()
        return cy.get('#backgrond-settings-radio0 > .ant-radio-wrapper > .ant-radio > .ant-radio-input')
    
      }
    
      startCrop() {
        cy.wait(2000);
        cy.get('.ant-btn-primary').click()
        cy.get('.stepperV2_nextPrevButtons__wUr5m > div > .ant-btn-default').click()
        cy.wait(5000)
        return cy.get('.stepperV2_nextPrevButtons__wUr5m > .ant-btn')
      }
    
      download() {
        return cy.get('.ant-btn-primary')
      }
    
      closeAutomation() {
        cy.wait(5000)
        return cy.get('.LeftPanel_leftHeader__kN2Ek > .ant-btn')
    
      }
      userLogout() {
        cy.get('.ant-row-space-between .ant-btn-lg').click({ multiple: true })
        cy.wait(3000)
        return cy.get('.Settings_settingsPageLogoutButton__g44dt')
      }
    }
  


export default Bodyaware;
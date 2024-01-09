class Flatmagic 
{

  flatMagic() {
    cy.wait(5000);
    return cy.get(':nth-child(6) > .card_gifContainer__S58C5 > img')


  }

  uploadImage() {
    return cy.get('input[type=file]')
  }


  projectName() {
    cy.wait(5000);
    cy.get('.ant-input').clear()
    return cy.get('.input_inputBoxDiv__eRWIc > .ant-input')

  }

  selectBackground() {
    cy.wait(5000);
    cy.get(':nth-child(3) > .stepperV2_svgContainer__Pszm8').click()
    return cy.get('#backgrond-settings-radio0 > .ant-radio-wrapper > .ant-radio > .ant-radio-input')

  }

  selectMargin() {

           cy.get('.ant-switch-inner').should('not.be.disabled');
    return cy.get('.ant-switch-inner')
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

}

export default Flatmagic;
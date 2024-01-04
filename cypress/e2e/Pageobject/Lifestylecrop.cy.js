
class Lifestyle {

    lifestyleAutomation() {
        cy.wait(5000);
        return cy.get(':nth-child(2) > .card_gifContainer__S58C5 > img')
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

    reviewSettings() {
        cy.wait(5000);
        cy.get(':nth-child(3) > .stepperV2_svgContainer__Pszm8').click()
        return cy.get('.ant-btn-primary')

    }
    startCrop() {
        cy.wait(2000);
       return cy.get('.ant-btn-primary')
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


export default Lifestyle;
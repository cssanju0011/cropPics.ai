//<reference types="cypress" />
import { headlessAutomation } from "./TS03_Headlesscrop.cy"
import { createNewUser } from "./TS02_Newusercreate.cy"
import { lifeStyleCrop } from "./TS04_Lifestylecrop.cy"
import { bodyAwareCrop } from "./TS05_Bodyaware.cy"
import { resizePhotos } from "./TS06_Resize&align.cy"
import { headShotCrop } from "./TS07_Headshotfix.cy"
import { flatPhotos } from "./TS08_Flatmagic.cy"
import { volumCrop } from "./TS09_Volumephotos.cy"
import { ShadowCrop } from "./TS10_Shadowpics.cy"
import { duplicateCart } from "./TS14_duplicateAutomation.cy"
import { emptyCart } from "./TS13_deleteAutomation.cy"
import { login,logout} from "./TS16_userlogin&logout.cy"

it('Runalltest', () =>
    [   
        // createNewUser(),
        headlessAutomation(),
        cy.wait(3000),
        lifeStyleCrop(),
        bodyAwareCrop(),
        resizePhotos(),
        headShotCrop(),
        flatPhotos(),
        volumCrop(),
        ShadowCrop(),
        duplicateCart(),
        emptyCart(),
        logout()

    ])
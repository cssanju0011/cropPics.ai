//<reference types="cypress" />
import bdyAware from "./TS05_Bodyaware.cy";
import lyfStyle from "./TS04_Lifestylecrop.cy";
import hdless from "./TS03_Headlesscrop.cy";
import R_align from "./TS06_Resize&align.cy";
import Hshot from "./TS07_Headshotfix.cy";
import Flat_M from "./TS08_Flatmagic.cy";
import v_pics from "./TS09_Volumephotos.cy";
import S_Imgs from "./TS10_Shadowpics.cy";
import Createuser from "./TS02_Newusercreate.cy"


it('Runalltest', () =>
    [
        Createuser(),
        bdyAware(),
        lyfStyle(),
        hdless(),
        R_align(),
        Hshot(),
        Flat_M(),
        v_pics(),
        S_Imgs()
    ])
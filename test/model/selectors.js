import { Selector } from 'testcafe';

class Page {
    constructor () {
        this.heading2              = Selector('h2');
        this.heading5              = Selector('h5');
        this.customRangeMenu          = Selector('li').withText('Custom Range');
        this.rangeMenu          = Selector('li').withText('Range');
        this.homeMenu             = Selector('li').withText('Home');
        this.fromInput           = Selector('#fromControl');
        this.toInput         = Selector('#toControl');
        this.firstItem         = Selector('.first h4');
        this.lastItem         = Selector('.last h4');
    }
}

export default new Page();
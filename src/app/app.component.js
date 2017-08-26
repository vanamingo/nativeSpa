import {WFMComponent} from '../framework/index'


class AppComponent  extends WFMComponent{
    constructor(config){
        super(config);
    }

}


export const appComponent = new AppComponent({
    selector:'app-root', 
    template: `<h4> Hello Component</h4>`

});
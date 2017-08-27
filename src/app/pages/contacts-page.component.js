import {WFMComponent} from '../../framework/index'

class ContactsPageComponent extends WFMComponent{
    constructor(config){
        super(config);
    }
}

export const contactsPageComponent = new ContactsPageComponent({
    selector: 'app-contacts-page',
    template: `<h1> Contacts Page </h1>`
});

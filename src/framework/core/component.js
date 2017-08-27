export class Component {
    constructor(config){
        this.template = config.template;
        this.selector = config.selector;
        this.el = null;
    }

    render(){
        this.el = document.querySelector(this.selector);
        if(!this.el){
            throw new Error(`The component with selector ${this.selector} wasn't find!`);
        }
        this.el.innerHTML = this.template;

        this._initEvents();
    }

    _initEvents(){
        if(!this.events){ return; }

        let events = this.events()
        Object.keys(events).forEach(key => {
            var listenerArr = key.split(' '); 
            var eventName = listenerArr[0]; 
            var selector = listenerArr[1];
            this.el
            .querySelector(selector)
            .addEventListener(eventName, this[events[key]].bind(this))
        });
    }
}
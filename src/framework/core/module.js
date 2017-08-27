import { router } from './../tools/router';
export class Module {
    constructor(config) {
        this.components = config.components;
        this.routes = config.routes;
    }

    start() {
        this.initComponents();
        if(this.routes){
            this.initRoutes();
        }
    }

    initComponents(){
        this.components.forEach(this.renderComponent.bind(this));
    }

    initRoutes(){
        window.addEventListener('hashchange', this.renderRoute.bind(this));
        this.renderRoute();
    }

    renderRoute(){
        let url =  router.getUrl();
        let route = this.routes.find(r => r.path === url);

        if(!route){
            route = this.routes.find(r => r.path === '404');
        }

        document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${route.component.selector}>`
        this.renderComponent(route.component);
    }

    renderComponent(c){
        c.render();
    }

}
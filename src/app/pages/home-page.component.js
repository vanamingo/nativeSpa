import {WFMComponent} from '../../framework/index'

class HomePageComponent extends WFMComponent{
    constructor(config){
        super(config);
    }
}

export const homePageComponent = new HomePageComponent({
    selector: 'app-home-page',
    template: `  <div class="row">
        <div class="col s6 offset-s3">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#tabs">Tabs page</a>
              <a href="#contacts">Contacts</a>
            </div>
          </div>
        </div>
      </div>`
});

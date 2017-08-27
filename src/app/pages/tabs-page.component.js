import { WFMComponent } from '../../framework/index'

class TabsPageComponent extends WFMComponent {
    constructor(config) {
        super(config);
    }
}

export const tabsPageComponent = new TabsPageComponent({
    selector: 'app-tabs-page',
    template: `

        <h1> Tabs Page </h1>
        <div class="row">
        <div class ="col s6 offset-s3">
        <ul class="collapsible popout collapsible-accordion">
          <li >
            <div class="collapsible-header"><i class="material-icons">subtitles</i>First</div>
            <div class="collapsible-body" ><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
          </li>
          <li >
            <div class="collapsible-header"><i class="material-icons">games</i>Second</div>
            <div class="collapsible-body" ><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
          </li>
          <li class="active">
            <div class="collapsible-header "><i class="material-icons">library_books</i>Third</div>
            <div class="collapsible-body" ><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
          </li>
        </ul>
        </div>
        </div>

    
    `
});

import { WFMComponent } from '../../framework/index'

class NotFoundPage extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const notFoundPage = new NotFoundPage({
    selector:'not-found',
    template:` <h1 style:'color:red'> 404 Error </h1> `
});
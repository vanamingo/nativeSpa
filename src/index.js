import {bootstrap} from './framework/core/bootstrap';
import {appModule} from './app/app.module';

console.log('setTimeout');
setTimeout(function(){
    console.log('bootstrap');
    bootstrap(appModule);
} , 3000);

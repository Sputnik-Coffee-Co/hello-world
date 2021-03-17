//This is the js file for the helloworld lightning web component
import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    greeting = 'World';

    changeHandler(event) {
        this.greeting = event.target.value;
    }
}
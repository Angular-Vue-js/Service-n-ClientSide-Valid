import { Component } from '@angular/core';
import { MyRemoteService } from './app.myremoteservice';
import { FormsModule } from '@angular/forms';

@Component({
    templateUrl: './app.converter.html',
    styleUrls: ['./app.component.css'],
})
export class ConverterComponent {
    names: Array<any>;
    remoteService: MyRemoteService;
    inputF: number;
    lastInputF: number;
    lastInputC: number;
    outputF: number;
    inputC: number;
    outputC: number;


    constructor(_remoteService: MyRemoteService) {
        this.remoteService = _remoteService;
    }

    convertToF() {
        this.remoteService.getFahrenheit(this.inputF)
            // Subscribe to observable.
            .subscribe(
                // Success.
                data => {
                    if (this.inputF != null) {
                        this.lastInputF = this.inputF;
                        this.outputF = null;
                        this.names = data
                        //console.log(JSON.stringify(data))
                        let x = data["Fahrenheit"];
                        let y = 1;
                        this.outputF = Math.round(x);
                        //this.inputF = null;
                    }
                    //console.log(x)
                },
                // Error.
                error => {
                    //alert(error)
                    alert("please enter valid number.")
                },
                // Final Instructions.
                () => {
                    //console.log(data)
                });
    }

    convertToC() {
        this.remoteService.getCelsius(this.inputC)
            // Subscribe to observable.
            .subscribe(
                // Success.
                data => {
                    this.lastInputC = this.inputC;
                    this.outputC = null;
                    this.names = data
                    //console.log(JSON.stringify(data))
                    let x = data["Celsius"];
                    let y = 1;
                    this.outputC = Math.round(x);
                    console.log(x)
                },
                // Error.
                error => {
                    //alert(error)
                    alert("please enter valid number.")
                },
                // Final Instructions.
                () => {
                    //console.log(data)
                });
    }


}

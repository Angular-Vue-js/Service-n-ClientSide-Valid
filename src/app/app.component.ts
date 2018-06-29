import { Component, Output } from '@angular/core';
import { MyRemoteService } from './app.myremoteservice';

// This component consumes the re-usable service.
@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl:'./app.component.html',
    
    // Providers allow us to inject an object instance through the constructor.
    providers: [MyRemoteService]
})
export class AppComponent {
    names: Array<any>;
    remoteService: MyRemoteService;
    //outputF: number;
   

    // Since using a provider above we can receive service.
    constructor(_remoteService: MyRemoteService) {
        this.remoteService = _remoteService;
    }

    //convertToC() {
    //}

    /*convertToF() {
        this.remoteService.getFahrenheit(this.outputF)
            // Subscribe to observable.
            .subscribe(
                // Success.
                data => {
                    this.names = data
                    console.log(JSON.stringify(data))
                    let x = data["Fahrenheit"];
                    let y = 0;
                },
                // Error.
                error => {
                    alert(error)
                },
                // Final Instructions.
                () => {
                    console.log("Finished")
                });
    }
*/
    
}

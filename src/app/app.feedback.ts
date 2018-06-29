import { Component } from '@angular/core';
import { MyRemoteService } from './app.myremoteservice';

@Component({
    templateUrl: './app.feedback.html',
    styleUrls: ['./app.component.css'],
})
export class FeedbackComponent {
    emailAddress: string;
    feedbackMsg: string;
    feedbackResponseMsg: string;
    feedbackResponseStatus: string;
    remoteService: MyRemoteService;
    validateEmail: string;
    validateFeedback: string;

    constructor(_remoteService: MyRemoteService) {
        this.remoteService = _remoteService;


    }

    postFeedback() {
        // Create the JavaScript object in the format
        // required by the server.
        let FeedBackObject = {
            "Email": this.emailAddress,
            "Message": this.feedbackMsg
        }

        let EMAILL_PATTERN = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

        if (this.emailAddress == null) {
            this.validateEmail = "Please enter an email address";
        }
        else if ((this.emailAddress != null) && (EMAILL_PATTERN.test(this.emailAddress) == false)) {
            this.validateEmail = "Please enter a valid email address, and do not leave any blank space";
            //this.emailAddress = null;
            //alert("test");
        }
        else if (EMAILL_PATTERN.test(this.emailAddress)) {
            this.validateEmail = null;
        }

        if (!this.feedbackMsg) {
            this.validateFeedback = "Please enter a message";
        }
        else {
            this.validateFeedback = null;
        }


        this.remoteService.postName(FeedBackObject)
            // Subscribe to observable.
            .subscribe(

                // Success.
                data => {
                    this.feedbackResponseMsg = data["Message"];
                    this.feedbackResponseStatus = data["Status"];
                    //console.log(data)
                    //alert(this.feedbackResponseMsg);
                    if (data["Status"] == "Success!") {
                        //if (!this.feedbackMsg) //feedback not valid
                        //{
                        alert(this.feedbackResponseMsg);
                        this.emailAddress = ' ';
                        this.feedbackMsg = ' ';
                        //alert("You cannot leave the feedback area empty");
                        //this.validateFeedback = "You cannot leave the feedback area empty";
                        //}
                    }    //else {
                    //    alert("Email format is not valid.");
                    //}
                    //else {
                    //alert(data["Status"]);
                    //this.emailAddress = ' ';
                    //this.feedbackMsg = ' ';
                    //}
                    //}
                },
                // Error.
                error => {
                    //alert(error)
                    //alert("You cannot submit empty message");

                },
                // Final instructions.
                () => {
                    console.log("Finished")
                });
    }



}

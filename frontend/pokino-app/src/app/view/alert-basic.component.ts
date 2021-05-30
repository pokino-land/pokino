import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-alert-basic',
    templateUrl: './alert-basic.component.html'
})
export class AlertBasicComponent {

    @Input()
    staticAlertClosed: boolean = true;
    @Input()
    alertType: AlertType = AlertType.DEFAULT;

    @Output()
    staticAlertClosedChange = new EventEmitter<boolean>();
    @Output()
    alertTypeChange = new EventEmitter<AlertType>();

    public getAlertMessage(type: AlertType): string {
        let alertMessage: string;
        switch (type) {
            case AlertType.NAME_TAKEN:
                alertMessage = 'The name you chose is not available! Please choose another name';
                break;
            case AlertType.ALREADY_LOGGED_IN:
                alertMessage = 'You have already chosen a name!';
                break;
            case AlertType.NOT_LOGGED_IN:
                alertMessage = 'You have to choose a name before you can click ready!';
                break;
            case AlertType.NO_SERVER_CONNECTION:
                alertMessage = 'Oops! Seems like we cannot reach our server - maybe try again later?';
                break;
            case AlertType.DEFAULT:
                alertMessage = 'Oops! Something went wrong - maybe try again?';
                break;
            default:
                alertMessage = 'Oops! Something went wrong - maybe try again?';
                break;
        }
        return alertMessage;
    }

    public closeAlert(): void {
        this.staticAlertClosedChange.emit(true);
    }
}

export enum AlertType {
    DEFAULT,
    NAME_TAKEN,
    ALREADY_LOGGED_IN,
    NOT_LOGGED_IN,
    NO_SERVER_CONNECTION
}

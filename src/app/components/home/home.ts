import { Component } from '@angular/core';
import { SerialConnectionComponent } from "../../shared/components/serial-connection/serial-connection.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.html',
    styleUrls: ['./home.scss'],
    imports: [SerialConnectionComponent]
})
export class HomeComponent {}

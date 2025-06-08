import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, MainLayoutComponent],
    templateUrl: './app.html',
})
export class AppComponent {
    title = 'Pilote Tortue';
}

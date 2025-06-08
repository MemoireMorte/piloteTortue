import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../side-menu/side-menu';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [CommonModule, RouterOutlet, SideMenuComponent],
    templateUrl: `./main-layout.html`,
    styleUrls: ['./main-layout.scss']
})
export class MainLayoutComponent {}

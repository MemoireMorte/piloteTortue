import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CARTES, ICarte } from '../../data/cartes';
import { CarteComponent } from "../../shared/components/carte/carte";

@Component({
    selector: 'app-routines',
    standalone: true,
    imports: [CommonModule, CarteComponent],
    templateUrl: './routines.html',
    styleUrls: ['./routines.scss']
})
export class RoutinesComponent {
    cartes: ICarte[] = CARTES.filter(carte => carte.category === 'routine');

    onCardClick(carte: ICarte): void {
        console.log('Card clicked:', carte);
        // Handle card click
    }
}

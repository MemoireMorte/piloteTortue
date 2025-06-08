import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICarte, CARTES } from '../../data/cartes';
import { CarteComponent } from "../../shared/components/carte/carte";

@Component({
    selector: 'app-actions',
    standalone: true,
    imports: [CommonModule, CarteComponent],
    templateUrl: './actions.html',
    styleUrls: ['./actions.scss']
})
export class ActionsComponent {
    cartes: ICarte[] = CARTES.filter(carte => carte.category === 'action');

    onCardClick(carte: ICarte): void {
        console.log('Card clicked:', carte);
        // Handle card click
    }
}

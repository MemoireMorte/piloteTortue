import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarteComponent } from '../../shared/components/carte/carte';
import { ICarte, CARTES } from '../../data/cartes';

@Component({
    selector: 'app-mouvements',
    standalone: true,
    imports: [CommonModule, CarteComponent],
    templateUrl: './mouvements.html',
    styleUrls: ['./mouvements.scss']
})
export class MouvementsComponent {
    cartes: ICarte[] = CARTES.filter(carte => carte.category === 'mouvement');

    onCardClick(carte: ICarte): void {
        console.log('Card clicked:', carte);
        // Handle card click
    }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICarte } from '../../../data/cartes';

@Component({
    selector: 'app-carte',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './carte.html',
    styleUrls: ['./carte.scss']
})
export class CarteComponent {
    @Input({ required: true }) carte!: ICarte;
    @Input() disabled: boolean = false;
    
    @Output() cardClick = new EventEmitter<ICarte>();

    asciiCodeDec: number = 0;
    asciiCodeBin: string = '';
    asciiCodeBinDisplay: string = '';

    public ngOnInit(): void {
        this.asciiCodeDec = this.carte.ascii.charCodeAt(0);
        this.asciiCodeBin = this.toBin(this.asciiCodeDec);
        this.asciiCodeBinDisplay = this.asciiCodeBin.replace(/0/g, '⚬').replace(/1/g, '●')
    }

    onClick(): void {
        if (!this.disabled) {
            this.cardClick.emit(this.carte);
        }
    }

    private toBin(code: number): string {
        let bin: string = code.toString(2);
        while (bin.length < 7) bin = '0' + bin;
        return bin;
    }
}

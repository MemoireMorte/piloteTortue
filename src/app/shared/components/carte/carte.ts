import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICarte } from '../../../data/cartes';
import { CodeRunnerService } from '../../services/codeRunner.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-carte',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './carte.html',
    styleUrls: ['./carte.scss']
})
export class CarteComponent implements OnInit, OnDestroy {
    @Input({ required: true }) carte!: ICarte;
    @Input() disabled: boolean = false;
    
    @Output() cardClick = new EventEmitter<ICarte>();

    public unavailable: boolean = false;
    public asciiCodeDec: number = 0;
    public asciiCodeBin: string = '';
    public asciiCodeBinDisplay: string = '';

    public destroy$ = new Subject<void>();

    constructor(private codeRunner: CodeRunnerService) {
        this.codeRunner.isRunning$.pipe(takeUntil(this.destroy$)).subscribe(isRunning => {
            if (isRunning) {
                this.unavailable = true;
            } else {
                this.unavailable = false;
            }
        });
    }

    public ngOnInit(): void {
        this.asciiCodeDec = this.carte.ascii.charCodeAt(0);
        this.asciiCodeBin = this.toBin(this.asciiCodeDec);
        this.asciiCodeBinDisplay = this.asciiCodeBin.replace(/0/g, '⚬').replace(/1/g, '●')
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public async onClick(): Promise<void> {
        if (!this.disabled && !this.unavailable) {
            this.cardClick.emit(this.carte);
            await this.codeRunner.runCode([this.carte.command]);
        }
    }

    private toBin(code: number): string {
        let bin: string = code.toString(2);
        while (bin.length < 7) bin = '0' + bin;
        return bin;
    }
}

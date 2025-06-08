import { Component, OnDestroy } from '@angular/core';
import { SerialService } from '../../services/serial.service';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-serial-connection',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="serial-connection">
      <button (click)="connect()" *ngIf="!isConnected">
        Connect
      </button>
      <button (click)="disconnect()" *ngIf="isConnected">
        Disconnect
      </button>
    </div>
  `,
  styles: [`
    .serial-connection {
      display: flex;
      gap: 1rem;
      padding: 1rem;
    }
    
    button {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      border: 1px solid #ccc;
      cursor: pointer;
    }
    
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `]
})
export class SerialConnectionComponent implements OnDestroy {
  isConnected: boolean = false;
  destroy$ = new Subject<void>();

  constructor(private serialService: SerialService) {
    this.serialService.isConnected$.pipe(takeUntil(this.destroy$)).subscribe(isConnected => {
      this.isConnected = isConnected;
    });
  }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }

  async connect(): Promise<void> {
    await this.serialService.getPorts();
  }

  async disconnect(): Promise<void> {
    await this.serialService.close();
  }
}

import { Injectable } from '@angular/core';
import { SerialService } from './serial.service';
import { CARTES } from '../../data/cartes';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeRunnerService {
  private isRunningSubject = new BehaviorSubject<boolean>(false);
  public isRunning$: Observable<boolean> = this.isRunningSubject.asObservable();

  public delayBetweenCommands: number = 1000; // ms
  public knownCommandsDictionary: {[command: string]: string} = {};
  public isConnected: boolean | undefined;

  constructor(private serialService: SerialService) {
    this.serialService.isConnected$.subscribe(isConnected => {
      this.isConnected = isConnected;
    });
    CARTES.forEach(b => {
      this.knownCommandsDictionary[b.command] = b.ascii;
    });
  }

  public async runCode(code: string[]): Promise<void> {
    this.isRunningSubject.next(true);
    for (let i = 0; i< code.length; i++) {
      await this.runCommand(code[i]);
    }
    this.isRunningSubject.next(false);
  }

  private async runCommand(command: string): Promise<void> {
    if (!this.isConnected) return;
    this.isRunningSubject.next(true);
    return new Promise<void>(async resolve => {
      let asciiCodeDec: number = this.knownCommandsDictionary[command].charCodeAt(0);
      await this.serialService.send(asciiCodeDec);
      setTimeout(() => {
        this.isRunningSubject.next(false);
        resolve();
      }, this.delayBetweenCommands);
    });
  }
}
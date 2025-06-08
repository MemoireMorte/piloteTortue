import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SerialService {
    
  private isConnectedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public get isConnected$(): Observable<boolean> {
    return this.isConnectedSubject.asObservable();
  }

  port: SerialPort | undefined;

  portConf: SerialOptions = {
    baudRate: 1200,
    dataBits: 8,
    stopBits: 1,
    parity: 'none'
  };

  writer: WritableStreamDefaultWriter | undefined;

  constructor() {
    // navigator.serial.addEventListener("connect", (e: Event) => {
    //   console.log('connect event', e);
    // });

    // navigator.serial.addEventListener("disconnect", (e: Event) => {
    //   console.log('disconnect event', e);
    // });
  }

  async getPorts(): Promise<void> {
    await navigator.serial.requestPort();
    let ports = await navigator.serial.getPorts();
    if (ports[0]) {
      this.port = ports[0];
      await this.port.open(this.portConf);
      this.writer = this.port.writable.getWriter();
      this.isConnectedSubject.next(true);
    }
  }

  public async send(charCode: number): Promise<void> {
    await this.writer?.write(new Uint8Array([charCode]));
  }

  public async close(port: SerialPort | undefined = this.port): Promise<void> {
    this.writer?.releaseLock();
    console.log(port);
    await port?.close();
    await port?.forget();
    this.isConnectedSubject.next(false);
  }
}

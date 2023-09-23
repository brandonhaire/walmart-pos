import { Injectable } from '@angular/core';
import { Observable, Subject, from, of } from 'rxjs';
import { Item } from 'src/utils/types';

@Injectable({
  providedIn: 'root'
})
export class ScanningService {

  constructor() { }

  private scannedItems: Subject<Item>;

  getScannedItems(): Subject<Item> {
    return this.scannedItems;
  }

  scanItem(item: Item) {
    this.scannedItems.next(item);
  }
}

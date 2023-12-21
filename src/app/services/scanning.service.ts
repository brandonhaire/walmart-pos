import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from 'src/utils/types';

@Injectable({
  providedIn: 'root'
})
export class ScanningService {

  constructor() { }

  private scannedItems: Item[] = [];
  private $items: Subject<Item> = new Subject();

  getScannedItems(): Item[] {
    return this.scannedItems;
  }

  getStream(): Subject<Item>{
    return this.$items;
  }

  scanItem(item: Item) {
    this.scannedItems.push(item);
    this.$items.next(item);
  }

  emptyCart() {
    this.scannedItems = [];
  }
}

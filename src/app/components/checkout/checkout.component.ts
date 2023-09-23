import { Component, OnInit } from '@angular/core';
import { ScanningService } from 'src/app/services/scanning.service';
import { Item, uuid } from 'src/utils/types';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public item: Item = {
    description: "",
    price: 15,
    upc: new uuid()
  };

  constructor(private scanningService: ScanningService) { }

  ngOnInit(): void {
    this.scanningService.getScannedItems().subscribe((item) => {
      console.log(item);
    });
  }

  addItem() {
    this.scanningService.getScannedItems().next(this.item);
  };

}

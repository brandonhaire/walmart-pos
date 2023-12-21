import { Component, OnInit } from '@angular/core';
import { ScanningService } from 'src/app/services/scanning.service';
import { Item, uuid } from 'src/utils/types';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  constructor(private scanningService: ScanningService) { }

  ngOnInit(): void {
    this.scanningService.getStream().subscribe((item) => {
      console.log(item);
    });
  }

  add() {
    this.scanningService.scanItem(this.item);
  };

  addItem(item: Item) {
    this.scanningService.scanItem(item);
  };

  print(){
    console.log(this.scanningService.getScannedItems());
  }

  clear() {
    this.scanningService.emptyCart();
    this.print();
  }



  public item: Item = {
    description: "",
    price: 15,
    upc: new uuid()
  };
  public club: Item = {
    upc: new uuid(),
    description: "Club Sandwhich",
    price: 2.5
  }
  public donut: Item = {
    upc: new uuid(),
    description: "Donut",
    price: 1
  }
  public fries: Item = {
    upc: new uuid(),
    description: "Fries",
    price: 1
  }
  public hotDog: Item = {
    upc: new uuid(),
    description: "Hot Dog",
    price: 2
  }
  public taco: Item = {
    upc: new uuid(),
    description: "Taco",
    price: 2
  }
  public sandwhich: Item = {
    upc: new uuid(),
    description: "Sandwhich",
    price: 2.5
  }


}

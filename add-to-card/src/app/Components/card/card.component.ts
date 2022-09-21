import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/Services/card.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CARDComponent implements OnInit {

  public product : any = [];
  public grandTotal !: number ;
  constructor(private CardService : CardService) { }

  ngOnInit(): void {
this.CardService.getProduct()
.subscribe(res =>{
  this.product = res;
  this.grandTotal = this.CardService.getTotalPrice()
   })
  }
  removeItem(item: any){
  this.CardService.removeCardItem(item)
  }
  emptyCard(): void{
    this.CardService.removeAllCards()
  }
}




import { CardService } from './../../Services/card.service';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']

})
export class ProductsComponent implements OnInit {

public productList: any;
  constructor(private api : ApiServiceService,
              private CardService : CardService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=> {
      this.productList = res;
      this.productList.forEach((a: any) => {
        Object.assign(a,{quantity:1 , total: a.price})
      });
    })
  }
  addToCard(item: any){
   this.CardService.addToCard(item)
  }

}

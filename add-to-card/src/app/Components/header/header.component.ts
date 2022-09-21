import { CardService } from './../../Services/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HEADERComponent implements OnInit {
public totalItem : number = 0;
  constructor(private CardService: CardService) { }

  ngOnInit(): void {
   this.CardService.getProduct()
   .subscribe(res=>{
     this.totalItem = res.length
   })

  }

}

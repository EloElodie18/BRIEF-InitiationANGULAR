import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { CartService } from "../cart.service";

@Component({ /*ça se créer des la creation du component*/
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"],
})
export class ShippingComponent implements OnInit { /*j'ai besoin d'une phrase pr comprendre tt ce qu'il se fait dedans*/
  constructor(private cartService: CartService) {}

  shippingCosts!: Observable<{ type: string; price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}

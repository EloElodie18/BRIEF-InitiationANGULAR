import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Product, products } from "../products";
import { CartService } from "../cart.service";

/*ICI ON GERE L'AFFICHAGE DE CHQ PRDT*/
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
  addToCart(product: Product) {/*prd product en argumt, use cartservice pr ajout prdt, et indique que le prdt est ajouté*/
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }
}
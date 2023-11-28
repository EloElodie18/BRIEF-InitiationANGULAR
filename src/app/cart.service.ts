import { HttpClient } from "@angular/common/http";
import { Product } from "./products";
import { Injectable } from "@angular/core";
/* . . . */
@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {} /*comprendre la synthaxe...? */
  /* . . . */

  addToCart(product: Product) {
    /*AJOUTE UN PRDT A UN TABLEAU DE ITEMS?*/
    this.items.push(product);
  }

  getItems() {
    /*COLLECTE LES ARTICLES ET RENVOIE LES ARTICLEs AVC QUANTITE*/
    return this.items;
  }

  clearCart() {
    /*VIDER LE PANIER*/
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>( /*aller chercher les delais et leurs prix dans le json*/
      "/assets/shipping.json"
    );
  }
  /* . . . */
}

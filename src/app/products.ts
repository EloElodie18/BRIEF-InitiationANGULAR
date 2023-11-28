export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: "Téléphone XL",
    price: 799,
    description: "Une grand smartphone avec l'un des meilleurs écrans",
  },
  {
    id: 2,
    name: "Petit téléphone",
    price: 699,
    description: "Un super téléphone avec la meilleure caméra",
  },
  {
    id: 3,
    name: "Téléphone Standard",
    price: 299,
    description: "",
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

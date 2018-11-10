import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ColorService {
  colors = [
    "#e6194b",
    "#3cb44b",
    "#ffe119",
    "#4363d8",
    "#f58231",
    "#911eb4",
    "#46f0f0",
    "#f032e6",
    "#bcf60c",
    "#fabebe",
    "#008080",
    "#e6beff",
    "#9a6324",
    "#800000",
    "#808000",
    "#ffd8b1",
    "#000075",
    "#808080"
  ];
  constructor() {}

  getColor() {
    console.log(Math.floor(Math.random() * this.colors.length));
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  getColors() {
    return this.colors[Math.random() * this.colors.length];
  }
}

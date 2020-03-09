import { Component, OnInit } from "@angular/core";
import {
  trigger,
  transition,
  state,
  style,
  animate
} from "@angular/animations";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  animations: [
    trigger("burger", [
      state("start", style({ opacity: 0, display: "none" })),
      state("end", style({ opacity: 1, display: "block" })),
      transition("start<=>end", animate(250))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  startBurger = "start";
  endBurger = "end";
  animate() {
    this.startBurger = this.startBurger === "end" ? "start" : "end";
    this.endBurger = this.endBurger === "start" ? "end" : "start";
  }
  constructor() {}

  ngOnInit(): void {}
}

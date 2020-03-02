import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnInit {
  carouselOptions = {
    dots: false,
    margin: 25,
    nav: true,
    // navElement: true,
    navText: [
      "<div class='nav-btn prev-slide'><i class='fas fa-chevron-left'></i></div>",
      "<div class='nav-btn next-slide'><i class='fas fa-chevron-right'></i></div>"
    ],

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true
      },
      600: {
        items: 1,
        nav: true,
        loop: true
      },
      1000: {
        items: 1,
        nav: true,
        loop: true
      },
      1500: {
        items: 1,
        nav: true,
        loop: true
      }
    }
  };

  items = [
    {
      desc: "Nibh nisl",
      txt:
        "Condimentum id venenatis a condimentum vitae sapien pellentesque. At tellus at urna condimentum mattis pellentesque id nibh tortor."
    },
    {
      desc: "Nibh nisl",
      txt:
        "Condimentum id venenatis a condimentum vitae sapien pellentesque. At tellus at urna condimentum mattis pellentesque id nibh tortor."
    },
    {
      desc: "Nibh nisl",
      txt:
        "Condimentum id venenatis a condimentum vitae sapien pellentesque. At tellus at urna condimentum mattis pellentesque id nibh tortor."
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}

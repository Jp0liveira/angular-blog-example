import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input() imageLink: string = "https://source.unsplash.com/random/";
  @Input() cardTitle: string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto maxime quos, voluptatum soluta possimus quia quaerat expedita sunt.";
  @Input() Id: string = "0";
  constructor() { }

  ngOnInit(): void {
  }

}

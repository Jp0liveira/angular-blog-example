import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input() photoCover: string = "https://source.unsplash.com/random/";
  @Input() cardTitle: string = "Lorem ipsum dolor sit amet consectetur!";
  @Input() cardDescription: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellat velit quia ullam quo magni culpa. Quas repellendus omnis, provident deleniti voluptatibus placeat enim impedit, officia alias quis consequatur aspernatur!";

  constructor() { }

  ngOnInit(): void {
  }

}

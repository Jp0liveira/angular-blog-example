import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() imageLink: string = "https://source.unsplash.com/random/";
  @Input() contentTitle: string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  @Input() contentDescription: string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et magnam nam voluptatem, similique dolorem velit! Perspiciatis sapiente qui earum similique aperiam, nam, quo explicabo nesciunt vel, voluptates aliquam ratione deleniti.";
  private id: string | null = "0";

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("id")
    )
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null){
    const result = dataFake.filter(article => article.id == id)[0];
    this.imageLink = result.photo;
  }
}

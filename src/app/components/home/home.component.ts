import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  height: number = window.innerHeight;
  path: string = 'assets/images'
  show: boolean = false;
  products = [
    {
      category: 'Lidherma',
      id: 'lidherma',
      items: [
        {name: 'Combo piel acnéica' , price: 6680, img: `${this.path}/lidherma1.png`},
        {name: 'Combo piel seca' , price: 7105, img: `${this.path}/lidherma2.png`},
        {name: 'Combo piel sensible' , price: 6730, img: `${this.path}/lidherma3.png`},
        {name: 'Combo piel grasa' , price: 6755, img: `${this.path}/lidherma4.png`}
      ]
    },
    {
      category: 'Exel',
      id: 'exel',
      items: [
        {name: 'Combo piel acnéica' , price: 5060, img: `${this.path}/exel3.png`},
        {name: 'Combo piel seca' , price: 4990, img: `${this.path}/exel2.png`},
        {name: 'Combo piel sensible' , price: 6240, img: `${this.path}/exel4.png`},
        {name: 'Combo piel grasa' , price: 5975, img: `${this.path}/exel1.png`}
      ]
    },
    {
      category: 'Idraet',
      id: 'idraet',
      items: [
        {name: 'Combo piel acnéica' , price: 4420, img: `${this.path}/idraet3.png`},
        {name: 'Combo piel seca' , price: 4100, img: `${this.path}/idraet1.png`},
        {name: 'Combo piel sensible' , price: 5415, img: `${this.path}/idraet4.png`},
        {name: 'Combo piel grasa' , price: 3790, img: `${this.path}/idraet2.png`}
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
    
  }

}

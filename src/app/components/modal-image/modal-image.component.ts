import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss']
})
export class ModalImageComponent implements OnInit {
  
  @Input() img: string = '';
  @Input() show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}

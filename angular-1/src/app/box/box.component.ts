import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  @Input() title: string = 'Headline';
  @Input() content: string = 'lorem ipsum lorem ipsum';
  @Input() color: string = "red";

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  @Input() id: number = 0;
  @Input() title: string = 'Headline';
  @Input() content: string = 'lorem ipsum lorem ipsum';
  @Input() color: string = "red";
  clicked: boolean = false;

  @Output() clickedEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() : void{
    this.clicked = true;
    setTimeout(() => {
      this.clickedEvent.emit(this.id);
    },1000);
  }

}

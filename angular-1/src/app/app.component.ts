import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-1';
  boxes = [
    {
      title: 'Headline 1',
      content: 'lorem ipsum lorem ispum 1',
      color: '#F04040',
    },
    {
      title: 'Headline 2',
      content: 'lorem ipsum lorem ispum 2',
      color: '#8A6F6F',
    },
    {
      title: 'Headline 3',
      content: 'lorem ipsum lorem ispum 3',
      color: '#C2F040',
    },
  ]
}

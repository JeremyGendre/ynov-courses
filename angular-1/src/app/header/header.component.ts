import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  routes = [
    {link: '/app', title: 'Home'},
    {link: '/extra', title: 'Extra'},
    {link: '/shop', title: 'Shop'},
    {link: '/settings', title: 'Settings'},
    {link: '/contact', title: 'Contact us'},
  ];

  menuOpened:boolean = false;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  onResize(){
    if(window.innerWidth > 650 && this.menuOpened){
      this.menuOpened = false;
    }
  }

  handleClick(){
    this.menuOpened = !this.menuOpened;
  }

}

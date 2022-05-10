import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
  }

  handleClick(){
    this.menuOpened = !this.menuOpened;
  }

}

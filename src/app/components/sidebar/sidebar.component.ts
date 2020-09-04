import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/typography', title: 'Videos',  icon:'dashboard', class: '' },
    { path: '/user-profile', title: 'Simulators',  icon:'dashboard', class: '' },
    { path: '/pligrim', title: 'Pligrisms',  icon:'travel agent', class: '' },
    { path: '/maps', title: 'Operators',  icon:'dashboard', class: '' },
    { path: '/customers', title: 'Customers',  icon:'person', class: '' },
    { path: '/table-list', title: 'Purchases',  icon:'person', class: '' },
   
    { path: '/signup', title: 'Sign Up',  icon:'content_paste', class: '' },
    { path: '/signin', title: 'Sign In',  icon:'library_books', class: '' },
    { path: '/signin', title: 'Sign out',  icon:'library_books', class: '' },
   
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

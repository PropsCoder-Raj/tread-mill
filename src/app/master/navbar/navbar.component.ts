import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  tagLine: string = "Free Shipping | COD Available | Delivery Within 3 - 5 days";
  constructor(){}

  ngOnInit(): void {
    
  }
}

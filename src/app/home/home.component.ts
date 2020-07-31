import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faHeart = faHeart;
  products = [];
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.get().subscribe((data: any[])=>{ 
      console.log(data); 
      this.products = data; 
    }) 
  }
}

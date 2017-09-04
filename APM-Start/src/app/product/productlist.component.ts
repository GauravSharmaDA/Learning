import { Component, OnInit } from '@angular/core';
import { IProduct } from './productinterface';

@Component({
  selector: 'pm-products',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})

export class ProductListComponent
implements OnInit
{
  pageTitle:string  = 'Product List';
  showImage: boolean = false;
  listFilter: string = 'cart';
   products: IProduct[] = [
     {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",      
      "price": 19.95,
      "description": "Leaf rake with 48-inch wooden handle.",
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  },
  {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",      
      "price": 32.99,
      "description": "15 gallon capacity rolling garden cart",
      "starRating": 4.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
  }];
  toggleImage() : void {
    this.showImage = !this.showImage;    
  }

  ngOnInit(): void {
    console.log('In oninit');
  }
}

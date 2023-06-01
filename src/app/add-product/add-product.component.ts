import { Component } from '@angular/core';
import { IProduct } from '../interface/product';
import { ProductService } from '../server/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  product: IProduct = {
    id: 0,
    name: "",
    price: 0,
    image: ""
  }
  constructor(private productServer: ProductService) { }
  onSubmit() {
    this.productServer.create(this.product).subscribe(item => {
      console.log(item)
    })
  }

}

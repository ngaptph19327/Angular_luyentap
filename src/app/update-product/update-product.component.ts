import { Component } from '@angular/core';
import { IProduct } from '../interface/product';
import { ProductService } from '../server/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

  product: IProduct = {
    id: 0,
    name: "",
    price: 0,
    image: ""
  }
  constructor(private productService: ProductService, private router: ActivatedRoute
  ) {
    this.router.paramMap.subscribe(param => {
      const id = Number(param.get('id'))
      this.productService.getById(id).subscribe(item => {
        this.product = item
      })
    })

  }

  onSubmit() {
    this.productService.update(this.product).subscribe(item => {
      console.log(item)
    })
  }
}

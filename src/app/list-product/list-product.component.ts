import { Component } from '@angular/core';
import { IProduct } from '../interface/product';
import { ProductService } from '../server/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {

  products: IProduct[] = [];

  constructor(private productServer: ProductService) { }

  getList() {
    this.productServer.getAll().subscribe(data => {
      this.products = data
      console.log(this.products)
    })
  }
  ngOnInit() {
    this.getList()
  }

  onDelete(id: number) {
    this.productServer.remove(id).subscribe(item =>
      // console.log(item)
      this.getList()
    )
  }


}

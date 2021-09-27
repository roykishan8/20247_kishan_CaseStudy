import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id!: number;
  product!: Product

  constructor(private route:ActivatedRoute,private router: Router, private pservice:ProductService) { }

  ngOnInit(){

    this.product=new Product()
    this.id=this.route.snapshot.params['id'];
    this.pservice.getProduct(this.id).subscribe((data:any)=>{
      //this.products=data
      console.log(data)
      this.product=data
      
    })
    // .subscribe(data=>{
    //   console.log(data);
    //   this.product=data;
    // })
  }
  
  updateProducts(){
    this.pservice.updateProduct(this.id,this.product)
    .subscribe(data=>console.log(data));
    this.product=new Product();
    this.gotoList();
  }

  onsubmit(){
    this.updateProducts();
  }
  gotoList(){
    this.router.navigate(['/tasks'])
  }

}

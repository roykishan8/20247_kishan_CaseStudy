import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-post',
  templateUrl: './product-post.component.html',
  styleUrls: ['./product-post.component.css']
})
export class ProductPostComponent implements OnInit {
  
  product: Product=new Product();
  submitted:boolean=false;
  
  name!:string
  id!:number
  price!:number
  ProductService: any;
  constructor(private proService:ProductService, private router:Router) { }
  
    
  ngOnInit(): void {
  }

  newProduct():void{
    this.submitted=false;
    this.product=new Product();
  }
  addSave(){
    this.proService.create(this.product).subscribe((data: any)=>console.log(data));
    this.product=new Product();
    this.gotoList();


  }
  onSubmit(){
    //   this.id=value.t1;
    //   this.name=value.t2;
    //   this.price=value.t3
    // console.log(value)
    this.submitted=true;
    this.addSave()
    

  }
  gotoList(){
    this.router.navigate(['/tasks'])
  }
  

}

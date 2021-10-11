import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductdataService } from '../services/productdata.service';
import { Products } from '../products';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  products: Products[] = [];
  productidparam:any;
  productname:string = "";
  productdesc:string = "";
  productprice:number = 0;
  productunits:number = 0;
  productid:number = 0;
  productobjid:string= "";
  

  constructor(private proddata:ProductdataService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    

    this.route.paramMap.subscribe((params)=>{
      console.log(params)
      this.productidparam = params.get('productid')
      console.log(this.productidparam)
      
      
    })
    this.proddata.getitem(this.productidparam).subscribe((data)=>{
      console.log(data)
      this.productid = data[0].id;
      
      this.productname = data[0].name;
      
      this.productdesc = data[0].description;
      this.productprice = data[0].price;
      this.productunits = data[0].units;
      this.productobjid=data[0]._id;
      
      
    
    })
  }


  update(){
    var product:Products = new Products("",this.productid,this.productname,this.productunits,this.productdesc, this.productprice,)
    this.proddata.updateitem(product).subscribe((data)=>{
      this.router.navigate(['/list'])
    })
  }

}

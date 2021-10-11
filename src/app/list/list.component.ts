import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../services/productdata.service';
import { Products } from '../products';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: Products[] = [];
  constructor(private proddata:ProductdataService, private router:Router) { }

  ngOnInit(): void {
    this.proddata.getlist().subscribe((data)=>{
       this.products = data
    })
  }
  deleteproduct(id:any){
    if(confirm("Sure to delete?")){
      this.proddata.deleteitem(id).subscribe((data)=>{
        console.log(data)
        this.products = data
  
      })
    }
  }

}

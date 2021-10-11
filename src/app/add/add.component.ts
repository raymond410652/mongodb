import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../services/productdata.service';
import { Products } from '../products';
import{trigger, state,style,animate,transition} from '@angular/animations'


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  animations:[
    trigger('iderrorState',[
      state('show',style({
        opacity:1,
        display:'block'
      })),
      state('hide',style({
        opacity:0,
        display:'none'
      })),
      transition('show =>hide',animate('1000ms ease-out')),
      transition('hide => show',animate('400ms ease-in')),
    ]),
    trigger('noticeState',[
      state('show',style({
        opacity:1,
        display:'block'
      })),
      state('hide',style({
        opacity:0,
        display:'none'
      })),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show',animate('400ms ease-in')),
    ])
  ]
})
export class AddComponent implements OnInit {
  productname:string ="";
  productdesc:string="";
  productprice:number = 0;
  productunits:number = 0;
  productid:number = 0 ;
  productobjid:string="";
  newprod:Products = new Products("",0,"",0,"",0 );
  newProductMessage="";
  iderrormsg:string="This is already exists # new id is required"
  iderrormsg2:string="";
  iderrorshow:boolean=false;
  noticeshow:boolean = false;
  constructor(private proddata:ProductdataService) { 
  }

  ngOnInit(): void {
  }
  get stateName(){
    return this.iderrorshow ?'show':'hide';
  }
  get noticeName(){
    return this.noticeshow ? 'show': 'hide';
  }
  addnewProduct(event:any){
    event.preventDefault();
    if(this.productid ==0){
      this.iderrorshow = !this.iderrorshow;
    }else{
      this.newprod = new Products("",this.productid,this.productname,this.productunits,this.productdesc, this.productprice,);
      console.log(this.newprod)
      this.proddata.add(this.newprod).subscribe((data)=>{
        console.log(data);
        this.noticeshow =true;
        if(data.err ==0){
          this.newProductMessage = data.num + "new product (" + this.productname+") was added";
        }else{
          this.newProductMessage = data.err;
        }
        this.productid == null;;
        this.productname="";
        this.productdesc="";
        this.productprice ==null;
      })
    }
  }
  checkvalidid(event:any){
    this.noticeshow = false
    this.proddata.checkvalidid(event).subscribe((data)=>{
      if (data.success ==0){
        this.iderrormsg2= "something above" + data.topnum;
        this.iderrorshow = !this.iderrorshow;
      }else{
        this.iderrorshow = false;
        this.iderrormsg2 == null;
      }
    })
  }
}

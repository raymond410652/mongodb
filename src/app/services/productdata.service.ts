import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Products} from '../products'; 

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  constructor(private http:HttpClient) { }
  add(product:Products){
    return this.http.post<any>('http://localhost:3000/api/add', product);
  }
  getlist(){
    return this.http.get<any>('http://localhost:3000/api/getlist');
  }
  getitem(productID:any){
    return this.http.post<any>('http://localhost:3000/api/getitem',{'productid':productID})
  }
  updateitem(product:Products){
    return this.http.post<any>('http://localhost:3000/api/update', product)

  }
  deleteitem(productID:any){
    return this.http.post<any>('http://localhost:3000/api/deleteitem',{'productid':productID})
  }
  checkvalidid(productID:any){
    return this.http.post<any>('http://localhost:3000/api/checkvalidid',{'id':productID})
  }
  getproductcount(){
    return this.http.get<any>('http://localhost:3000/api/prodcount');
  }
}

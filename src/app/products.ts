export class Products {
    objid:string;
    id:number;
    name:string;
    units:number;
    description:string;
    price:number;
  

    constructor(objid:string,_id:number,_name:string,_units:number,_description:string,_price:number)
    {
        this.objid = objid;
        this.id = _id;
        this.name = _name;
       
        this.units = _units;
        this.description = _description
        this.price = _price;
    }
}


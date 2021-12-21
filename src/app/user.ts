
import { addressModel } from "./register/address/address.model";
export interface User {
    userId:number,
    suffix:any[],
    firstname:string,
    middlename:string,
    lastname:string,
    email:string,
    phonenumber:number,
    alladdresses: addressModel[];
    
}

import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { addressModel } from '../address/address.model';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  
  userList: User [] ;
  addressList :addressModel [];
  constructor() { 
    this.userList=[];
    this.addressList=[];
  }

  ngOnInit(): void {
    const records = localStorage.getItem('userList');
  
    if(records !== null) {
      this.userList= JSON.parse(records);
    }
    
  }

  delete(id:any){
     const oldRecords =localStorage.getItem('userList');
     
    
     
     
     if(oldRecords !==null){
       const userList=JSON.parse(oldRecords);
       userList.splice(userList.findIndex((a:any)=> a.userId== id),1);
       localStorage.setItem('userList',JSON.stringify(userList));
     }
     const records =localStorage.getItem('userList');
     if(records !== null){
       this.userList=JSON.parse(records);
     }
  }

  
}

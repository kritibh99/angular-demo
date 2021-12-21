import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from  '@angular/router';
import { ActivatedRoute } from '@angular/router'; 

import { AuthService } from '../auth.service';

import { User } from '../user';
import { addressModel } from './address/address.model';
import { UserpageComponent } from './userpage/userpage.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  submitted=false;
  isAddMode=true;

  model1: User={
    userId: 0,
    suffix: [],
    firstname: '',
    middlename: '',
    lastname: '',
    email: '',
    phonenumber: 0,
    alladdresses:[]
   
  }

  suffixData: any[] = ['Mr', 'Miss', 'Mrs'];

  addressData ="Billing Address"
  
 
    
    onApply(event: any){
      console.log('Full address',event);
    }
  
  
  constructor( private router: Router,private route: ActivatedRoute ) {
    this.route.params.subscribe((res)=>{
      this.model1.userId=res['id']
      console.log(res)
    });
    this.isAddMode=!this.model1.userId
    
    
   }
  ngOnInit() { 
    const oldRecords=localStorage.getItem('userList');
    console.log(oldRecords)
    if(oldRecords !== null)
    {
      const userList= JSON.parse(oldRecords);
      const currentUser=userList.find((m:any) =>m.userId ==this.model1.userId);
      console.log(this.model1.userId)
      console.log(currentUser)
    
      if(currentUser ){
        console.log(currentUser)
        
        this.model1=currentUser;
      }
    }
    
  }

  
  

 getNewUserId(){
   const oldRecords=localStorage.getItem('userList');
   if(oldRecords != null)
   {
     const userList= JSON.parse(oldRecords);
     return userList.length+1;
   }else{
     return 1;
   }
 }

 saveUser(f:NgForm) {
  if(this.model1.userId ==undefined){
     
    const latestId=this.getNewUserId();
    this.model1.userId =latestId
    const oldRecords=localStorage.getItem('userList');
    if(oldRecords != null){
     const userList= JSON.parse(oldRecords);
     userList.push(this.model1);
     localStorage.setItem('userList',JSON.stringify(userList));
    } else{
      
      const userArr =[];
      userArr.push(this.model1);
      localStorage.setItem('userList',JSON.stringify(userArr));
      
    }
    this.router.navigateByUrl('/userpage');
  }else{
    const oldRecords=localStorage.getItem('userList');
  if(oldRecords){
   const userList= JSON.parse(oldRecords);
   userList.splice(userList.findIndex((a:any)=> a.userId == this.model1.userId),1);
   userList.push(this.model1);
   localStorage.setItem('userList',JSON.stringify(userList));
  } 
  this.router.navigateByUrl('/userpage');
  }
  
 }

 


  
}


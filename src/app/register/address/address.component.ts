import { Component, Output,EventEmitter, OnInit, Input } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { addressModel } from './address.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input()
  addressTitle: string="";
  
  @Output() searchvalue= new EventEmitter();

  countryData: any[] = ['India', 'US', 'UK'];

  

  model: addressModel = {
    id:0,
    address: '',
    city: '',
    state:'',
    postcode: 0,
    country: [],
    aggrement: false
  };
  
  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {}
    

 
  onFormSubmit() {
   this.searchvalue.emit(this.model);
  }

}

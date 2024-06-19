import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private resto:RestoService) { }

  register=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })
  alert:boolean=false;
  ngOnInit(): void {
  }



  collection(){
    this.alert=true;
    console.warn(this.register.value);
    this.resto.registerUser(this.register.value).subscribe((result)=>{
      console.warn(result);
    })
  }
  closeAlert(){
    this.alert=false;
  }
}

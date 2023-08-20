import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit{
  formDetails : any;
  ngOnInit(): void {
    this.formDetails = new FormGroup({
      fName : new FormControl('', Validators.required),
      lName : new FormControl('', Validators.required),
      contact : new FormControl('', Validators.required),
      phone : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required)
    })
    
  }

}

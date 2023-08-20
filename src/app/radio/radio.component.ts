import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit{
  formCtr : any;
  ngOnInit(): void {
    this.formCtr = new FormGroup({
      fName : new FormControl('', Validators.required),
      lName : new FormControl('', Validators.required),
      contact : new FormControl('', Validators.required),
      phone : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required)
    })
  }

}

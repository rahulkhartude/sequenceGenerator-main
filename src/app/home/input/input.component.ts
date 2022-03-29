import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
 
  myForm!:FormGroup
  constructor(private fb:FormBuilder,private _interactionService:InteractionService) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      count:['',Validators.required],
      shape:['',Validators.required]
    })
  }
  
  onSubmit(){
    console.log(this.myForm?.value);
    
    this._interactionService.sendMessage(this.myForm.value)
    
  }


}

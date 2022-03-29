import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

 
  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {}

  storeL(value:any){
  
    localStorage.setItem('username',value)

    if(localStorage.getItem('username'))
    {
      this.router.navigate(['/home'])
    }
    else
    {
      window.location.reload()
    }
   
  }
}

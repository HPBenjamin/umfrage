import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-first',
  templateUrl: './dialog-first.component.html',
  styleUrls: ['./dialog-first.component.scss']
})
export class DialogFirstComponent implements OnInit {
  user: User = new User();
   carNumber = 0;
    
  constructor(private router: Router) { }

  saveCar() {
    console.log('value =', this.user.car);
    this.router.navigateByUrl('/dialog-second')
    
  }

  ngOnInit(): void {
  }

  openSecondDialog() {
    
  }

}

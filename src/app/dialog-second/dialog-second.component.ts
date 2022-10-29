import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-second',
  templateUrl: './dialog-second.component.html',
  styleUrls: ['./dialog-second.component.scss']
})
export class DialogSecondComponent implements OnInit {
  user: User = new User();

  constructor(private router: Router) {

   }

  saveVacation() {
    console.log('vacationValue = ', this.user.vacation);
    this.router.navigateByUrl('/dialog-third')
  }

  ngOnInit(): void {
  }

}

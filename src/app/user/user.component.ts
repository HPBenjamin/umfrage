import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User = new User();

  constructor(private router: Router) { }

    saveEmail() {
      console.log('currentUser is', this.user.email);
      this.router.navigateByUrl('/dialog-first');
     
    }

  ngOnInit(): void {
  }
 
}

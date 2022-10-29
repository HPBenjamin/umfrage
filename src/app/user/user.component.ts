import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User = new User();

  constructor(private router: Router, private firestore: AngularFirestore) { }

    saveEmail() {
      console.log('currentUser is', this.user.email);
      this.router.navigateByUrl('/dialog-first');

      this.firestore
        .collection('users')
        .add(this.user.toJSON())
        .then((result: any) => {
          console.log('Adding user finished', result);
        })
     
    }

  ngOnInit(): void {
  }
 
}

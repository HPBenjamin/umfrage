import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-third',
  templateUrl: './dialog-third.component.html',
  styleUrls: ['./dialog-third.component.scss']
})
export class DialogThirdComponent implements OnInit {
  user: User = new User();
  constructor() { }

  evaluation() {

  }

  ngOnInit(): void {
  }

}

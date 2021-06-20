import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServerService} from "../../server.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public information: any;

  constructor(private router: Router,
              private service: ServerService) {
  }

  ngOnInit(): void {
    const data = localStorage.getItem('user');
    if (data != null) {
      this.information = JSON.parse(data);
    }

  }
}

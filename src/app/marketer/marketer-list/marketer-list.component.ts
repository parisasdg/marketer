import {Component, OnInit} from '@angular/core';
import {ServerService} from "../../server.service";

@Component({
  selector: 'app-marketer-list',
  templateUrl: './marketer-list.component.html',
  styleUrls: ['./marketer-list.component.scss']
})
export class MarketerListComponent implements OnInit {
  public marketerList: any;
  displayedColumns: string[] = ['zipPostalCode', 'phoneNumber', 'addressDetail', 'city', 'name'];

  constructor(private service: ServerService) {
  }

  ngOnInit(): void {
    this.getTableElement()
  }

  getTableElement() {
    this.service.getMarketerList().subscribe((response: any) => {
      this.marketerList = response.data;
      console.log(this.marketerList);
    });
  }
}

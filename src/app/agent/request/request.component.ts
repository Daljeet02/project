import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface allrequests {
  position: number;
  question:string;
  name: string;
  amount: string;
  premiumservice: string;
  status: string;
  place: string;
}

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  displayedColumns: string[] = ['position','question', 'name', 'place','amount', 'premiumservice', 'status','View'];
  dataSource = new MatTableDataSource<allrequests>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

const ELEMENT_DATA: allrequests[] = [
  {position: 1,question:'How do I install Skype?', name: 'Tiger Nixon',  amount: '$320', place: 'Tokyo', premiumservice: 'Yes', status: 'Open' },
  {position: 2,question:'How do I install Skype?', name: 'Garrett Winters',  amount:'$450', place: 'Edinburgh', premiumservice: 'No', status: 'Open' },
  {position: 3,question:'How do I install Skype?', name: 'Ashton Cox',  amount:'$800', place: 'San Francisco', premiumservice: 'No', status: 'Open' },
  { position: 4,question:'How do I install Skype? \n Law | 2 hours',  name: 'Boron',  amount: '$250', place: 'Edinburgh', premiumservice: 'Yes', status: 'Open'},
];
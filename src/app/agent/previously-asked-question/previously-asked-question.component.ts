import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface previousquestion {
  position: number;
  question:string;
  name: string;
  amount: string;
  premiumservice: string;
  status: string;
  category: string;
  created: string;  
}

@Component({
  selector: 'app-previously-asked-question',
  templateUrl: './previously-asked-question.component.html',
  styleUrls: ['./previously-asked-question.component.css']
})
export class PreviouslyAskedQuestionComponent implements OnInit {

  displayedColumns: string[] = ['position','question', 'name', 'amount', 'category','premiumservice', 'created', 'status','View'];
  dataSource = new MatTableDataSource<previousquestion>(ELEMENT_DATA);

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

const ELEMENT_DATA: previousquestion[] = [
  {position: 1,question:'How do I install Skype?', name: 'Tiger Nixon',  amount: '$320', premiumservice: 'Yes', category: 'Law', created: '22/10/2018', status: 'Closed' },
  {position: 2,question:'How do I install Skype?', name: 'Garrett Winters',  amount:'$450', premiumservice: 'No', category: 'Computer', created: '22/10/2018', status: 'Closed' },
  {position: 3,question:'How do I install Skype?', name: 'Ashton Cox',  amount:'$800', premiumservice: 'No', category: '', created: '22/10/2018', status: 'Closed' },
  { position: 4,question:'How do I install Skype? \n Law | 2 hours',  name: 'Boron',  amount: '$250', premiumservice: 'Yes', category: '',created: '22/10/2018', status: 'Closed'},
  
];

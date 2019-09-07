import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
/*import {SelectionModel} from '@angular/cdk/collections';*/
export interface PeriodicElement {
  name: string;
  position: number;
  question:string;
  location:string;
  amount: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {question:'How do I install Skype?', name: 'Hydrogen', location: 'Tokyo', amount: '$320', symbol: 'H', position: 1},
  {question:'How do I install Skype?', name: 'Helium', location: 'Edinburgh', amount:'$450', symbol: 'He', position: 2},
  {question:'How do I install Skype?', name: 'Lithium', location: 'San Francisco', amount:'$800', symbol: 'Li', position: 3},
  {question:'How do I install Skype?', name: 'Beryllium', location: 'Tokyo', amount: '$500', symbol: 'Be', position: 4},
  {question:'How do I install Skype? \n Law | 2 hours',  name: 'Boron', location: 'Edinburgh', amount: '$250', symbol: 'B', position: 5},

];

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  displayedColumns: string[] = [ 'position','question','name','location',  'amount', 'symbol',];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

 /** Whether the number of selected elements matches the total number of rows. 
 isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}*/

}





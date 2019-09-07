import { Component} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';


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
  {question:'How do I install Skype?Law | 2 hours',  position: 6, name: 'Carbon', location: 'San Francisco', amount: '$850', symbol: 'C'},
  {question:'How do I install Skype?Law | 2 hours',  position: 7, name: 'Nitrogen', location: 'USA', amount:'$590', symbol: 'N'},
  {question:'How do I install Skype?Law | 2 hours',  position: 8, name: 'Oxygen', location: 'Edinburgh', amount:'$950', symbol: 'O'},
  {question:'How do I install Skype?Law | 2 hours',  position: 9, name: 'Fluorine', location: 'San Francisco',  amount:'$550', symbol: 'F'},
  {question:'How do I install Skype?Law | 2 hours',  position: 10, name: 'Neon', location: 'USA', amount:'$350', symbol: 'Ne'},
];
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent  {

  displayedColumns: string[] = [ 'select', 'position','question','name','location',  'amount', 'symbol',];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
export interface UserData {
  id: string;
  name: string;
  location: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'Maia@gamil.com', 'Asher@gamil.com', 'Olivia@gamil.com', 'Atticus@gamil.com', 'Amelia@gamil.com', 'Jack@gamil.com', 
  'Charlotte@gamil.com', 'Theodore@gamil.com', 'Isla@gamil.com', 'Oliver@gamil.com','Isabella@gamil.com', 
  'Jasper@gamil.com', 'Cora@gamil.com', 'Levi@gamil.com', 'Violet@gamil.com', 'Arthur@gamil.com', 
  'Mia@gamil.com', 'Thomas@gamil.com', 'Elizabeth@gamil.com'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
const location: string[] = [
  'Edinburgh', 'Tokyo', 'USA', 'San Francisco', 'India', 'Canada','UK'
];
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'location', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

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
/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    location: location[Math.round(Math.random() * (location.length - 1))],
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
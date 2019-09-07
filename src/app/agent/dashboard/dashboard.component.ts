<<<<<<< HEAD
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Action } from 'rxjs/internal/scheduler/Action';
// import { DataSource } from '@angular/cdk/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
  
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
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
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    
  };
}
=======
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    dataSource: Object;
    chartConfig: Object;
    // cards: Array < any > = [];

    constructor() {
        this.chartConfig = {
            width: '100%',
            height: '400',
            type: "line",
            dataFormat: "json",
            creditLabel: 'false'
        };
        this.dataSource = {
            "chart": {
                "caption": "Average",
                "yaxisname": "(in mph)",
                "subcaption": "[Jan-Dec]",
                "numbersuffix": " mph",
                "rotatelabels": "1",
                "setadaptiveymin": "1",
                "theme": "fusion"
            },


            "data": [{
                    "label": "Jan",
                    "value": "89.45"
                },
                {
                    "label": "Feb",
                    "value": "89.87"
                },
                {
                    "label": "Mar",
                    "value": "89.64"
                },
                {
                    "label": "Apr",
                    "value": "90.13"
                },
                {
                    "label": "May",
                    "value": "90.67"
                },
                {
                    "label": "June",
                    "value": "90.54"
                },
                {
                    "label": "July",
                    "value": "90.75"
                },
                {
                    "label": "Aug",
                    "value": "90.8"
                },
                {
                    "label": "Sep",
                    "value": "91.16"
                },
                {
                    "label": "Oct",
                    "value": "91.37"
                },
                {
                    "label": "Nov",
                    "value": "91.66"
                },
                {
                    "label": "Dec",
                    "value": "91.8"
                }
            ]
        };

        // this.cards = [{
        //         title: 'Estimated Earnings',
        //         count: '$200',
        //         textcolor: 'text-primary',
        //         progressvalue: '78%',
        //         progressclass: 'bg-primary',
        //         percent: '78%',
        //     },
        //     {
        //         title: 'Questions Responded',
        //         count: '15',
        //         textcolor: 'text-warning',
        //         progressvalue: '30%',
        //         progressclass: 'bg-warning',
        //         percent: '30%',
        //     },
        //     {
        //         title: 'Average Rating',
        //         count: '5.00',
        //         textcolor: 'text-danger',
        //         progressvalue: '69%',
        //         progressclass: 'bg-danger',
        //         percent: '69%',
        //     },
        //     {
        //         title: 'Average Response Time',
        //         count: '172',
        //         textcolor: 'text-success',
        //         progressvalue: '90%',
        //         progressclass: 'bg-success',
        //         percent: '90%',
        //     },

        // ];
    }

    ngOnInit() {

    }
}
>>>>>>> d9d6ae9d7158a701861c288c688887384543c9f5

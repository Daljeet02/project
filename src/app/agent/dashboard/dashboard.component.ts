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
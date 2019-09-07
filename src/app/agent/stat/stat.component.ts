import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
	@Input() textClass: string;
	@Input() bgClass: string;
    @Input() count: number;
    @Input() title: string;
    @Input() percent: number;
    @Input() valueClass: number;

    constructor() {}

    ngOnInit() {}
}

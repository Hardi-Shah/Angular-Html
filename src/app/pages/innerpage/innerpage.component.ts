import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-innerpage',
  templateUrl: './innerpage.component.html',
  styleUrls: ['./innerpage.component.css'],
})
export class InnerpageComponent implements OnInit {

  selects: any[] = [
    { name: 'Option1' },
    { name: 'Option2' },
    { name: 'Option3' },
];

  displayedColumns: string[] = [
    'places',
    'date',
    'payouts',
    'status',
    'action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor() {}

  ngOnInit(): void {}
}
export interface PeriodicElement {
  places: string;
  date: string;
  payouts: string;
  status: string;
  action: string;
  classBtn: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    places: 'Themes Market',
    date: '9-12-2019',
    payouts: '$1300',
    status: 'Active',
    action: '',
    classBtn: 'btn-active',
  },
  {
    places: 'Freelance',
    date: '9-12-2019',
    payouts: '$1300',
    status: 'Active',
    action: '',
    classBtn: 'btn-active',
  },
  {
    places: 'Share Holding',
    date: '9-12-2019',
    payouts: '$1300',
    status: 'Pending',
    action: '',
    classBtn: 'btn-pending',
  },
  {
    places: "Envato's Affiliates",
    date: '9-12-2019',
    payouts: '$1300',
    status: 'Pending',
    action: '',
    classBtn: 'btn-pending',
  },
  {
    places: 'Marketing Revenue',
    date: '9-12-2019',
    payouts: '$1300',
    status: 'Declined',
    action: '',
    classBtn: 'btn-declined',
  },
];

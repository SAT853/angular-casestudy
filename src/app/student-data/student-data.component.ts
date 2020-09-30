import { StudentData } from './studentData.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css'],
})
export class StudentDataComponent implements OnInit {
  sortType = '';
  sortTitle = 'name';
  filtered: StudentData[] = [];

  studentData: StudentData[] = [
    {
      name: 'Sathish',
      class: '1',
      section: 'D',
      sub1: 45,
      sub2: 60,
      sub3: 65,
    },
    {
      name: 'Arun',
      class: '3',
      section: 'C',
      sub1: 40,
      sub2: 38,
      sub3: 65,
    },
    {
      name: 'Muthu',
      class: '4',
      section: 'B',
      sub1: 61,
      sub2: 50,
      sub3: 65,
    },
    {
      name: 'Raja',
      class: '1',
      section: 'A',
      sub1: 48,
      sub2: 45,
      sub3: 65,
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.filtered = [...this.studentData];
  }

  onSort(title: string): void {
    if (title !== this.sortTitle) {
      this.sortType = '';
      this.sortTitle = title;
      this.filtered = [...this.studentData];
    }

    if (this.sortType === '') {
      this.sortType = 'asc';
      this.filtered.sort((a, b) => {
        return a[title] > b[title] ? 1 : a[title] < b[title] ? -1 : 0;
      });
    } else if (this.sortType === 'asc') {
      this.sortType = 'dsc';
      this.filtered.sort((a, b) => {
        return b[title] > a[title] ? 1 : b[title] < a[title] ? -1 : 0;
      });
    } else {
      this.sortType = '';
      this.filtered = [...this.studentData];
    }
  }
}

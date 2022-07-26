import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ng-select',
  templateUrl: './ng-select.component.html',
  styleUrls: ['./ng-select.component.scss']
})
export class NgSelectComponent implements OnInit {

  simpleItems: any = [];
  selectedSimpleItem: any = null;

  people: any[] = [];
  selectedPersonId: string = '';

  selectedSearchPersonId: string = '';

  selectedPeople: any = null;

  groupedMultiSelectedPeople: any = null;

  customTemplateSelectedPeople: any = null;

  constructor() { }

  ngOnInit(): void {

    // simple array
    this.simpleItems = [true, 'Two', 3];

    // array of objects
    this.people = [];

  }

}

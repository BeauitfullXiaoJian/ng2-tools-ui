import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  constructor() { }

  codes = [
    `<ts-dropdown [items]="['Apple','Bananer','Cap']" title="Dropdown"></ts-dropdown>
  <ts-dropdown [items]="['Apple','Bananer','Cap']" title="Dropdown" btnClass="btn-primary"></ts-dropdown>
  <ts-dropdown [items]="['Apple','Bananer','Cap']" title="Dropdown" btnClass="btn-info"></ts-dropdown>        
  <ts-dropdown [items]="['Apple','Bananer','Cap']" title="Dropdown" btnClass="btn-success"></ts-dropdown>                
  <ts-dropdown [items]="['Apple','Bananer','Cap']" title="Dropdown" btnClass="btn-warning"></ts-dropdown> 
  <ts-dropdown [items]="['Apple','Bananer','Cap']" title="Dropdown" btnClass="btn-outline-dark"></ts-dropdown>
  <ts-dropdown [items]="['Apple','Bananer','Cap']" title="small" btnClass="btn-secondary btn-sm"></ts-dropdown>
  `,
    `<ts-dropdown [items]="['Apple','Bananer','Cap']" title="Dropdown" [select]="true"></ts-dropdown>
  <ts-dropdown [items]="['Apple','Bananer','Cap']" title="Dropdown" [select]="true" [value]="'Cap'"></ts-dropdown>
  <ts-dropdown [items]="['Apple','Bananer','Cap']" title="Dropdown" [select]="true" [useNumber]="1"></ts-dropdown>
  <ts-dropdown [items]="['Apple','Bananer','Cap']" title="Dropdown" [select]="true" [useNumber]="1" [value]="2"></ts-dropdown>`,
    `<ts-dropdown [items]="['Apple','Bananer','Cap']" title="Dropdown" [dropup]="true"></ts-dropdown>
  <ts-dropdown [items]="['Apple','Bananer','Cap']" title="Dropdown" [select]="true" [value]="'Cap'" [dropup]="true"></ts-dropdown>`,
  `<div class="btn-group" ts-dropdown>
    <button type="button" class="btn btn-danger dropdown-toggle">DropDown</button>
    <div class="dropdown-menu">
        <button class="dropdown-item">Action</button>
        <button class="dropdown-item">Another action</button>
        <button class="dropdown-item">Something else here</button>
        <div class="dropdown-divider"></div>
        <button class="dropdown-item">Separated link</button>
    </div>
  </div>
  <div class="btn-group dropup" ts-dropdown [dropup]="true">
    <button type="button" class="btn btn-danger dropdown-toggle">DropUp</button>
    <div class="dropdown-menu">
        <button class="dropdown-item">Action</button>
        <button class="dropdown-item">Another action</button>
        <button class="dropdown-item">Something else here</button>
        <div class="dropdown-divider"></div>
        <button class="dropdown-item">Separated link</button>
    </div>
  </div>`
  ]

  numberValue = 2
  stringValue = "Cap"

  doAction(){
    
  }
}

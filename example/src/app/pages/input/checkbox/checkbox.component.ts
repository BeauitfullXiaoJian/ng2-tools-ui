import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {


  checkeds = [true, true, true, true, true, true, true, true, true, true, true,]

  values = ['Apple', 'Dog']

  radioValue = "Wrong"

  codes = [
    `//template
  <ts-checkbox [(checked)]="checkeds[0]"></ts-checkbox>
  <ts-checkbox [(checked)]="checkeds[1]" type="square"></ts-checkbox>
  
  //ts code
  checkeds=[true,true]`,
    `<ts-checkbox label="Apple"></ts-checkbox>`,
    `<ts-checkbox color="primary" label="primary"></ts-checkbox>
  <ts-checkbox defaultColor="muted" activeColor="danger" label="checkbox"></ts-checkbox>`,
    `//template
  <ts-checkbox-group [(values)]="values">
  <div class="row">
      <div class="col-sm-3">
          <div class="card rounded-0">
              <div class="card-body">
                  <h4 class="card-title">
                      <ts-checkbox value="Apple" label="Apple"></ts-checkbox>
                  </h4>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
          </div>
      </div>
      <div class="col-sm-3">
          <div class="card rounded-0">
              <div class="card-body">
                  <h4 class="card-title">
                      <ts-checkbox value="Bananer" label="Bananer"></ts-checkbox>
                  </h4>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
          </div>
      </div>
      <div class="col-sm-3">
          <div class="card rounded-0">
              <div class="card-body">
                  <h4 class="card-title">
                      <ts-checkbox value="Computer" label="Computer"></ts-checkbox>
                  </h4>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
          </div>
      </div>
      <div class="col-sm-3">
          <div class="card rounded-0">
              <div class="card-body">
                  <h4 class="card-title">
                      <ts-checkbox value="Dog" label="Dog"></ts-checkbox>
                  </h4>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              </div>
          </div>
      </div>
  </div>
  <p>values : {{values.join()}}</p>
  //ts code
  values = ['Apple', 'Dog']
  `,
    `//template
  <ts-radio type="dot" [(checked)]="checkeds[1]" [label]="checkeds[1].toString()"></ts-radio>
  <ts-radio type="circle" [(checked)]="checkeds[2]" [label]="checkeds[2].toString()"></ts-radio>
  //ts code
  checkeds = [true,true]
  `,
  `//template
  <ts-radio-group value="Right" [(value)]="radioValue">
    <ts-radio value="Right" label="Right" color="success"></ts-radio>
    <ts-radio value="Wrong" label="Wrong" color="danger"></ts-radio>
  </ts-radio-group>
  <p>{{radioValue}}</p>
  //ts code
  radioValue = "Wrong"`,
  ]

  constructor() { }

  ngOnInit() { }

}

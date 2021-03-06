import { Component } from '@angular/core';

@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.css']
})
export class ExampleComponent {

    activeTab = "First"

    codes = [
        `<ts-tab [tabs]="['A','B','C','D','E','F']" activeTab="A"></ts-tab>`,
        `<ts-tab [tabs]="['First','Second','Third']" [activeTab]="activeTab" (tabChange)="activeTab=$event"></ts-tab>
  <div *ngIf="activeTab==='First'">
      Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater
      eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
  </div>
  <div *ngIf="activeTab==='Second'">
      Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo
      enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack
      odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
  </div>
  <div *ngIf="activeTab==='Third'">
      Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy
      hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard
      of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.
  </div>`,
        `activeTab = "First"`,
        `<ts-tab [tabs]="['First','Second','Third']" activeTab="First" [pads]="[tabPadFirst,tabPadSecond,tabPadThird]"></ts-tab>
  <div #tabPadFirst tab='First'>
      Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater
      eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
  </div>
  <div #tabPadSecond tab='Second'>
      Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo
      enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack
      odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
  </div>
  <div #tabPadThird tab='Third'>
      Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy
      hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard
      of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.
  </div>`,
        `<ts-tab [tabs]="['a','b','c','d']"></ts-tab>`,
        `<ts-tab [tabs]="['a','b','c','d']" activeTab='b'></ts-tab>`,
        `<ts-tab [tabs]="['a','b','c','d']" activeTab='b' position="center"></ts-tab>`,
        `<ts-tab [tabs]="['a','b','c','d']" activeTab='a' type="pills"></ts-tab>`,
        `<ts-tab [tabs]="['a','b','c','d']" activeTab='a' type="pills" color="danger"></ts-tab>

  <ts-tab #colorTabs [tabs]="['primary','secondary','success','warning','dark']" activeTab='primary' type="pills" (tabChange)="colorTabs.color=$event"></ts-tab>`,
        `<ts-tab [tabs]="['a','b','c']" activeTab='a' [pads]=[pa,pb,pc]></ts-tab>
  <div #pa tab="a">
        ...
  </div>
  <div #pb tab="b">
        ...
  </div>
  <div #pc tab="c">
        ...
  </div>`,
  `<ts-tab [tabs]="['a','b','c','d']" (tabChange)="testEvent=$event"></ts-tab>
  <p>{{testEvent||'please click a tab title'}}</p>`
    ]
    testEvent: string

}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ts-tab',
  templateUrl: './tab-pad.component.html',
  styleUrls: ['./tab-pad.component.css']
})
export class TabPadComponent {

  @Input() tabs: Array<string>

  @Input() activeTab: string

  @Output() tabChange = new EventEmitter<string>()

  isActive(tab: string): boolean {
    return tab === (this.activeTab || '')
  }

  changeTab(tab: string) {
    this.activeTab = tab
    this.tabChange.emit(tab)
  }

}

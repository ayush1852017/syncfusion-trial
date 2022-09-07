import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ClickEventArgs,
  SidebarComponent as SideComponent,
} from '@syncfusion/ej2-angular-navigations';
import { SearchSettingsModel } from '@syncfusion/ej2-grids';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  // public dockBar!: SideComponent;
  // public enableDock: boolean = true;
  @Input() data: any[] = [];
  @Input() queueData: any[] = [];
  @Input() progressData: any[] = [];
  @Input() processedData: any[] = [];
  @Input() approvedData: any[] = [];
  @Input() cancelledData: any[] = [];
  @Input() searchOptions!: SearchSettingsModel;
  @Input() toolbarOptions: any[] = [];
  public showIcon: boolean = true;
  @ViewChild('dockBar') dockBar!: SideComponent;
  public enableDock: boolean = true;
  public width: string = '220px';
  public dockSize: string = '72px';
  toggleClick() {
    this.dockBar.toggle();
  }
  public ListData: { [key: string]: Object }[] = [
    {
      id: '1',
      text: 'Grid',
      iconcss: 'sb-icons icon-grid e-sb-icon control-icon',
    },
    {
      id: '2',
      text: 'Chart',
      iconcss: 'sb-icons icon-chart e-sb-icon control-icon',
    },
    {
      id: '3',
      text: 'Datepicker',
      iconcss: 'sb-icons icon-datepicker e-sb-icon control-icon',
    },
    {
      id: '4',
      text: 'Dialog',
      iconcss: 'sb-icons icon-dialog e-sb-icon control-icon',
    },
    {
      id: '5',
      text: 'Dropdown List',
      iconcss: 'sb-icons icon-dropdownlist e-sb-icon control-icon',
    },
  ];
  // public onCreated(args: any) {
  //   this.dockBar.toggle();
  // }
  constructor() {}

  ngOnInit(): void {
    this.toggleClick();
  }
  toolbarCliked(args: ClickEventArgs) {
    if (args.item.tooltipText == 'Menu') {
      this.dockBar.toggle();
    }
  }
  // onSelect(args: any) {
  //   // document.getElementById('dockContent')!.innerHTML = args.data.description;
  // }
}

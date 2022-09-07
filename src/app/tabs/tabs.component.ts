import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GridComponent, PageService } from '@syncfusion/ej2-angular-grids';
import {
  DataSourceChangedEventArgs,
  EventArgs,
  MenuEventArgs,
  SidebarComponent,
} from '@syncfusion/ej2-angular-navigations';
import {
  DialogComponent,
  Tooltip,
  TooltipComponent,
  TooltipEventArgs,
} from '@syncfusion/ej2-angular-popups';
import { DataUtil } from '@syncfusion/ej2-data';
import {
  Cell,
  ContextMenuItem,
  ContextMenuItemModel,
  CustomAddEventArgs,
  DataStateChangeEventArgs,
  EditSettingsModel,
  FilterSettingsModel,
  parentsUntil,
  QueryCellInfoEventArgs,
  SearchSettingsModel,
  SelectionSettingsModel,
  ToggleEditCell,
  ToolbarItems,
} from '@syncfusion/ej2-grids';
import { EventClickArgs } from '@syncfusion/ej2-schedule';
import { CellInfoEventArgs } from '@syncfusion/ej2/spreadsheet';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [PageService],
})
export class TabsComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() queueData: any[] = [];
  @Input() progressData: any[] = [];
  @Input() processedData: any[] = [];
  @Input() approvedData: any[] = [];
  @Input() cancelledData: any[] = [];
  @Input() searchOptions: SearchSettingsModel;
  @Input() toolbarOptions: any[] = [];
  @ViewChild('sidebar') sidebar!: SidebarComponent;
  @ViewChild('grid', { static: true }) public grid: GridComponent;

  public pageSettings!: Object;
  public today: Date = new Date();
  public currentYear: number = this.today.getFullYear();
  public currentMonth: number = this.today.getMonth();
  public currentDay: number = this.today.getDate();
  public date: Date = new Date(this.currentYear, this.currentMonth, 14, 10, 30);
  public minDate: Date = new Date(this.currentYear, this.currentMonth, 7, 10);
  public maxDate: Date = new Date(
    this.currentYear,
    this.currentMonth,
    27,
    22,
    30
  );
  public closeOnDocumentClick: boolean = true;
  public width: string = '250px';
  public position: string = 'Right';
  @ViewChild('dialog')
  public alertDialog: DialogComponent;
  hide: any;
  // public type: string = 'Push';
  public onCreated(args: any) {
    this.sidebar.hide();
    this.sidebar.element.style.visibility = '';
  }
  public form: Object = {};
  public filterOption: FilterSettingsModel = { type: 'Excel' };
  public dropdata: string[] = DataUtil.distinct(
    this.data,
    'CustomerID'
  ) as string[];
  public fields: object = { text: 'CustomerID', value: 'CustomerID' };
  public height = '220px';
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  // Close Button
  public selectionOptions: SelectionSettingsModel;
  public InsertComment: String;
  public customerIDDistinctData: any = [
    'VINET',
    'TOMSP',
    'HANAR',
    'VICTE',
    'SUPRD',
    'HANAR',
    'CHOPS',
    'RICSU',
    'WELLI',
    'HILAA',
    'ERNSH',
    'CENTC',
    'OTTIK',
    'QUEDE',
    'RATTC',
    'ERNSH',
    'FOLKO',
    'BLONP',
    'WARTH',
    'FRANK',
    'GROSR',
    'WHITC',
    'WARTH',
    'SPLIR',
    'RATTC',
    'QUICK',
    'VINET',
    'MAGAA',
    'TORTU',
    'MORGK',
    'BERGS',
    'LEHMS',
    'BERGS',
    'ROMEY',
    'ROMEY',
    'LILAS',
    'LEHMS',
    'QUICK',
    'QUICK',
    'RICAR',
    'REGGC',
    'BSBEV',
    'COMMI',
    'QUEDE',
    'TRADH',
    'TORTU',
    'RATTC',
    'VINET',
    'LILAS',
    'BLONP',
    'HUNGO',
    'RICAR',
    'MAGAA',
    'WANDK',
    'SUPRD',
    'GODOS',
    'TORTU',
    'OLDWO',
    'ROMEY',
    'LONEP',
    'ANATR',
    'HUNGO',
    'THEBI',
    'DUMON',
    'WANDK',
    'QUICK',
    'RATTC',
    'ISLAT',
    'RATTC',
    'LONEP',
    'ISLAT',
    'TORTU',
    'WARTH',
    'ISLAT',
    'PERIC',
    'KOENE',
    'SAVEA',
    'KOENE',
    'BOLID',
    'FOLKO',
    'FURIB',
    'SPLIR',
    'LILAS',
    'BONAP',
    'MEREP',
    'WARTH',
    'VICTE',
    'HUNGO',
    'PRINI',
    'FRANK',
    'OLDWO',
    'MEREP',
    'BONAP',
    'SIMOB',
    'FRANK',
    'LEHMS',
    'WHITC',
    'QUICK',
    'RATTC',
    'FAMIA',
  ];
  public contextMenuItems: ContextMenuItemModel[] = [
    { text: 'Insert Comment', target: '.e-content', id: 'insertComment' },
  ];
  public changeText: boolean = false;

  public alertDlgButtons: Object[] = [
    {
      buttonModel: {
        isPrimary: true,
        content: 'Insert',
        cssClass: 'e-flat',
      },
      click: (event: EventClickArgs) => {
        this.alertDialog.hide();
        console.log(event);
        // document.getElementById('Grid').addEventListener('click', (args) => {
        //   if ((args.target as any).classList.contains('e-rowcell')) {
        //     let rowInfo = this.grid.getRowInfo(args.target); // get row information
        //     alert(rowInfo);
        //   }
        // });
      },
    },
  ];
  comment = 'Hey';
  mentionConfig = {
    mentions: [
      {
        items: ['Noah', 'Natalia', 'Nuria', 'Liam', 'Mason', 'Jacob'],
        triggerChar: '@',
        maxItems: 5,
        labelKey: 'name',
      },
      {
        items: ['Red', 'Yellow', 'Green'],
        triggerChar: '#',
      },
    ],
  };
  constructor(private router: Router, private api: ApiService) {}
  public visible: Boolean = false;

  public positionDialog: any = { X: 100, Y: 100 };
  contextMenuClick(args: MenuEventArgs): void {
    if (args.item.id === 'insertComment') {
      this.alertDialog.show();
      let targetAttr = args.element.getBoundingClientRect();
      let commentBox = document.getElementById('commentDialog');

      console.log(args);
      this.alertDialog.position = {
        Y: +(+targetAttr?.top + +targetAttr?.height - (10 + 46)),
        X: +(+targetAttr?.left - +targetAttr?.width - (20 + 172)),
      };
    }
  }
  tooltip(args: QueryCellInfoEventArgs): void {
    // you can also add tooltip based on condition here
    let tooltip: Tooltip = new Tooltip(
      {
        content: args.cell.textContent.toString(),
      },
      args.cell as HTMLElement
    );
    console.log('args');
  }

  public tooltips: Object;

  ngOnInit(): void {
    this.pageSettings = { pageCount: 2, pageSizes: true };
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
    };
    this.toolbar = ['Edit', 'Update', 'Delete'];
    this.selectionOptions = {
      cellSelectionMode: 'Box',
      type: 'Multiple',
      mode: 'Cell',
    };
  }
  actionBegin(args: any) {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      args.dialog.animationSettings = { effect: 'Zoom', duration: 400 };
      if (args.rowData.CustomerID === 'Charmain') {
        args.cancel = true;
      }
    }
  }
  closeClick_btn(): void {
    this.sidebar.element.classList.remove('sidebar');
    this.sidebar.element.classList.remove('rotate');
    this.sidebar.element.classList.remove('w3-animate-zoom');
    this.sidebar.element.classList.remove('w3-animate-bottom');
    this.sidebar.element.classList.remove('rotate_3d');
    this.sidebar.element.classList.remove('reverse_slide_out');
    this.sidebar.hide();
  }
  openComment() {
    this.router.navigate(['/comments']);
    console.log('first');
  }
  // Zoom Effect
  zoom(): void {
    this.sidebar.show();
    this.sidebar.element.classList.add('w3-animate-zoom');
  }
}

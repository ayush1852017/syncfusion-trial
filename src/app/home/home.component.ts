import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { SearchSettingsModel, ToolbarItems } from '@syncfusion/ej2-grids';
import { ApiService } from '../api.service';
import { queue } from '../data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: SidebarComponent;
  public data: any = queue;
  public searchOptions!: SearchSettingsModel;
  public toolbarOptions!: ToolbarItems[];
  public queueData!: any[];
  public progressData!: any[];
  public processedData!: any[];
  public approvedData!: any[];
  public cancelledData!: any[];
  public closeOnDocumentClick: boolean = true;
  public width: string = '250px';
  public position: string = 'Right';
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.searchOptions = {
      fields: ['CustomerID'],
      operator: 'contains',
      ignoreCase: true,
    };
    this.toolbarOptions = ['Search'];
    this.getQueue();
    this.getProgress();
    this.getProcessed();
    this.getApproved();
    this.getCancelled();
  }
  // Calling the api
  getQueue() {
    // this.api.getQueueData().subscribe({
    //   next: (res) => {
    //     this.queueData = res;
    //   },
    //   error: (err) => {
    //     console.log(err.message);
    //   },
    // });
    this.queueData = this.data;
  }
  getProgress() {
    this.api.getProgressData().subscribe({
      next: (res) => {
        this.progressData = res;
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }
  getProcessed() {
    this.api.getProcessedData().subscribe({
      next: (res) => {
        this.processedData = res;
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }
  getApproved() {
    this.api.getApprovedData().subscribe({
      next: (res) => {
        this.approvedData = res;
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }
  getCancelled() {
    this.api.getCancelledData().subscribe({
      next: (res) => {
        this.cancelledData = res;
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }

  zoom(): void {
    this.sidebar.show();
    this.sidebar.element.classList.add('w3-animate-zoom');
  }
}

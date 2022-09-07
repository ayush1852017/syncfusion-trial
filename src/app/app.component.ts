import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { EmitType, enableRipple } from '@syncfusion/ej2-base';
import { Accordion } from '@syncfusion/ej2-navigations';

import {
  SidebarComponent,
  AccordionComponent,
  ExpandEventArgs,
  AccordionClickArgs,
} from '@syncfusion/ej2-angular-navigations';
import {
  SearchSettings,
  SearchSettingsModel,
  ToolbarItems,
} from '@syncfusion/ej2-grids';
import { ApiService } from './api.service';
import {
  DialogComponent,
  ButtonPropsModel,
} from '@syncfusion/ej2-angular-popups';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { FormBuilder, Validators } from '@angular/forms';

enableRipple(true);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ApiService],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('ejDialog') ejDialog!: DialogComponent;
  // Create element reference for dialog target element.
  @ViewChild('container', { read: ElementRef, static: true })
  container!: ElementRef;
  @ViewChild('sidebar')
  sidebarObj!: SidebarComponent;
  sidebar!: SidebarComponent;
  @ViewChild('accordion')
  accordionObj!: AccordionComponent;

  public batchForm: any;
  public targetElement!: HTMLElement;
  public target: string = '.control-section';
  public showCloseIcon: boolean = true;
  public closeOnDocumentClick: boolean = true;
  public position: string = 'Right';
  public header: string = 'Dialog with template driver form';
  public dialogVisibility: boolean = false;
  @ViewChild('ddlelement')
  public dropDownListObject?: DropDownListComponent;
  // defined the array of data
  public data: string[] = [
    'Badminton',
    'Basketball',
    'Cricket',
    'Golf',
    'Hockey',
    'Rugby',
  ];
  // set placeholder text to DropDownList input element
  public placeholder: string = 'Select a game';
  ngAfterViewInit() {
    // Set null value to value property for clear the selected item
    document.getElementById('btn')!.onclick = () => {
      this.dropDownListObject!.value = null;
    };
  }

  // To get all element of the dialog component after component get initialized.
  ngOnInit() {
    this.batchForm = this.formBuilder.group({
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[+][0-9]{12}$/)]],
      salary: ['', Validators.required],
    });
    this.initilaizeTarget();
    this.ejDialog.hide();
  }

  // Initialize the Dialog component target element.
  public initilaizeTarget: EmitType<object> = () => {
    this.targetElement = this.container.nativeElement.parentElement;
  };
  // Sample level code to handle the button click action
  public onOpenDialog = (event: any): void => {
    // Call the show method to open the Dialog
    this.ejDialog.show();
  };

  //Expanding Event function for Accordion component.

  expand(e: ExpandEventArgs): void {
    if (e.isExpanded) {
      if (
        e
          .element!.getElementsByClassName('e-acrdn-content')[0]
          .children[0].classList.contains('e-accordion')
      ) {
        return;
      }
      //Initialize Nested Accordion component
      let nestAcrdn: Accordion = new Accordion({
        items: (<{ subItems: object[] }>e.item).subItems,
        expanding: this.expand,
        clicked: this.clicked,
      });

      let elemId: string =
        e.element!.getElementsByClassName('e-acrdn-content')[0].children[0].id;
      //Render initialized Nested Accordion component
      nestAcrdn.appendTo('#' + elemId);
    }
  }

  public clicked(e: AccordionClickArgs): void {
    if (
      e.item &&
      (e.originalEvent!.target as HTMLElement)
        .closest('.e-acrdn-item')!
        .getElementsByClassName('e-tgl-collapse-icon').length
    ) {
      this.sidebarObj.hide();
    }
  }

  public hamburgerClick(): void {
    this.sidebarObj.show();
    this.accordionObj.refresh();
  }

  public close(): void {
    this.sidebarObj.hide();
  }

  onClose(args: any) {
    this.sidebar.hide();
    this.sidebar.element.style.visibility = '';
  }
  public onOverlayClick: EmitType<object> = () => {
    this.ejDialog.hide();
  };
  addBatch() {
    this.api.addQueue(this.batchForm.value).subscribe({
      next: (res) => {
        alert('New Batch Added');
        this.ejDialog.hide();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  constructor(private api: ApiService, private formBuilder: FormBuilder) {}
}

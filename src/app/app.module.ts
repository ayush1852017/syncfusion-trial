import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import {
  SidebarModule,
  MenuAllModule,
  TreeViewAllModule,
  ToolbarAllModule,
  AccordionModule,
} from '@syncfusion/ej2-angular-navigations';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import {
  GridAllModule,
  GridModule,
  SearchService,
  ToolbarService,
  PagerModule,
  FilterService,
  VirtualScroll,
  EditService,
  VirtualScrollService,
  SortService,
} from '@syncfusion/ej2-angular-grids';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { DialogAllModule, TooltipModule } from '@syncfusion/ej2-angular-popups';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { CalendarAllModule } from '@syncfusion/ej2-angular-calendars';
import { ComboBoxAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormComponent } from './form/form.component';
import { TabsComponent } from './tabs/tabs.component';
import { ColorPickerAllModule } from '@syncfusion/ej2-angular-inputs';
import { enableRipple } from '@syncfusion/ej2-base';
import { CommentComponent } from './comment/comment.component';
import { InPlaceEditorModule } from '@syncfusion/ej2-angular-inplace-editor';
import { HomeComponent } from './home/home.component';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { MentionModule } from 'angular-mentions';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import {
  VirtualizationService,
  ListViewAllModule,
} from '@syncfusion/ej2-angular-lists';
import {} from '@syncfusion/ej2';
import {
  HtmlEditorService,
  ToolbarService as ToolService,
  LinkService,
  ImageService,
  RichTextEditorAllModule,
} from '@syncfusion/ej2-angular-richtexteditor';
enableRipple(true);
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FormComponent,
    TabsComponent,
    CommentComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    GridAllModule,

    RouterModule,
    TooltipModule,
    RichTextEditorAllModule,
    BrowserModule,
    UploaderModule,
    AutoCompleteModule,
    ColorPickerAllModule,
    ListViewAllModule,
    CalendarAllModule,
    NumericTextBoxAllModule,
    DialogModule,
    DatePickerAllModule,
    DateTimePickerModule,
    ContextMenuModule,
    DropDownListAllModule,
    ReactiveFormsModule,
    FormsModule,
    CheckBoxModule,
    ListViewModule,
    SidebarModule,
    ButtonModule,
    MenuAllModule,
    TreeViewAllModule,
    ToolbarAllModule,
    AccordionModule,
    GridModule,
    PagerModule,
    TabModule,
    ComboBoxAllModule,
    HttpClientModule,
    InPlaceEditorModule,
    AppRoutingModule,
    MentionModule,
  ],
  providers: [
    SearchService,
    ToolbarService,
    HtmlEditorService,
    ToolService,
    ImageService,
    LinkService,
    FilterService,
    EditService,
    SortService,
    VirtualScrollService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

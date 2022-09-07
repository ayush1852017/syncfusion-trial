import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-comment',
  templateUrl: 'comment.component.html',
  styleUrls: ['comment.component.css'],
})
export class CommentComponent implements OnInit {
  commentForm!: FormGroup;
  commentSource: any = [];
  value: string = '';
  items: any[] = [
    {
      username: 'noah',
      name: 'Noah',
      img: '42143138',
    },
    {
      username: 'liam',
      name: 'Liam',
      img: '42143139',
    },
    {
      username: 'mason',
      name: 'Mason',
      img: '42143140',
    },
    {
      username: 'jacob',
      name: 'Jacob',
      img: '42143141',
    },
  ];
  public listFields: { [key: string]: string } = {
    text: 'text',
    groupBy: 'category',
  };
  public searchData: { [key: string]: Object }[] = [
    { Name: 'Australia', Code: 'AU' },
    { Name: 'Bermuda', Code: 'BM' },
    { Name: 'Canada', Code: 'CA' },
    { Name: 'Cameroon', Code: 'CM' },
    { Name: 'Denmark', Code: 'DK' },
    { Name: 'France', Code: 'FR' },
    { Name: 'Finland', Code: 'FI' },
    { Name: 'Germany', Code: 'DE' },
    { Name: 'Greenland', Code: 'GL' },
    { Name: 'Hong Kong', Code: 'HK' },
    { Name: 'India', Code: 'IN' },
    { Name: 'Italy', Code: 'IT' },
    { Name: 'Japan', Code: 'JP' },
    { Name: 'Mexico', Code: 'MX' },
    { Name: 'Norway', Code: 'NO' },
    { Name: 'Poland', Code: 'PL' },
    { Name: 'Switzerland', Code: 'CH' },
    { Name: 'United Kingdom', Code: 'GB' },
    { Name: 'United States', Code: 'US' },
  ];
  public fields: Object = { value: 'Name' };
  // set the placeholder to the AutoComplete input
  public text: string = 'Find a country';
  //enable the highlight property to highlight the matched character in suggestion list
  public highlight: Boolean = true;
  constructor(private api: ApiService, private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.required],
    });
    this.getComment();
  }

  getComment() {
    this.api.getComments().subscribe({
      next: (res) => {
        this.commentSource = res;
      },
    });
  }
  ConvertStringToHTML(str: string) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, 'text/html');
    return doc.body;
  }
  onSubmit(): void {
    this.api
      .postComments(this.ConvertStringToHTML(this.commentForm.value))
      .subscribe({
        next: () => {
          console.log(this.commentForm.value);
          alert('Employee  added successfully');
        },
        error: (err) => {
          console.log(err.message);
        },
      });
  }
}

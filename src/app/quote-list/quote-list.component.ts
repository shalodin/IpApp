import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss']
})
export class QuoteListComponent implements OnInit {
  @Input() quoteList: any;
  constructor() { }

  ngOnInit(): void {
  }

}

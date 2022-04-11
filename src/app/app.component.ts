import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  quoteList:any = [
    {
      name:'Habib',quoteTitle:'Check to see',
      quote:'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.',
      author:'Steve Jobs', datePosted:'4/11/2022, 4:50:16 PM'
  },
    {
      name:'David',
      quoteTitle:'Tell me',quote:'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.',
      author:'Will Smith',
      datePosted:'4/11/2022, 4:50:16 PM'
  },
    {
      name:'John',
      quoteTitle:'Post see',
      quote:'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.',
      author:'David Travis',
      datePosted:'4/11/2022, 4:50:16 PM'
    },
    {name:'Richy',quoteTitle:'Please chk',quote:'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.',author:'David Travis',datePosted:'4/11/2022, 4:50:16 PM'},
  ];
  title = 'quotes-app';


  quoteForm = this.fb.group({
    name: [''],
    quoteTitle: [''],
    quote:[''],
    author:['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submitQuote(){
    //when form is submited, update quote list
    let quotes = [];

    this.quoteList?.map((quote:any)=>{
      quotes.push(quote)
    })

    quotes.push({
      name:this.quoteForm.controls.name.value,
      quoteTitle:this.quoteForm.controls.quoteTitle.value,
      quote:this.quoteForm.controls.quote.value,
      author:this.quoteForm.controls.author.value,
      datePosted:new Date().toLocaleString()
    });
    this.quoteList = quotes;
  }
  
}

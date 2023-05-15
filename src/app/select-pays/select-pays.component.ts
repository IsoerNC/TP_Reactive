import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Subscription, debounce, debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-select-pays',
  templateUrl: './select-pays.component.html',
  styleUrls: ['./select-pays.component.css']
})
export class SelectPaysComponent implements AfterViewInit, OnDestroy{

  sub!: Subscription;

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


  constructor(){}

  @ViewChild('input')
  inputTxt!: ElementRef 

  pays: Array<any> =[

    {
      id:"FR",
      nom:"France",
    },
    {
      id:"NZ",
      nom:"Nouvelle Zealand"
    },
    {
      id:"NC",
      nom:"Nouvelle Caledonie",
    }
  ]

  ngAfterViewInit(): void {
    this.sub = fromEvent(this.inputTxt.nativeElement,'keyup').pipe(
      debounceTime(500),
      map((x)=> this.inputTxt.nativeElement.value)

    ).subscribe((x)=>{
      if(x.trim().lenght ==0)
    }
  }

}

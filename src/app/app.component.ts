import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  tabNumber: number = 0;
  panelNumber: number = 0;
  menuOpen: boolean = false;
  emailCtrl: FormControl = new FormControl('', Validators.pattern(EMAIL_REGEX));

  constructor() { }

  ngOnInit(): void {

  }

  loadTab(number) {
    this.tabNumber = number;
  }

  loadPanel(number) {
    this.panelNumber = number;
  }

  scrollToElement(element: HTMLElement) {
    this.menuOpen = false;
    element.scrollIntoView();
  }
}
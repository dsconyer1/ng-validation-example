import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templated',
  templateUrl: './templated.component.html',
  styleUrls: ['./templated.component.css']
})
export class TemplatedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(form: NgForm) {
    console.log(form.value);
  }
}

import { Component, OnInit } from '@angular/core';
import {CalculatorService} from '../calculator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private svc: CalculatorService) { }

  ngOnInit() {
  }

}

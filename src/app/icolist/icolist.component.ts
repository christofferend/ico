import { Component, OnInit } from '@angular/core';

import { IcoService } from '../ico.service'

@Component({
  selector: 'app-icolist',
  templateUrl: './icolist.component.html',
  styleUrls: ['./icolist.component.css']
})
export class IcolistComponent implements OnInit {

  constructor(
    private icoService: IcoService
  ) {}

  ngOnInit() {
  }


}

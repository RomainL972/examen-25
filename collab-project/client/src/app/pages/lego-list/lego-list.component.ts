import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Lego } from '@common/models/lego';
import { serverUrl } from '../../../constants';

@Component({
  selector: 'app-lego-list',
  imports: [CommonModule],
  templateUrl: './lego-list.component.html',
  styleUrl: './lego-list.component.scss'
})
export class LegoListComponent {
  constructor(private http: HttpClient) {}
  legos: Lego[] = [];

  async ngOnInit() {
    console.log("hey");
    const json = await fetch(`${serverUrl}/legos`);
    const data = await json.json();
    this.legos = data;
  }
}

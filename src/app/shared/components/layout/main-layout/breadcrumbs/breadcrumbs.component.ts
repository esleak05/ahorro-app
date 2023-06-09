import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  public items: MenuItem[] = [];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'Categories' },
      { label: 'Sports' },
      { label: 'Football' },
      { label: 'Countries' },
      { label: 'Spain' },
      { label: 'F.C. Barcelona' },
      { label: 'Squad' },
      {
        label: 'Lionel Messi',
        url: 'https://en.wikipedia.org/wiki/Lionel_Messi',
      },
    ];
  }
}

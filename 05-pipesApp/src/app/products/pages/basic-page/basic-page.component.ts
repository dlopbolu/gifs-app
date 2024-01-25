import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

  public nameLower: string = 'dani';
  public nameUpper: string = 'Dani';
  public fullName: string = 'DAniEl';

  public customDate: Date = new Date();
}

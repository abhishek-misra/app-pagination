import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-pagination';

  activePage = 0;

  displayActivePage(activePageNumber: number): void {
    this.activePage = activePageNumber;
  }
}

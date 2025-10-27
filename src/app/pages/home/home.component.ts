import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  searchQuery: string = '';

  ngAfterViewInit() {
    $('#toggle').click(() => {
      $('#toggle').toggleClass('active');
      $('#overlay').toggleClass('open');
    });


  }

  onSearch() {
    console.log(this.searchQuery);
  }
}

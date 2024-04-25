import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // showMore: boolean = false;
  showMoreGoogle = false;
  showMoreApna = false;
  showMoreWeather = false;
  showMoreCarbike = false;
  showMoreCarLoan = false;

  toggleMore(section: string) {
    if (section === 'google') {
      this.showMoreGoogle = !this.showMoreGoogle;
    } else if (section === 'apna') {
      this.showMoreApna = !this.showMoreApna;
    }
    else if (section === 'weather') {
      this.showMoreWeather = !this.showMoreWeather;
    }
    else if (section === 'carbike') {
      this.showMoreCarbike = !this.showMoreCarbike;
    }
    else if (section === 'carloan') {
      this.showMoreCarLoan = !this.showMoreCarLoan;
    }
  }
}



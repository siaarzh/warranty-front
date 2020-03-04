import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent {
  companyAddress = environment.company.address;
  companyAddress2gisCoordinates = environment.company.gps;
  fbPage = environment.company.social.fbPage;
  vkPage = environment.company.social.vkPage;
  igPage = environment.company.social.igPage;
}

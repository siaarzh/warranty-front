import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './contact.component.html',
  styleUrls: ['../../shared/articles.sass', './contact.component.sass'],
})
export class ContactComponent {
  fbPage = environment.company.social.fbPage;
  vkPage = environment.company.social.vkPage;
  igPage = environment.company.social.igPage;
}

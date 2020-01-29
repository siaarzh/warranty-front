import { Component, OnInit } from '@angular/core';
import { Notification } from '../notification.model';
import { NotificationService } from '../notification.service';
import { ActivatedRoute, Params } from '@angular/router';
import { WarrantyService } from '../../warranty/warranty.service';
import { Warranty } from '../../warranty/warranty.model';

@Component({
  selector: 'app-notification-message',
  templateUrl: './notification-message.component.html',
  styleUrls: ['./notification-message.component.sass'],
})
export class NotificationMessageComponent implements OnInit {
  notification: Notification;
  notificationIndex: number;
  warranty: Warranty;
  warrantyIndex: number;

  constructor(
    private notificationService: NotificationService,
    private warrantyService: WarrantyService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.notificationIndex = +params.id;
      this.notification = this.notificationService.getNotification(this.notificationIndex);
      this.warrantyIndex = +this.notification.warrantyID;
      this.warranty = this.warrantyService.getWarranty(this.warrantyIndex);
    });
  }
}

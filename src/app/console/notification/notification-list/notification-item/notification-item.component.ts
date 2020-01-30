import { Component, Input, OnInit } from '@angular/core';
import { Notification } from '../../notification.model';
import { WarrantyService } from '../../../warranty/warranty.service';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.sass'],
})
export class NotificationItemComponent implements OnInit {
  @Input() notification: Notification;
  @Input() notificationIndex: number;
  imagePath: string;
  notificationContentClean: string;

  constructor(private warrantyService: WarrantyService) {}

  ngOnInit(): void {
    this.imagePath = this.warrantyService.getWarranty(this.notification.warrantyUUID).imagePath;
    this.notificationContentClean = this.notification.messageContent.replace(/<[^>]*>/g, '');
  }
}

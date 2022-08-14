import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../notification.service';

import { Notification } from '../notification.model';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['../../../shared/item-lists.sass', './notification-list.component.sass'],
})
export class NotificationListComponent implements OnInit {
  category: string;
  unreadCount: number;
  notifications: Notification[];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.category = 'Входящие';
    this.notifications = this.notificationService.getNotifications();
    this.unreadCount = this.notifications.filter(obj => obj.isRead === false).length;
  }
}

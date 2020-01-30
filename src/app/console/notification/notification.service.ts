import { Injectable } from '@angular/core';
import { Notification } from './notification.model';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notifications: Notification[] = [
    new Notification(
      'Гарантия "MICROSOFT Xbox One Wireless Controller - White" истекла',
      'alert',
      'Alert_Service',
      '2019-04-18T17:31:24',
      `
        <p>Гарантия <b>"MICROSOFT Xbox One Wireless Controller - White"</b> истекла. Вы можете удалить или архивировать этот артикуль.</p>
        `,
      '34009b55-6cef-442b-9917-114d02f9d929',
    ),
    new Notification(
      'Гарантия "MICROSOFT Xbox One Wireless Controller - White" истекает (7 дней)',
      'warning',
      'Warning_Service',
      '2019-04-11T17:31:24',
      `
        <p>Гарантия <b>"MICROSOFT Xbox One Wireless Controller - White"</b> истечет через 7 дней.</p>
        `,
      '34009b55-6cef-442b-9917-114d02f9d929',
      true,
    ),
    new Notification(
      'Гарантия "MICROSOFT Xbox One Wireless Controller - White" истекает (30 дней)',
      'warning',
      'Warning_Service',
      '2019-03-18T17:31:24',
      `
        <p>Гарантия <b>"MICROSOFT Xbox One Wireless Controller - White"</b> истечет через 30 дней.</p>
        `,
      '34009b55-6cef-442b-9917-114d02f9d929',
    ),
  ];

  getNotifications(): Notification[] {
    return this.notifications.slice();
  }

  getNotification(id: number): Notification {
    return this.notifications[id];
  }
}

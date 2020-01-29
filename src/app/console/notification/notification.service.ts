import { Injectable } from '@angular/core';
import { Notification } from './notification.model';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notificaitons: Notification[] = [
    new Notification(
      'Гарантия "MICROSOFT Xbox One Wireless Controller - White" истекла',
      'alert',
      'Alert_Service',
      '2019-04-18T17:31:24',
      `
        <p>Гарантия "MICROSOFT Xbox One Wireless Controller - White" истекла. Вы можете удалить или архивировать этот артикуль.</p>
        `,
      '0',
    ),
    new Notification(
      'Гарантия "MICROSOFT Xbox One Wireless Controller - White" истекает (7 дней)',
      'warning',
      'Warning_Service',
      '2019-04-11T17:31:24',
      `
        <p>Гарантия "MICROSOFT Xbox One Wireless Controller - White" истечет через 7 дней.</p>
        `,
      '0',
      true,
    ),
    new Notification(
      'Гарантия "MICROSOFT Xbox One Wireless Controller - White" истекает (30 дней)',
      'warning',
      'Warning_Service',
      '2019-03-18T17:31:24',
      `
        <p>Гарантия "MICROSOFT Xbox One Wireless Controller - White" истечет через 30 дней.</p>
        `,
      '0',
    ),
  ];

  getNotifications(): Notification[] {
    return this.notificaitons.slice();
  }

  getNotification(id: number): Notification {
    return this.notificaitons[id];
  }
}

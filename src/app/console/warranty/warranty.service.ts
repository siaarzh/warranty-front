import { Warranty } from './warranty.model';
import { WarrantyHistory } from './warranty-history.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WarrantyService {
  private warranties: Warranty[] = [
    new Warranty(
      'MICROSOFT Xbox One Wireless Controller - White',
      'Играйте с беспроводным контроллером Microsoft Xbox. Этот контроллер имеет вдвое больше предыдущего беспроводного диапазона предыдущих контроллеров, так что вы можете сидеть, где хотите. А благодаря соединению Bluetooth вы можете использовать его с вашим Xbox One, ПК или любым планшетом Windows.\n' +
        '\n' +
        'Текстурные ручки облегчают использование, а для подключения гарнитуры предусмотрен разъем 3,5 мм. Вы даже можете переназначить кнопку с помощью приложения аксессуаров для Xbox на Xbox One.',
      'https://brain-images-ssl.cdn.dixons.com/6/2/10152126/l_10152126.jpg',
      '889842084351',
      '02600877003737',
      '34009b55-6cef-442b-9917-114d02f9d929',
      [
        new WarrantyHistory(
          '2019-01-19T17:31:21',
          'expired',
          '90 day Limited Warranty',
          '2019-01-19T17:31:21',
          false,
          '2019-04-19',
        ),
      ],
    ),
    new Warranty(
      'Logitech - K780 Wireless Keyboard - Белый',
      'Печатайте с помощью этой многофункциональной беспроводной клавиатуры Logitech. Встроенная резиновая подставка поддерживает устройства вертикально, что позволяет легко просматривать небольшие экраны, а 128-битное шифрование AES обеспечивает конфиденциальность информации. Эта беспроводная клавиатура Logitech, совместимая с устройствами под управлением Windows, Mac, Chrome и Android, использует технологию USB и Bluetooth для подключения к смартфону и планшету.',
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5592/5592420_sd.jpg',
      '097855122834',
      '1823CE0F9139',
      'df3656c6-4a8a-4659-ba58-2b0dfda2bc04',
      [
        new WarrantyHistory(
          '2018-09-03T17:34:41',
          'valid',
          '1 year HARDWARE WARRANTY',
          '2018-09-03T17:34:41',
          false,
          '2019-09-03',
        ),
        new WarrantyHistory(
          '2018-12-03T13:22:03',
          'valid',
          '1 year HARDWARE WARRANTY',
          '2018-09-03T17:34:41',
          true,
          '2020-09-03',
        ),
      ],
    ),
    new Warranty(
      'HP OfficeJet 3830 All-in-One Printer',
      'Сделайте больше с помощью простого способа печати со своего смартфона или планшета.',
      'https://sg-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/F/5/F5R95A-1_T1550820998.png',
      '889296063285',
      '156796549849',
      '4c7fbb32-1e0f-4b75-87f4-b449402c8349',
      [
        new WarrantyHistory(
          '2019-01-19T17:31:21',
          'expired',
          '90 day Limited Warranty',
          '2019-01-19T17:31:21',
          false,
          '2019-04-19',
        ),
      ],
    ),
  ];

  getWarranties(): Warranty[] {
    return this.warranties.slice();
  }

  getWarranty(uuid: string): Warranty {
    return this.warranties.find(w => w.uuid === uuid);
  }
}

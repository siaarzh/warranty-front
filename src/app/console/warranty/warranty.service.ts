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
      'https://i5.walmartimages.com/asr/9785e772-39f5-4496-83c0-3f82ea52da09_1.a95cbca292cd7a5879642e7b0b628555.jpeg',
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
    new Warranty(
      'HP OfficeJet 3830 All-in-One Printer',
      'Сделайте больше с помощью простого способа печати со своего смартфона или планшета.',
      'https://sg-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/F/5/F5R95A-1_T1550820998.png',
      '889296063285',
      '156796549849',
      'c75f4e7f-7f98-42a6-9618-4c0501ffadd7',
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
      'HP OfficeJet 3830 All-in-One Printer',
      'Сделайте больше с помощью простого способа печати со своего смартфона или планшета.',
      'https://sg-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/F/5/F5R95A-1_T1550820998.png',
      '889296063285',
      '156796549849',
      'f394f433-675e-4f55-9a33-20d6ad4c1140',
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
      'HP OfficeJet 3830 All-in-One Printer',
      'Сделайте больше с помощью простого способа печати со своего смартфона или планшета.',
      'https://sg-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/F/5/F5R95A-1_T1550820998.png',
      '889296063285',
      '156796549849',
      'c15bfb63-134f-4fae-ad47-333c0f175e0f',
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
      'HP OfficeJet 3830 All-in-One Printer',
      'Сделайте больше с помощью простого способа печати со своего смартфона или планшета.',
      'https://sg-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/F/5/F5R95A-1_T1550820998.png',
      '889296063285',
      '156796549849',
      '9834a64e-0c74-43d3-b654-be0a53d35ae9',
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
      'HP OfficeJet 3830 All-in-One Printer',
      'Сделайте больше с помощью простого способа печати со своего смартфона или планшета.',
      'https://sg-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/F/5/F5R95A-1_T1550820998.png',
      '889296063285',
      '156796549849',
      '1066c472-313a-4bf9-b609-f2dec4e73d89',
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
      'HP OfficeJet 3830 All-in-One Printer',
      'Сделайте больше с помощью простого способа печати со своего смартфона или планшета.',
      'https://sg-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/F/5/F5R95A-1_T1550820998.png',
      '889296063285',
      '156796549849',
      'cf882f45-c678-494a-95b6-ad6e7b98cb42',
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
      'HP OfficeJet 3830 All-in-One Printer',
      'Сделайте больше с помощью простого способа печати со своего смартфона или планшета.',
      'https://sg-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/F/5/F5R95A-1_T1550820998.png',
      '889296063285',
      '156796549849',
      'f340cd1a-6d8e-4bcc-b11a-5e2669201816',
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
      'HP OfficeJet 3830 All-in-One Printer',
      'Сделайте больше с помощью простого способа печати со своего смартфона или планшета.',
      'https://sg-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/F/5/F5R95A-1_T1550820998.png',
      '889296063285',
      '156796549849',
      '82a400f2-f865-4e9b-91d2-ac196b27f964',
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
      'HP OfficeJet 3830 All-in-One Printer',
      'Сделайте больше с помощью простого способа печати со своего смартфона или планшета.',
      'https://sg-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/F/5/F5R95A-1_T1550820998.png',
      '889296063285',
      '156796549849',
      'ac718ca8-f333-4a9c-b177-fb34a6a7859c',
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
      'HP OfficeJet 3830 All-in-One Printer',
      'Сделайте больше с помощью простого способа печати со своего смартфона или планшета.',
      'https://sg-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/F/5/F5R95A-1_T1550820998.png',
      '889296063285',
      '156796549849',
      'acd1afea-fc87-479c-9953-df5145ba4403',
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

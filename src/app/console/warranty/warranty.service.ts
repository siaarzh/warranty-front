import { Warranty } from './warranty.model';
import { WarrantyHistory } from './warranty-history.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WarrantyService {
  private warranties: Warranty[] = [
    new Warranty(
      'MICROSOFT Xbox One Wireless Controller - White',
      'Get gaming with the Microsoft Xbox Wireless Controller. This controller has up to twice the previous wireless range of previous controllers, so you can sit where you want. And thanks to the Bluetooth connection, you can use it with your Xbox One, PC, or any Windows tablet.\n' +
        '\n' +
        "The textured grips make it easy to use, and there's a 3.5 mm jack to connect your headset. You can even remap the button using the Xbox Accessories App on your Xbox One.",
      'https://brain-images-ssl.cdn.dixons.com/6/2/10152126/l_10152126.jpg',
      '889842084351',
      '02600877003737',
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
      'Logitech - K780 Wireless Keyboard - White',
      'Type with this multi-device Logitech wireless keyboard. The built-in rubber cradle supports devices vertically, making small screens easily viewable, and 128-bit AES encryption keeps information private. Compatible with Windows, Mac, Chrome and Android devices, this Logitech wireless keyboard uses USB and Bluetooth technology to connect to your smartphone and tablet.',
      'https://c7.uihere.com/files/104/419/784/computer-keyboard-computer-mouse-wireless-keyboard-logitech-k780-multi-device-external-sending-card-thumb.jpg',
      '097855122834',
      '1823CE0F9139',
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
      'Get more done with the easiest way to print from your smartphone or tablet.\n' +
        'In comparison to the majority of consumer/home office inkjet all-in-one printers <$399 USD as of November 2014, based on market share as reported by IDC as of Q3 2014, and typical time to set up and/or presence of preloaded plug-in. App download required for printer setup. Local printing requires mobile device and printer to be on the same network or have a direct wireless connection to the printer. Wireless performance is dependent on physical environment and distance from access point. Wireless operations are compatible with 2.4 GHz operations only. Remote printing requires an Internet connection to an HP web-connected printer. App or software and HP ePrint account registration may also be required. Wireless broadband use requires separately purchased service contract for mobile devices. Check with service provider for coverage and availability in your area. See hp.com/go/mobileprinting for more details.\n' +
        ' Simplify tasks—and save up to 50% on ink\n' +
        'Savings claim is based on HP Instant Ink Service plan price for 12 months using all pages in plan without purchase of additional pages compared with the cost per page (“CPP”) of the majority of color inkjet printers <$399 USD, market share reported by IDC Q2 2014. CPP comparisons for standard capacity inkjet supplies are based on estimated street price and page yield as reported by Gap Intelligence MFP Weekly and IJP Weekly Reports 9/20/2014. Actual savings may vary depending on number of pages actually printed per month and content of pages printed.\n' +
        '—with this affordable, easy-to-use all-in-one with fax. It fits in nearly any space and works quietly in the background.\n' +
        'Ideal for people who want an affordable, Wi-Fi-enabled, compact all-in-one with fax.',
      'https://sg-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/F/5/F5R95A-1_T1550820998.png',
      '889296063285',
      '156796549849',
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
}

import { WarrantyHistory } from './warranty-history.model';

export class Warranty {
  public productName: string;
  public description: string;
  public imagePath: string;
  public ean: string;
  public sn: string;
  public uuid: string;
  public history: WarrantyHistory[];

  constructor(
    productName: string,
    description: string,
    imagePath: string,
    ean: string,
    sn: string,
    uuid: string,
    history: WarrantyHistory[] = []
  ) {
    this.productName = productName;
    this.description = description;
    this.imagePath = imagePath;
    this.ean = ean;
    this.sn = sn;
    this.uuid = uuid;
    this.history = history;
  }
}

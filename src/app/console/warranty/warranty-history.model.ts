export class WarrantyHistory {
  public updateDate: Date;
  public status: string;
  public type: string;
  public purchaseDate: Date;
  public valid: boolean;
  public expiryDate: Date;

  constructor(
    updateDate: string,
    status: string,
    type: string,
    purchaseDate: string,
    extended: boolean,
    expiryDate: string,
  ) {
    this.updateDate = new Date(Date.parse(updateDate));
    this.status = status;
    this.type = type;
    this.purchaseDate = new Date(Date.parse(purchaseDate));
    this.valid = extended;
    this.expiryDate = new Date(Date.parse(expiryDate));
  }
}

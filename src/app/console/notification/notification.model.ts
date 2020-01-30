export class Notification {
  public messageTitle: string;
  public messageType: string;
  public messageSender: string;
  public isRead: boolean;
  public dateSent: Date;
  public messageContent: string;
  public warrantyUUID: string;

  constructor(
    messageTitle: string,
    messageType: string,
    messageSender: string,
    dateSent: string,
    messageContent: string,
    warrantyUUID: string = null,
    isRead = false,
  ) {
    this.messageTitle = messageTitle;
    this.messageType = messageType;
    this.messageSender = messageSender;
    this.dateSent = new Date(Date.parse(dateSent));
    this.messageContent = messageContent;
    this.isRead = isRead;
    this.warrantyUUID = warrantyUUID;
  }
}

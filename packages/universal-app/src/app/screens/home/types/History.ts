import { Sender, Type, ContentType } from './enums';


export interface History {
  sender: Sender;
  uuid?: number;
  isParent?: boolean;
  parentUUID?: number;
  loading?: boolean;
  contentType?: ContentType;
  content?: any;
  id?: number;
  type?: Type;
  welcome?: boolean;
  date?: Date;
  messageForNextGroup?: boolean;
  timeout?: number;
  startTimeout?: number;
  autoNext?: true;
}

import { Client } from '../models';

export type ITransferType = 'download' | 'upload';

export type ITransferStatus = 'pending' | 'transfering' | 'finished';

export interface ITransferOptions {
  quiet?: boolean;
}

export interface IDownloadOptions extends ITransferOptions {
  startAt?: number;
}

export interface IProgress {
  chunkSize?: number;
  buffered?: number;
  size?: number;
  localPath?: string;
  remotePath?: string;
  eta?: number;
  speed?: number;
  percent?: number;
  startAt?: Date;
  context?: Client;
}

export interface ITransferItem {
  id?: string;
  type?: ITransferType;
  status?: ITransferStatus;
  data?: any;
  info?: IProgress;
}

export interface WeightedSocket  {
  socket: Socket;
  weight: number
}

export class Socket {
  get via_transport(): string;
  set via_transport(value: string);

  get url(): string;

  get sip_uri(): string;

  connect(): void;

  disconnect(): void;

  send(message: string | ArrayBufferLike | Blob | ArrayBufferView): boolean;

  isConnected(): boolean;

  isConnecting(): boolean;

  onconnect(): void;

  ondisconnect(withError: boolean, code?: number, reason?: string): void;

  ondata<T>(event: T): void;
}

export class WebSocketInterface extends Socket {
  constructor(url: string)
}

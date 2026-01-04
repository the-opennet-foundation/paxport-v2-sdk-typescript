// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ChatAPI from './chat';
import { Chat } from './chat';
import * as TicketAPI from './ticket';
import { Ticket, TicketListParams } from './ticket';

export class Support extends APIResource {
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
  ticket: TicketAPI.Ticket = new TicketAPI.Ticket(this._client);
}

Support.Chat = Chat;
Support.Ticket = Ticket;

export declare namespace Support {
  export { Chat as Chat };

  export { Ticket as Ticket, type TicketListParams as TicketListParams };
}

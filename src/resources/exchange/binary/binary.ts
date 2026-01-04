// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OrderAPI from './order';
import { Order, OrderListParams } from './order';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Binary extends APIResource {
  order: OrderAPI.Order = new OrderAPI.Order(this._client);

  /**
   * Retrieves a list of available durations for binary options.
   */
  listDurations(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/exchange/binary/duration', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a list of all available binary trading markets.
   */
  listMarkets(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/exchange/binary/market', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Binary.Order = Order;

export declare namespace Binary {
  export { Order as Order, type OrderListParams as OrderListParams };
}

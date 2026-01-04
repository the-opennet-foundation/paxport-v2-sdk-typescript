// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Order extends APIResource {
  /**
   * Submits a new futures trading order for the logged-in user.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/futures/order', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a list of futures orders for the authenticated user.
   */
  list(query: OrderListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/futures/order', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OrderListParams {
  /**
   * Currency of the orders to retrieve.
   */
  currency?: string;

  /**
   * Pair of the orders to retrieve.
   */
  pair?: string;

  /**
   * Type of order to retrieve.
   */
  type?: string;
}

export declare namespace Order {
  export { type OrderListParams as OrderListParams };
}

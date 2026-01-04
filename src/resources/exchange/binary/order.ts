// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Order extends APIResource {
  /**
   * Creates a new binary order for the authenticated user.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/exchange/binary/order', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a specific binary order by ID for the authenticated user.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/exchange/binary/order/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a list of orders for the authenticated user.
   */
  list(query: OrderListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/exchange/binary/order', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves the non-pending binary orders for practice and non-practice accounts
   * from the last 30 days and compares them with the previous month.
   */
  listLast30Days(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/exchange/binary/order/last', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OrderListParams {
  /**
   * currency of the order to retrieve.
   */
  currency?: string;

  /**
   * pair of the order to retrieve.
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

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Order extends APIResource {
  /**
   * Processes a new order for the logged-in user, checking inventory, wallet
   * balance, and applying any available discounts.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/ecommerce/order', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches a single order by its ID, including details of the products in the
   * order.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/ecommerce/order/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists all ecommerce orders with pagination and optional filtering
   */
  list(query: OrderListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ecommerce/order', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches an order containing the given productId for the authenticated user, to
   * verify purchase.
   */
  checkProductPurchase(productID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/ecommerce/order/product/${productID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves tracking information for a specific order including shipping status
   * and timeline.
   */
  track(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/ecommerce/order/${id}/track`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface OrderListParams {
  /**
   * Filter criteria for records.
   */
  filter?: string;

  /**
   * Page number. Default: 1.
   */
  page?: number;

  /**
   * Number of records per page. Default: 10.
   */
  perPage?: number;

  /**
   * Show deleted records. Default: false.
   */
  showDeleted?: boolean;

  /**
   * Field name to sort by.
   */
  sortField?: string;

  /**
   * Order of sorting: asc or desc.
   */
  sortOrder?: 'asc' | 'desc';
}

export declare namespace Order {
  export { type OrderListParams as OrderListParams };
}

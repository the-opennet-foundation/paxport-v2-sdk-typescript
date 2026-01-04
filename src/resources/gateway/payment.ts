// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Payment extends APIResource {
  /**
   * Gets detailed payment information for merchants.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/gateway/payment/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists all payments for the current merchant.
   */
  list(query: PaymentListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/gateway/payment', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Creates a refund for a completed payment. Merchants can issue full or partial
   * refunds.
   */
  createRefund(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/gateway/payment/${id}/refund`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PaymentListParams {
  /**
   * Filter by mode (LIVE or TEST)
   */
  mode?: 'LIVE' | 'TEST';

  page?: number;

  perPage?: number;

  sortField?: string;

  sortOrder?: string;

  /**
   * Filter by status
   */
  status?: string;
}

export declare namespace Payment {
  export { type PaymentListParams as PaymentListParams };
}

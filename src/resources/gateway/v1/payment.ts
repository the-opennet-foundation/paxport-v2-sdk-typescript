// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Payment extends APIResource {
  /**
   * Retrieves the details of an existing payment by its ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/gateway/v1/payment/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Cancels a pending payment. Only payments with status PENDING can be cancelled.
   */
  cancel(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/gateway/v1/payment/${id}/cancel`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Creates a new payment session that customers can use to complete a payment.
   * Returns a checkout URL to redirect customers to.
   */
  createSession(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/gateway/v1/payment/create', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

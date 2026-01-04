// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PaymentMethod extends APIResource {
  /**
   * Creates a new custom payment method for the authenticated user.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/p2p/payment-method', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates an existing custom payment method by its ID.
   */
  update(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/p2p/payment-method/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a list of available payment methods using the payment methods model.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/p2p/payment-method', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

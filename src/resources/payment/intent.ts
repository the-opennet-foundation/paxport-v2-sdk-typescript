// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Intent extends APIResource {
  /**
   * Creates a payment intent
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/payment/intent', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve details of a specific payment intent.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/payment/intent/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Checks the status of a payment intent
   */
  checkStatus(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/payment/intent/status', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Confirms a payment intent
   */
  confirm(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/payment/intent/confirm', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

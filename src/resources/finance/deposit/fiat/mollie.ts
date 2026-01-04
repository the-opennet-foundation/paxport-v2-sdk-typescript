// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Mollie extends APIResource {
  /**
   * Initiates a payment with Mollie and returns checkout URL
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/mollie', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves current payment status from Mollie API and updates local records
   */
  retrieveStatus(query: MollieRetrieveStatusParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/deposit/fiat/mollie/status', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Handles return URL from Mollie and verifies payment completion
   */
  verify(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/mollie/verify', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Processes payment status updates from Mollie backend notifications
   */
  webhook(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/mollie/webhook', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MollieRetrieveStatusParams {
  /**
   * Transaction UUID
   */
  transactionId: string;
}

export declare namespace Mollie {
  export { type MollieRetrieveStatusParams as MollieRetrieveStatusParams };
}

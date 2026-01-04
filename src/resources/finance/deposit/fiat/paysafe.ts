// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Paysafe extends APIResource {
  /**
   * Initiates a payment with Paysafe using Payment Handles API and returns checkout
   * URL for various payment methods
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/paysafe', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Queries current payment status from Paysafe and updates local transaction record
   */
  retrieveStatus(query: PaysafeRetrieveStatusParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/deposit/fiat/paysafe/status', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Handles return URL verification after payment completion and updates transaction
   * status
   */
  verify(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/paysafe/verify', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Processes real-time payment status updates from Paysafe via webhooks
   */
  webhook(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/paysafe/webhook', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PaysafeRetrieveStatusParams {
  /**
   * Transaction reference number
   */
  reference: string;

  /**
   * Paysafe payment ID (optional)
   */
  payment_id?: string;
}

export declare namespace Paysafe {
  export { type PaysafeRetrieveStatusParams as PaysafeRetrieveStatusParams };
}

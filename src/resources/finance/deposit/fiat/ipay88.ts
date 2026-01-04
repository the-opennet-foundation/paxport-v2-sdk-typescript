// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Ipay88 extends APIResource {
  /**
   * Initiates an iPay88 payment process for Southeast Asian markets. Supports
   * multiple payment methods including credit cards, e-wallets, and online banking
   * across Malaysia, Singapore, Thailand, Philippines, Indonesia, and Vietnam.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/ipay88', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Queries iPay88 for the current status of a payment transaction using the
   * reference number. This endpoint can be used to check payment status when webhook
   * notifications are not received.
   */
  retrieveStatus(query: Ipay88RetrieveStatusParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/deposit/fiat/ipay88/status', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Handles iPay88 payment verification from return URL. This endpoint processes the
   * payment response from iPay88 and updates the transaction status accordingly.
   */
  verify(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/ipay88/verify', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Processes iPay88 backend notifications for payment events. This endpoint handles
   * automatic payment status updates, wallet balance updates, and transaction
   * processing based on iPay88's notification system.
   */
  webhook(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/ipay88/webhook', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Ipay88RetrieveStatusParams {
  /**
   * Transaction amount
   */
  amount: number;

  /**
   * Transaction currency
   */
  currency: string;

  /**
   * Transaction reference number
   */
  reference: string;
}

export declare namespace Ipay88 {
  export { type Ipay88RetrieveStatusParams as Ipay88RetrieveStatusParams };
}

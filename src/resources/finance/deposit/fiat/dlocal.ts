// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Dlocal extends APIResource {
  /**
   * Initiates a dLocal payment process for emerging markets. Supports multiple
   * payment methods including cards, bank transfers, cash payments, and digital
   * wallets across 60+ countries.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/dlocal', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve current payment status from dLocal API without updating local database
   */
  retrieveStatus(
    query: DlocalRetrieveStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/finance/deposit/fiat/dlocal/status', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Manually verify a dLocal payment status and update transaction accordingly
   */
  verify(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/dlocal/verify', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Handles payment notifications from dLocal with HMAC signature verification
   */
  webhook(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/dlocal/webhook', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DlocalRetrieveStatusParams {
  /**
   * Internal order ID to check
   */
  order_id?: string;

  /**
   * dLocal payment ID to check
   */
  payment_id?: string;
}

export declare namespace Dlocal {
  export { type DlocalRetrieveStatusParams as DlocalRetrieveStatusParams };
}

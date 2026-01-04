// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Authorizenet extends APIResource {
  /**
   * Creates an Authorize.Net Accept Hosted payment page for secure deposit
   * processing. Returns a payment token for hosted payment form integration.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/authorizenet', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves the current status of an Authorize.Net transaction by its reference
   * ID.
   */
  retrieveStatus(query: AuthorizenetRetrieveStatusParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/deposit/fiat/authorizenet/status', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Confirms the validity of an Authorize.Net transaction by its reference ID,
   * ensuring the transaction is authenticated and processing the deposit.
   */
  verify(params: AuthorizenetVerifyParams, options?: RequestOptions): APIPromise<void> {
    const { referenceId } = params;
    return this._client.post('/api/finance/deposit/fiat/authorizenet/verify', {
      query: { referenceId },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Processes Authorize.Net webhook notifications for payment events including
   * authorizations, captures, refunds, and cancellations.
   */
  webhook(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat/authorizenet/webhook', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AuthorizenetRetrieveStatusParams {
  /**
   * The transaction reference ID
   */
  referenceId: string;
}

export interface AuthorizenetVerifyParams {
  /**
   * The transaction reference ID
   */
  referenceId: string;
}

export declare namespace Authorizenet {
  export {
    type AuthorizenetRetrieveStatusParams as AuthorizenetRetrieveStatusParams,
    type AuthorizenetVerifyParams as AuthorizenetVerifyParams,
  };
}

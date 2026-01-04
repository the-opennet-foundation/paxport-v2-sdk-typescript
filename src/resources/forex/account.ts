// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Account extends APIResource {
  /**
   * Fetches a specific Forex account by its ID for the currently authenticated user.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/forex/account/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches all Forex accounts associated with the currently authenticated user.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/forex/account', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Allows a user to deposit money from their wallet into a Forex account.
   */
  deposit(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/forex/account/${id}/deposit`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all signals associated with a specific forex account
   */
  getSignals(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/forex/account/${id}/signal`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Allows a user to withdraw money from their Forex account into their wallet.
   */
  withdraw(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/forex/account/${id}/withdraw`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

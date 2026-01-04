// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Wallet extends APIResource {
  /**
   * Registers a wallet address for the authenticated user
   */
  connect(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/user/profile/wallet/connect', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Disconnects a wallet address for the authenticated user and removes the record
   * from providerUser
   */
  disconnect(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/user/profile/wallet/disconnect', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

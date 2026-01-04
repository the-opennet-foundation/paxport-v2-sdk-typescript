// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Level extends APIResource {
  /**
   * Fetches an active KYC (Know Your Customer) level by its ID. This endpoint
   * requires authentication.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/user/kyc/level/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches all currently active KYC (Know Your Customer) levels that are used for
   * KYC processes. This endpoint is accessible without authentication and returns an
   * array of levels that are marked as active in the system.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/user/kyc/level', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

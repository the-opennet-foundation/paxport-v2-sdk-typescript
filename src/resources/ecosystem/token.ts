// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Token extends APIResource {
  /**
   * Fetches details of a specific token in the ecosystem.
   */
  retrieve(currency: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/ecosystem/token/${currency}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches a list of all active tokens available in the ecosystem.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ecosystem/token', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

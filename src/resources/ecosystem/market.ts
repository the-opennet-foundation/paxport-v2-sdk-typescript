// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Market extends APIResource {
  /**
   * Fetches details of a specific market in the ecosystem.
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/ecosystem/market/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches a list of all active markets available in the ecosystem.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ecosystem/market', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

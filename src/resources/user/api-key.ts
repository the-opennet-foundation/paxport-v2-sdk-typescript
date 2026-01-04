// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class APIKey extends APIResource {
  /**
   * Generates a new API key for the authenticated user.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/user/api-key', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates an API key's details such as permissions, IP whitelist, or IP
   * restriction.
   */
  update(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/user/api-key/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all API keys associated with the authenticated user.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/user/api-key', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

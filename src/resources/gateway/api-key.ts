// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class APIKey extends APIResource {
  /**
   * Creates a new API key pair (public + secret) for the merchant.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/gateway/api-key', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates an API key's settings (URLs, status, etc.).
   */
  update(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/gateway/api-key/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists all API keys for the current merchant.
   */
  list(query: APIKeyListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/gateway/api-key', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Rotates an API key, generating a new key value.
   */
  rotate(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/gateway/api-key/${id}/rotate`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface APIKeyListParams {
  /**
   * Filter by mode (LIVE or TEST)
   */
  mode?: 'LIVE' | 'TEST';
}

export declare namespace APIKey {
  export { type APIKeyListParams as APIKeyListParams };
}

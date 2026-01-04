// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Log extends APIResource {
  /**
   * Creates a new AI trading investment for the currently authenticated user based
   * on the provided details.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/ai/ai/investment/log', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches a specific AI trading investment by ID for the currently authenticated
   * user.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/ai/ai/investment/log/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches all AI trading investments for the currently authenticated user,
   * excluding active investments.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ai/ai/investment/log', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

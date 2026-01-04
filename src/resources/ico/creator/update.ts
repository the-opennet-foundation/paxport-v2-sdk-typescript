// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Update extends APIResource {
  /**
   * Creates a new update for a token offering by the authenticated creator.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/ico/creator/update', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Edits an existing update for a token offering by the authenticated creator.
   */
  update(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/ico/creator/update/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches updates for a specific token offering.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ico/creator/update', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Page extends APIResource {
  /**
   * Fetches detailed information about a specific page based on its unique
   * identifier.
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/content/page/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches a comprehensive list of all pages available on the platform.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/content/page', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

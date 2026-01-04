// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Plan extends APIResource {
  /**
   * Fetches detailed information about a specific investment plan based on its
   * unique identifier.
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/finance/investment/plan/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a list of all available investment plans that are currently active and
   * open for new investments.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/investment/plan', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

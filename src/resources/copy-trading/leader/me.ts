// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Me extends APIResource {
  /**
   * Retrieves the current user's leader profile if they are a leader.
   */
  getProfile(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/copy-trading/leader/me', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates the current user's leader profile settings.
   */
  updateProfile(options?: RequestOptions): APIPromise<void> {
    return this._client.put('/api/copy-trading/leader/me', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

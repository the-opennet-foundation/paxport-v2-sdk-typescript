// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Launch extends APIResource {
  /**
   * Creates a new ICO offering along with token details, team members, and roadmap
   * items. Also verifies user wallet balance and deducts the launch fee based on the
   * selected launch plan.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/ico/creator/launch', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all launch plans for ICO admin.
   */
  retrievePlan(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ico/creator/launch/plan', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

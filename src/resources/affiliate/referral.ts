// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Referral extends APIResource {
  /**
   * Gets chart data for analytics
   */
  getAnalysisData(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/affiliate/referral/analysis', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get details for a single referral
   */
  getDetails(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/affiliate/referral/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves information about a specific MLM node using its UUID.
   */
  getNodeDetails(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/affiliate/referral/node', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List referrals for authenticated affiliate
   */
  listReferrals(
    query: ReferralListReferralsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/affiliate/referral', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ReferralListReferralsParams {
  page?: number;

  perPage?: number;
}

export declare namespace Referral {
  export { type ReferralListReferralsParams as ReferralListReferralsParams };
}

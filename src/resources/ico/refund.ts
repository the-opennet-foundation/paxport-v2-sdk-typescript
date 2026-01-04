// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Refund extends APIResource {
  /**
   * Checks if an ICO offering is eligible for refunds and returns refund details
   */
  retrieve(offeringID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/ico/refund/eligibility/${offeringID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Processes refunds for all investors of a failed ICO offering. Only the offering
   * owner or admin can initiate refunds.
   */
  process(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/ico/refund/process', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

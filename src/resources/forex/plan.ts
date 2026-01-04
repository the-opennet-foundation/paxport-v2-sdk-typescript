// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Plan extends APIResource {
  /**
   * Fetches details of a specific Forex investment plan for the logged-in user along
   * with available durations, plus the total number of distinct investors and the
   * total invested amount.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/forex/plan/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a list of forex investment plans filtered and sorted based on query
   * parameters. Parameters include activeTab, search, minProfit, maxInvestment, and
   * sortBy.
   */
  list(query: PlanListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/forex/plan', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all available durations for a specific forex investment plan
   */
  getDurations(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/forex/plan/${id}/duration`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PlanListParams {
  /**
   * If set to "trending", only trending plans are returned.
   */
  activeTab?: 'all' | 'trending';

  /**
   * Maximum investment allowed. Plans with "maxAmount" (defaulting to 100000 if
   * missing) must be less than or equal to this value.
   */
  maxInvestment?: number;

  /**
   * Minimum profit value (number) that a plan must have.
   */
  minProfit?: number;

  /**
   * Search term to filter plans by title or description.
   */
  search?: string;

  /**
   * Sort the plans by "popularity" (invested descending), "profit" (profitPercentage
   * descending) or "minInvestment" (minAmount ascending).
   */
  sortBy?: 'popularity' | 'profit' | 'minInvestment';
}

export declare namespace Plan {
  export { type PlanListParams as PlanListParams };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PlanAPI from './plan';
import { Plan } from './plan';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Investment extends APIResource {
  plan: PlanAPI.Plan = new PlanAPI.Plan(this._client);

  /**
   * Initiates a new investment based on the specified plan and amount. This process
   * involves updating the user's wallet balance and creating transaction records.
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/investment', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches detailed information about a specific investment identified by its UUID,
   * including associated plan and user details.
   */
  retrieve(
    id: string,
    query: InvestmentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/api/finance/investment/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches a comprehensive list of all investments made by users, including details
   * of the investment plan and user information.
   */
  list(query: InvestmentListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/investment', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves platform-wide investment stats: number of active investors, total
   * invested amount, average return (completed investments), and number of
   * investment plans.
   */
  getStats(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/investment/stats', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches all active investments associated with the currently authenticated user,
   * including details about the investment plan and user information.
   */
  getUserInvestments(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/investment/user', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InvestmentRetrieveParams {
  /**
   * The type of investment to retrieve
   */
  type?: string;
}

export interface InvestmentListParams {
  /**
   * Filter criteria for records.
   */
  filter?: string;

  /**
   * Page number. Default: 1.
   */
  page?: number;

  /**
   * Number of records per page. Default: 10.
   */
  perPage?: number;

  /**
   * Show deleted records. Default: false.
   */
  showDeleted?: boolean;

  /**
   * Field name to sort by.
   */
  sortField?: string;

  /**
   * Order of sorting: asc or desc.
   */
  sortOrder?: 'asc' | 'desc';

  /**
   * The type of investment to retrieve
   */
  type?: string;
}

Investment.Plan = Plan;

export declare namespace Investment {
  export {
    type InvestmentRetrieveParams as InvestmentRetrieveParams,
    type InvestmentListParams as InvestmentListParams,
  };

  export { Plan as Plan };
}

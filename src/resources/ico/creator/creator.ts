// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LaunchAPI from './launch';
import { Launch } from './launch';
import * as UpdateAPI from './update';
import { Update } from './update';
import * as TokenAPI from './token/token';
import { Token } from './token/token';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Creator extends APIResource {
  launch: LaunchAPI.Launch = new LaunchAPI.Launch(this._client);
  token: TokenAPI.Token = new TokenAPI.Token(this._client);
  update: UpdateAPI.Update = new UpdateAPI.Update(this._client);

  /**
   * Retrieves aggregated investor details (including total amount invested, total
   * tokens purchased, latest transaction date, rejected investment amount, and token
   * info from the ICO offering) for ICO offerings created by the authenticated
   * creator. Supports pagination, sorting, and searching. (Aggregation is done by
   * computing valid transactions (PENDING/RELEASED) and rejected transactions
   * separately.)
   */
  retrieveInvestor(
    query: CreatorRetrieveInvestorParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/ico/creator/investor', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves chart data (daily, weekly, or monthly performance) for the
   * authenticated creator's ICO offerings based on a specified time range.
   */
  retrievePerformance(query: CreatorRetrievePerformanceParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ico/creator/performance', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves aggregated statistics (counts, growth metrics) for the authenticated
   * creator's ICO offerings, and calculates total raised and raise growth from all
   * transactions except those with a 'REJECTED' status.
   */
  retrieveStat(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ico/creator/stat', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CreatorRetrieveInvestorParams {
  /**
   * Number of items per page
   */
  limit?: number;

  /**
   * Page number
   */
  page?: number;

  /**
   * Search query to filter by investor first or last name
   */
  search?: string;

  /**
   * Sort direction: asc or desc (default: desc)
   */
  sortDirection?: string;

  /**
   * Field to sort by. For associated fields use dot notation (e.g.
   * 'user.firstName'). Defaults to 'lastTransactionDate'.
   */
  sortField?: string;
}

export interface CreatorRetrievePerformanceParams {
  /**
   * Time range for chart data: '7d' for current week (Monday–Sunday), '30d' for
   * current month (daily), '90d' for 3 full months (from start of two months before
   * current month till end of current month), or 'all' for all time (monthly,
   * extended to at least 12 months).
   */
  range: string;
}

Creator.Launch = Launch;
Creator.Token = Token;
Creator.Update = Update;

export declare namespace Creator {
  export {
    type CreatorRetrieveInvestorParams as CreatorRetrieveInvestorParams,
    type CreatorRetrievePerformanceParams as CreatorRetrievePerformanceParams,
  };

  export { Launch as Launch };

  export { Token as Token };

  export { Update as Update };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountAPI from './account';
import { Account } from './account';
import * as InvestmentAPI from './investment';
import { Investment, InvestmentListParams } from './investment';
import * as PlanAPI from './plan';
import { Plan, PlanListParams } from './plan';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Forex extends APIResource {
  account: AccountAPI.Account = new AccountAPI.Account(this._client);
  investment: InvestmentAPI.Investment = new InvestmentAPI.Investment(this._client);
  plan: PlanAPI.Plan = new PlanAPI.Plan(this._client);

  /**
   * Retrieves a list of all available Forex investment durations, ordered by
   * timeframe (HOUR, DAY, WEEK, MONTH) then duration ascending.
   */
  getDurations(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/forex/duration', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves optimized data for the forex landing page including stats, featured
   * plans, performance history, and recent completions.
   */
  getLandingData(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/forex/landing', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves user-specific dashboard data including overview statistics, chart
   * data, plan distribution, and recent investments.
   */
  getOverview(
    query: ForexGetOverviewParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/forex/overview', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves platform-wide forex stats: number of active investors, total invested
   * amount, average return (completed investments), and number of countries served.
   */
  getStats(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/forex/stats', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all forex signals available to the current user with pagination
   */
  getUserSignals(
    query: ForexGetUserSignalsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/forex/signal', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Lists transactions with optional filters
   */
  listTransactions(
    query: ForexListTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/forex/transaction', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ForexGetOverviewParams {
  /**
   * Timeframe for chart data: 1m, 3m, or 1y
   */
  timeframe?: '1m' | '3m' | '1y';
}

export interface ForexGetUserSignalsParams {
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
}

export interface ForexListTransactionsParams {
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
}

Forex.Account = Account;
Forex.Investment = Investment;
Forex.Plan = Plan;

export declare namespace Forex {
  export {
    type ForexGetOverviewParams as ForexGetOverviewParams,
    type ForexGetUserSignalsParams as ForexGetUserSignalsParams,
    type ForexListTransactionsParams as ForexListTransactionsParams,
  };

  export { Account as Account };

  export { Investment as Investment, type InvestmentListParams as InvestmentListParams };

  export { Plan as Plan, type PlanListParams as PlanListParams };
}

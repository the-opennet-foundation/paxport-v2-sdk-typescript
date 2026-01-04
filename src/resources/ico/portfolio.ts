// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Portfolio extends APIResource {
  /**
   * Retrieves a summary of the user's ICO portfolio including total invested,
   * pending investment, pending verification investment, received investment,
   * rejected investment, current portfolio value, total profit/loss, and ROI.
   * Pending investments indicate funds invested for tokens not yet received, and
   * rejected investments indicate funds that were refunded.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ico/portfolio', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Generates historical performance data and calculates metrics for the user's ICO
   * portfolio based on real transactions and token offering data. The timeframe
   * (e.g. '1W', '1M', '3M', '1Y', 'ALL') specifies the period to compute over.
   * Additionally, a metric for rejected investments is provided.
   */
  retrievePerformance(
    query: PortfolioRetrievePerformanceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/ico/portfolio/performance', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PortfolioRetrievePerformanceParams {
  /**
   * Timeframe for performance data (e.g. '1W', '1M', '3M', '1Y', 'ALL').
   */
  timeframe?: string;
}

export declare namespace Portfolio {
  export { type PortfolioRetrievePerformanceParams as PortfolioRetrievePerformanceParams };
}

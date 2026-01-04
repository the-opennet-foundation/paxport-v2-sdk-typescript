// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MarketAPI from './market';
import { Market } from './market';
import * as OrderAPI from './order';
import { Order, OrderListParams } from './order';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Futures extends APIResource {
  market: MarketAPI.Market = new MarketAPI.Market(this._client);
  order: OrderAPI.Order = new OrderAPI.Order(this._client);

  /**
   * Retrieves a list of futures positions for the authenticated user.
   */
  listPositions(
    query: FutureListPositionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/api/futures/position', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves ticker information for all available market pairs.
   */
  listTickers(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/futures/ticker', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches historical price data based on the specified interval and date range.
   */
  retrieveChart(query: FutureRetrieveChartParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/futures/chart', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FutureListPositionsParams {
  /**
   * Currency of the positions to retrieve.
   */
  currency?: string;

  /**
   * Pair of the positions to retrieve.
   */
  pair?: string;

  /**
   * Type of positions to retrieve.
   */
  type?: string;
}

export interface FutureRetrieveChartParams {
  /**
   * Start timestamp for historical data
   */
  from: number;

  /**
   * Time interval for the data, e.g., 1m, 5m, 1h
   */
  interval: string;

  /**
   * Trading symbol, e.g., BTC/USD
   */
  symbol: string;

  /**
   * End timestamp for historical data
   */
  to: number;
}

Futures.Market = Market;
Futures.Order = Order;

export declare namespace Futures {
  export {
    type FutureListPositionsParams as FutureListPositionsParams,
    type FutureRetrieveChartParams as FutureRetrieveChartParams,
  };

  export { Market as Market };

  export { Order as Order, type OrderListParams as OrderListParams };
}

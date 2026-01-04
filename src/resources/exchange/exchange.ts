// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CurrencyAPI from './currency';
import { Currency } from './currency';
import * as MarketAPI from './market';
import { Market, MarketListParams } from './market';
import * as OrderAPI from './order';
import { Order, OrderListParams } from './order';
import * as TickerAPI from './ticker';
import { Ticker, TickerRetrieveParams } from './ticker';
import * as WatchlistAPI from './watchlist';
import { Watchlist } from './watchlist';
import * as BinaryAPI from './binary/binary';
import { Binary } from './binary/binary';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Exchange extends APIResource {
  binary: BinaryAPI.Binary = new BinaryAPI.Binary(this._client);
  currency: CurrencyAPI.Currency = new CurrencyAPI.Currency(this._client);
  market: MarketAPI.Market = new MarketAPI.Market(this._client);
  order: OrderAPI.Order = new OrderAPI.Order(this._client);
  ticker: TickerAPI.Ticker = new TickerAPI.Ticker(this._client);
  watchlist: WatchlistAPI.Watchlist = new WatchlistAPI.Watchlist(this._client);

  /**
   * Retrieves historical chart data for the authenticated user.
   */
  getHistoricalChart(query: ExchangeGetHistoricalChartParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/exchange/chart', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves the order book for a specific market pair.
   */
  getOrderbook(pair: string, params: ExchangeGetOrderbookParams, options?: RequestOptions): APIPromise<void> {
    const { currency, ...query } = params;
    return this._client.get(path`/api/exchange/orderbook/${currency}/${pair}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ExchangeGetHistoricalChartParams {
  /**
   * Duration to retrieve data for.
   */
  duration: number;

  /**
   * Start timestamp to retrieve data from.
   */
  from: number;

  /**
   * Interval to retrieve data for.
   */
  interval: string;

  /**
   * Symbol to retrieve data for.
   */
  symbol: string;

  /**
   * End timestamp to retrieve data from.
   */
  to: number;
}

export interface ExchangeGetOrderbookParams {
  /**
   * Path param: Currency symbol
   */
  currency: string;

  /**
   * Query param: Limit the number of order book entries
   */
  limit?: number;
}

Exchange.Binary = Binary;
Exchange.Currency = Currency;
Exchange.Market = Market;
Exchange.Order = Order;
Exchange.Ticker = Ticker;
Exchange.Watchlist = Watchlist;

export declare namespace Exchange {
  export {
    type ExchangeGetHistoricalChartParams as ExchangeGetHistoricalChartParams,
    type ExchangeGetOrderbookParams as ExchangeGetOrderbookParams,
  };

  export { Binary as Binary };

  export { Currency as Currency };

  export { Market as Market, type MarketListParams as MarketListParams };

  export { Order as Order, type OrderListParams as OrderListParams };

  export { Ticker as Ticker, type TickerRetrieveParams as TickerRetrieveParams };

  export { Watchlist as Watchlist };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DepositAPI from './deposit';
import { Deposit, DepositUnlockParams } from './deposit';
import * as MarketAPI from './market';
import { Market } from './market';
import * as OrderAPI from './order';
import { Order, OrderListParams } from './order';
import * as TokenAPI from './token';
import { Token } from './token';
import * as WalletAPI from './wallet';
import { Wallet, WalletListParams, WalletRetrieveParams } from './wallet';
import * as WithdrawAPI from './withdraw';
import { Withdraw, WithdrawMaxAmountParams } from './withdraw';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Ecosystem extends APIResource {
  deposit: DepositAPI.Deposit = new DepositAPI.Deposit(this._client);
  market: MarketAPI.Market = new MarketAPI.Market(this._client);
  order: OrderAPI.Order = new OrderAPI.Order(this._client);
  token: TokenAPI.Token = new TokenAPI.Token(this._client);
  wallet: WalletAPI.Wallet = new WalletAPI.Wallet(this._client);
  withdraw: WithdrawAPI.Withdraw = new WithdrawAPI.Withdraw(this._client);

  /**
   * Fetches historical price data based on the specified interval and date range.
   */
  getChart(query: EcosystemGetChartParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ecosystem/chart', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EcosystemGetChartParams {
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

Ecosystem.Deposit = Deposit;
Ecosystem.Market = Market;
Ecosystem.Order = Order;
Ecosystem.Token = Token;
Ecosystem.Wallet = Wallet;
Ecosystem.Withdraw = Withdraw;

export declare namespace Ecosystem {
  export { type EcosystemGetChartParams as EcosystemGetChartParams };

  export { Deposit as Deposit, type DepositUnlockParams as DepositUnlockParams };

  export { Market as Market };

  export { Order as Order, type OrderListParams as OrderListParams };

  export { Token as Token };

  export {
    Wallet as Wallet,
    type WalletRetrieveParams as WalletRetrieveParams,
    type WalletListParams as WalletListParams,
  };

  export { Withdraw as Withdraw, type WithdrawMaxAmountParams as WithdrawMaxAmountParams };
}

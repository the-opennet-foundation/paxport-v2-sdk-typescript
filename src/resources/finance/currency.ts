// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Currency extends APIResource {
  /**
   * This endpoint retrieves a single currency by its ID.
   */
  retrieve(code: string, params: CurrencyRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { type, ...query } = params;
    return this._client.get(path`/api/finance/currency/${type}/${code}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint retrieves all available currencies along with their current rates.
   */
  list(query: CurrencyListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/currency', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the exchange rate between two currencies given their wallet types.
   */
  getExchangeRate(query: CurrencyGetExchangeRateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/currency/rate', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the price in USD for a given currency and wallet type.
   */
  getPrice(query: CurrencyGetPriceParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/currency/price', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint retrieves all available currencies along with their current rates.
   */
  listValid(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/currency/valid', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CurrencyRetrieveParams {
  /**
   * Path param:
   */
  type: 'FIAT' | 'SPOT' | 'ECO' | 'FUTURES';

  /**
   * Query param: The action to perform
   */
  action?: string;
}

export interface CurrencyListParams {
  /**
   * The type of wallet to retrieve currencies for
   */
  walletType: 'FIAT' | 'SPOT' | 'ECO' | 'FUTURES';

  /**
   * The action to perform
   */
  action?: string;

  /**
   * The type of wallet to transfer to (optional for transfer action)
   */
  targetWalletType?: 'FIAT' | 'SPOT' | 'ECO' | 'FUTURES';
}

export interface CurrencyGetExchangeRateParams {
  /**
   * The currency to convert from
   */
  fromCurrency: string;

  /**
   * The wallet type of the currency to convert from
   */
  fromType: string;

  /**
   * The currency to convert to
   */
  toCurrency: string;

  /**
   * The wallet type of the currency to convert to
   */
  toType: string;
}

export interface CurrencyGetPriceParams {
  /**
   * The currency to get the price for
   */
  currency: string;

  /**
   * The wallet type of the currency
   */
  type: string;
}

export declare namespace Currency {
  export {
    type CurrencyRetrieveParams as CurrencyRetrieveParams,
    type CurrencyListParams as CurrencyListParams,
    type CurrencyGetExchangeRateParams as CurrencyGetExchangeRateParams,
    type CurrencyGetPriceParams as CurrencyGetPriceParams,
  };
}

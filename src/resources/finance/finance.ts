// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CurrencyAPI from './currency';
import {
  Currency,
  CurrencyGetExchangeRateParams,
  CurrencyGetPriceParams,
  CurrencyListParams,
  CurrencyRetrieveParams,
} from './currency';
import * as TransactionAPI from './transaction';
import { Transaction, TransactionListParams } from './transaction';
import * as TransferAPI from './transfer';
import { Transfer, TransferValidateRecipientParams } from './transfer';
import * as WalletAPI from './wallet';
import { Wallet, WalletListParams, WalletRetrieveBySymbolParams, WalletRetrieveParams } from './wallet';
import * as WithdrawAPI from './withdraw';
import { Withdraw } from './withdraw';
import * as DepositAPI from './deposit/deposit';
import { Deposit } from './deposit/deposit';
import * as InvestmentAPI from './investment/investment';
import { Investment, InvestmentListParams, InvestmentRetrieveParams } from './investment/investment';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Finance extends APIResource {
  currency: CurrencyAPI.Currency = new CurrencyAPI.Currency(this._client);
  deposit: DepositAPI.Deposit = new DepositAPI.Deposit(this._client);
  investment: InvestmentAPI.Investment = new InvestmentAPI.Investment(this._client);
  transaction: TransactionAPI.Transaction = new TransactionAPI.Transaction(this._client);
  transfer: TransferAPI.Transfer = new TransferAPI.Transfer(this._client);
  wallet: WalletAPI.Wallet = new WalletAPI.Wallet(this._client);
  withdraw: WithdrawAPI.Withdraw = new WithdrawAPI.Withdraw(this._client);

  /**
   * Calculates the exchange rate between two currencies across different wallet
   * types (FIAT, SPOT, ECO, FUTURES)
   */
  getExchangeRate(query: FinanceGetExchangeRateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/finance/exchange-rate', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FinanceGetExchangeRateParams {
  /**
   * Source currency code (e.g., EUR, USD, BTC)
   */
  fromCurrency: string;

  /**
   * Source wallet type (FIAT, SPOT, ECO, FUTURES)
   */
  fromType: 'FIAT' | 'SPOT' | 'ECO' | 'FUTURES';

  /**
   * Target currency code (e.g., EUR, USD, BTC)
   */
  toCurrency: string;

  /**
   * Target wallet type (FIAT, SPOT, ECO, FUTURES)
   */
  toType: 'FIAT' | 'SPOT' | 'ECO' | 'FUTURES';
}

Finance.Currency = Currency;
Finance.Deposit = Deposit;
Finance.Investment = Investment;
Finance.Transaction = Transaction;
Finance.Transfer = Transfer;
Finance.Wallet = Wallet;
Finance.Withdraw = Withdraw;

export declare namespace Finance {
  export { type FinanceGetExchangeRateParams as FinanceGetExchangeRateParams };

  export {
    Currency as Currency,
    type CurrencyRetrieveParams as CurrencyRetrieveParams,
    type CurrencyListParams as CurrencyListParams,
    type CurrencyGetExchangeRateParams as CurrencyGetExchangeRateParams,
    type CurrencyGetPriceParams as CurrencyGetPriceParams,
  };

  export { Deposit as Deposit };

  export {
    Investment as Investment,
    type InvestmentRetrieveParams as InvestmentRetrieveParams,
    type InvestmentListParams as InvestmentListParams,
  };

  export { Transaction as Transaction, type TransactionListParams as TransactionListParams };

  export { Transfer as Transfer, type TransferValidateRecipientParams as TransferValidateRecipientParams };

  export {
    Wallet as Wallet,
    type WalletRetrieveParams as WalletRetrieveParams,
    type WalletListParams as WalletListParams,
    type WalletRetrieveBySymbolParams as WalletRetrieveBySymbolParams,
  };

  export { Withdraw as Withdraw };
}

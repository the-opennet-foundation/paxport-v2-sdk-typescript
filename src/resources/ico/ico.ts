// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OfferAPI from './offer';
import { Offer, OfferListParams } from './offer';
import * as PortfolioAPI from './portfolio';
import { Portfolio, PortfolioRetrievePerformanceParams } from './portfolio';
import * as RefundAPI from './refund';
import { Refund } from './refund';
import * as TokenAPI from './token';
import { Token } from './token';
import * as TransactionAPI from './transaction';
import { Transaction, TransactionListParams } from './transaction';
import * as CreatorAPI from './creator/creator';
import { Creator, CreatorRetrieveInvestorParams, CreatorRetrievePerformanceParams } from './creator/creator';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Ico extends APIResource {
  creator: CreatorAPI.Creator = new CreatorAPI.Creator(this._client);
  offer: OfferAPI.Offer = new OfferAPI.Offer(this._client);
  portfolio: PortfolioAPI.Portfolio = new PortfolioAPI.Portfolio(this._client);
  refund: RefundAPI.Refund = new RefundAPI.Refund(this._client);
  token: TokenAPI.Token = new TokenAPI.Token(this._client);
  transaction: TransactionAPI.Transaction = new TransactionAPI.Transaction(this._client);

  /**
   * Retrieves all active blockchain configurations for users.
   */
  retrieveBlockchain(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ico/blockchain', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves comprehensive data for the ICO landing page including stats, featured
   * offerings, upcoming projects, success stories, and platform diversity.
   */
  retrieveLanding(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ico/landing', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves all available ICO launch plans.
   */
  retrievePlan(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ico/plan', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves ICO platform statistics including total raised funds, growth
   * percentage, successful offerings count, total investors, and average ROI.
   * Calculations are now based on all non-rejected transactions and monthly
   * comparisons.
   */
  retrieveStats(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ico/stats', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Ico.Creator = Creator;
Ico.Offer = Offer;
Ico.Portfolio = Portfolio;
Ico.Refund = Refund;
Ico.Token = Token;
Ico.Transaction = Transaction;

export declare namespace Ico {
  export {
    Creator as Creator,
    type CreatorRetrieveInvestorParams as CreatorRetrieveInvestorParams,
    type CreatorRetrievePerformanceParams as CreatorRetrievePerformanceParams,
  };

  export { Offer as Offer, type OfferListParams as OfferListParams };

  export {
    Portfolio as Portfolio,
    type PortfolioRetrievePerformanceParams as PortfolioRetrievePerformanceParams,
  };

  export { Refund as Refund };

  export { Token as Token };

  export { Transaction as Transaction, type TransactionListParams as TransactionListParams };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DashboardAPI from './dashboard';
import { Dashboard } from './dashboard';
import * as MarketAPI from './market';
import { Market } from './market';
import * as OfferAPI from './offer';
import { Offer, OfferGetPopularParams, OfferListParams } from './offer';
import * as PaymentMethodAPI from './payment-method';
import { PaymentMethod } from './payment-method';
import * as TradeAPI from './trade/trade';
import { Trade, TradeGetHistoryParams } from './trade/trade';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class P2p extends APIResource {
  dashboard: DashboardAPI.Dashboard = new DashboardAPI.Dashboard(this._client);
  market: MarketAPI.Market = new MarketAPI.Market(this._client);
  offer: OfferAPI.Offer = new OfferAPI.Offer(this._client);
  paymentMethod: PaymentMethodAPI.PaymentMethod = new PaymentMethodAPI.PaymentMethod(this._client);
  trade: TradeAPI.Trade = new TradeAPI.Trade(this._client);

  /**
   * Retrieves comprehensive data for the P2P landing page including stats, top
   * cryptos, featured offers, top traders, and payment methods.
   */
  getLandingData(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/p2p/landing', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a list of distinct countries extracted from user profile locations.
   */
  listCountries(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/p2p/location', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Finds matching offers based on guided matching criteria provided by the
   * authenticated user.
   */
  submitGuidedMatching(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/p2p/guided-matching', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

P2p.Dashboard = Dashboard;
P2p.Market = Market;
P2p.Offer = Offer;
P2p.PaymentMethod = PaymentMethod;
P2p.Trade = Trade;

export declare namespace P2p {
  export { Dashboard as Dashboard };

  export { Market as Market };

  export {
    Offer as Offer,
    type OfferListParams as OfferListParams,
    type OfferGetPopularParams as OfferGetPopularParams,
  };

  export { PaymentMethod as PaymentMethod };

  export { Trade as Trade, type TradeGetHistoryParams as TradeGetHistoryParams };
}

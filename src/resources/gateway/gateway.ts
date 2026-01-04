// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIKeyAPI from './api-key';
import { APIKey, APIKeyListParams } from './api-key';
import * as CheckoutAPI from './checkout';
import { Checkout } from './checkout';
import * as MerchantAPI from './merchant';
import { Merchant, MerchantGetDashboardParams } from './merchant';
import * as PaymentAPI from './payment';
import { Payment, PaymentListParams } from './payment';
import * as PayoutAPI from './payout';
import { Payout, PayoutListParams } from './payout';
import * as V1API from './v1/v1';
import { V1 } from './v1/v1';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Gateway extends APIResource {
  apiKey: APIKeyAPI.APIKey = new APIKeyAPI.APIKey(this._client);
  checkout: CheckoutAPI.Checkout = new CheckoutAPI.Checkout(this._client);
  merchant: MerchantAPI.Merchant = new MerchantAPI.Merchant(this._client);
  payment: PaymentAPI.Payment = new PaymentAPI.Payment(this._client);
  payout: PayoutAPI.Payout = new PayoutAPI.Payout(this._client);
  v1: V1API.V1 = new V1API.V1(this._client);

  /**
   * Gets the merchant's balance across all currencies.
   */
  getBalance(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/gateway/balance', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves optimized data for the gateway landing page including stats, supported
   * currencies, fee structure, and recent activity.
   */
  getLandingData(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/gateway/landing', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Gets public gateway settings for merchants.
   */
  getSettings(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/gateway/settings', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetches public statistics for the payment gateway including total merchants,
   * transactions, volume, and success rate.
   */
  getStats(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/gateway/stats', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Gateway.APIKey = APIKey;
Gateway.Checkout = Checkout;
Gateway.Merchant = Merchant;
Gateway.Payment = Payment;
Gateway.Payout = Payout;
Gateway.V1 = V1;

export declare namespace Gateway {
  export { APIKey as APIKey, type APIKeyListParams as APIKeyListParams };

  export { Checkout as Checkout };

  export { Merchant as Merchant, type MerchantGetDashboardParams as MerchantGetDashboardParams };

  export { Payment as Payment, type PaymentListParams as PaymentListParams };

  export { Payout as Payout, type PayoutListParams as PayoutListParams };

  export { V1 as V1 };
}

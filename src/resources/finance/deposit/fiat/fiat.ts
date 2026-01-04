// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AdyenAPI from './adyen';
import { Adyen, AdyenRetrieveStatusParams } from './adyen';
import * as AuthorizenetAPI from './authorizenet';
import { Authorizenet, AuthorizenetRetrieveStatusParams, AuthorizenetVerifyParams } from './authorizenet';
import * as DlocalAPI from './dlocal';
import { Dlocal, DlocalRetrieveStatusParams } from './dlocal';
import * as EwayAPI from './eway';
import { Eway, EwayRetrieveStatusParams } from './eway';
import * as Ipay88API from './ipay88';
import { Ipay88, Ipay88RetrieveStatusParams } from './ipay88';
import * as KlarnaAPI from './klarna';
import { Klarna, KlarnaRetrieveStatusParams } from './klarna';
import * as MollieAPI from './mollie';
import { Mollie, MollieRetrieveStatusParams } from './mollie';
import * as Number2checkoutAPI from './number-2checkout';
import { Number2checkout, Number2checkoutRetrieveStatusParams } from './number-2checkout';
import * as PayfastAPI from './payfast';
import { Payfast, PayfastRetrieveStatusParams } from './payfast';
import * as PaypalAPI from './paypal';
import { Paypal, PaypalRetrieveDetailsParams, PaypalVerifyParams } from './paypal';
import * as PaysafeAPI from './paysafe';
import { Paysafe, PaysafeRetrieveStatusParams } from './paysafe';
import * as PaystackAPI from './paystack';
import { Paystack, PaystackRetrieveStatusParams } from './paystack';
import * as PaytmAPI from './paytm';
import { Paytm, PaytmRetrieveStatusParams } from './paytm';
import * as PayuAPI from './payu';
import { Payu, PayuRetrieveStatusParams } from './payu';
import * as StripeAPI from './stripe';
import { Stripe, StripeVerifiedParams, StripeVerifyIntentParams, StripeVerifyParams } from './stripe';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Fiat extends APIResource {
  number2checkout: Number2checkoutAPI.Number2checkout = new Number2checkoutAPI.Number2checkout(this._client);
  adyen: AdyenAPI.Adyen = new AdyenAPI.Adyen(this._client);
  authorizenet: AuthorizenetAPI.Authorizenet = new AuthorizenetAPI.Authorizenet(this._client);
  dlocal: DlocalAPI.Dlocal = new DlocalAPI.Dlocal(this._client);
  eway: EwayAPI.Eway = new EwayAPI.Eway(this._client);
  ipay88: Ipay88API.Ipay88 = new Ipay88API.Ipay88(this._client);
  klarna: KlarnaAPI.Klarna = new KlarnaAPI.Klarna(this._client);
  mollie: MollieAPI.Mollie = new MollieAPI.Mollie(this._client);
  payfast: PayfastAPI.Payfast = new PayfastAPI.Payfast(this._client);
  paypal: PaypalAPI.Paypal = new PaypalAPI.Paypal(this._client);
  paysafe: PaysafeAPI.Paysafe = new PaysafeAPI.Paysafe(this._client);
  paystack: PaystackAPI.Paystack = new PaystackAPI.Paystack(this._client);
  paytm: PaytmAPI.Paytm = new PaytmAPI.Paytm(this._client);
  payu: PayuAPI.Payu = new PayuAPI.Payu(this._client);
  stripe: StripeAPI.Stripe = new StripeAPI.Stripe(this._client);

  /**
   * Initiates a custom fiat deposit transaction for the currently authenticated user
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/finance/deposit/fiat', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Fiat.Number2checkout = Number2checkout;
Fiat.Adyen = Adyen;
Fiat.Authorizenet = Authorizenet;
Fiat.Dlocal = Dlocal;
Fiat.Eway = Eway;
Fiat.Ipay88 = Ipay88;
Fiat.Klarna = Klarna;
Fiat.Mollie = Mollie;
Fiat.Payfast = Payfast;
Fiat.Paypal = Paypal;
Fiat.Paysafe = Paysafe;
Fiat.Paystack = Paystack;
Fiat.Paytm = Paytm;
Fiat.Payu = Payu;
Fiat.Stripe = Stripe;

export declare namespace Fiat {
  export {
    Number2checkout as Number2checkout,
    type Number2checkoutRetrieveStatusParams as Number2checkoutRetrieveStatusParams,
  };

  export { Adyen as Adyen, type AdyenRetrieveStatusParams as AdyenRetrieveStatusParams };

  export {
    Authorizenet as Authorizenet,
    type AuthorizenetRetrieveStatusParams as AuthorizenetRetrieveStatusParams,
    type AuthorizenetVerifyParams as AuthorizenetVerifyParams,
  };

  export { Dlocal as Dlocal, type DlocalRetrieveStatusParams as DlocalRetrieveStatusParams };

  export { Eway as Eway, type EwayRetrieveStatusParams as EwayRetrieveStatusParams };

  export { Ipay88 as Ipay88, type Ipay88RetrieveStatusParams as Ipay88RetrieveStatusParams };

  export { Klarna as Klarna, type KlarnaRetrieveStatusParams as KlarnaRetrieveStatusParams };

  export { Mollie as Mollie, type MollieRetrieveStatusParams as MollieRetrieveStatusParams };

  export { Payfast as Payfast, type PayfastRetrieveStatusParams as PayfastRetrieveStatusParams };

  export {
    Paypal as Paypal,
    type PaypalRetrieveDetailsParams as PaypalRetrieveDetailsParams,
    type PaypalVerifyParams as PaypalVerifyParams,
  };

  export { Paysafe as Paysafe, type PaysafeRetrieveStatusParams as PaysafeRetrieveStatusParams };

  export { Paystack as Paystack, type PaystackRetrieveStatusParams as PaystackRetrieveStatusParams };

  export { Paytm as Paytm, type PaytmRetrieveStatusParams as PaytmRetrieveStatusParams };

  export { Payu as Payu, type PayuRetrieveStatusParams as PayuRetrieveStatusParams };

  export {
    Stripe as Stripe,
    type StripeVerifiedParams as StripeVerifiedParams,
    type StripeVerifyParams as StripeVerifyParams,
    type StripeVerifyIntentParams as StripeVerifyIntentParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as IntentAPI from './intent';
import { Intent } from './intent';

export class Payment extends APIResource {
  intent: IntentAPI.Intent = new IntentAPI.Intent(this._client);
}

Payment.Intent = Intent;

export declare namespace Payment {
  export { Intent as Intent };
}

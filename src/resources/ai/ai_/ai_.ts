// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InvestmentAPI from './investment/investment';
import { Investment } from './investment/investment';

export class AI extends APIResource {
  investment: InvestmentAPI.Investment = new InvestmentAPI.Investment(this._client);
}

AI.Investment = Investment;

export declare namespace AI {
  export { Investment as Investment };
}

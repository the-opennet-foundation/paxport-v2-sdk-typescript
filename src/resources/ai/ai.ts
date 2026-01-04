// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AIAPI from './ai_/ai_';
import { AI as AiapiAI } from './ai_/ai_';
import * as InvestmentAPI from './investment/investment';
import { Investment } from './investment/investment';

export class AI extends APIResource {
  ai: AIAPI.AI = new AIAPI.AI(this._client);
  investment: InvestmentAPI.Investment = new InvestmentAPI.Investment(this._client);
}

AI.AI = AiapiAI;
AI.Investment = Investment;

export declare namespace AI {
  export { AiapiAI as AI };

  export { Investment as Investment };
}

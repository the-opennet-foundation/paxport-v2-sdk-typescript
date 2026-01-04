// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ApplicationAPI from './application';
import { Application } from './application';
import * as LevelAPI from './level';
import { Level } from './level';

export class KYC extends APIResource {
  application: ApplicationAPI.Application = new ApplicationAPI.Application(this._client);
  level: LevelAPI.Level = new LevelAPI.Level(this._client);
}

KYC.Application = Application;
KYC.Level = Level;

export declare namespace KYC {
  export { Application as Application };

  export { Level as Level };
}

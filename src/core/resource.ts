// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { PaxportV2SDK } from '../client';

export abstract class APIResource {
  protected _client: PaxportV2SDK;

  constructor(client: PaxportV2SDK) {
    this._client = client;
  }
}

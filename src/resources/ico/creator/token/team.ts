// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Team extends APIResource {
  /**
   * Adds a new team member to the specified ICO offering for the authenticated
   * creator.
   */
  create(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/ico/creator/token/${id}/team`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates a team member of a specified ICO offering for the authenticated creator.
   */
  update(teamID: string, params: TeamUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.put(path`/api/ico/creator/token/${id}/team/${teamID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves team members for the ICO offering for the authenticated creator.
   */
  list(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/ico/creator/token/${id}/team`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TeamUpdateParams {
  /**
   * ICO offering ID
   */
  id: string;
}

export declare namespace Team {
  export { type TeamUpdateParams as TeamUpdateParams };
}

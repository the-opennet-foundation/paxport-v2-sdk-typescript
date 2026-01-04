// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Roadmap extends APIResource {
  /**
   * Adds a new roadmap item to the specified ICO offering for the authenticated
   * creator.
   */
  create(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/ico/creator/token/${id}/roadmap`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates a roadmap item of a specified ICO offering for the authenticated
   * creator.
   */
  update(roadmapID: string, params: RoadmapUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.put(path`/api/ico/creator/token/${id}/roadmap/${roadmapID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves roadmap items for the ICO offering for the authenticated creator.
   */
  list(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/ico/creator/token/${id}/roadmap`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RoadmapUpdateParams {
  /**
   * ICO offering ID
   */
  id: string;
}

export declare namespace Roadmap {
  export { type RoadmapUpdateParams as RoadmapUpdateParams };
}

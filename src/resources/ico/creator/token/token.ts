// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ReleaseAPI from './release';
import { Release, ReleaseListParams, ReleaseUpdateParams } from './release';
import * as RoadmapAPI from './roadmap';
import { Roadmap, RoadmapUpdateParams } from './roadmap';
import * as TeamAPI from './team';
import { Team, TeamUpdateParams } from './team';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Token extends APIResource {
  release: ReleaseAPI.Release = new ReleaseAPI.Release(this._client);
  roadmap: RoadmapAPI.Roadmap = new RoadmapAPI.Roadmap(this._client);
  team: TeamAPI.Team = new TeamAPI.Team(this._client);

  /**
   * Retrieves detailed ICO offering data (including phases, token detail, team
   * members, roadmap items, launch plan, computed stats, investor count, and
   * rejected funds) for the authenticated creator.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/ico/creator/token/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves ICO offerings for the authenticated creator, grouped by status
   * (active, pending, completed) along with currentRaised for each offering.
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/ico/creator/token', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Updates the launch plan for the specified ICO offering for the authenticated
   * creator.
   */
  updatePlan(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/api/ico/creator/token/${id}/plan`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

Token.Release = Release;
Token.Roadmap = Roadmap;
Token.Team = Team;

export declare namespace Token {
  export {
    Release as Release,
    type ReleaseUpdateParams as ReleaseUpdateParams,
    type ReleaseListParams as ReleaseListParams,
  };

  export { Roadmap as Roadmap, type RoadmapUpdateParams as RoadmapUpdateParams };

  export { Team as Team, type TeamUpdateParams as TeamUpdateParams };
}

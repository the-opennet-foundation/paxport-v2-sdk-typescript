// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Upload extends APIResource {
  /**
   * Converts a HEIC image to JPEG format and returns the file URL
   */
  convertHeicToJpeg(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/upload/heic', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Uploads a file to a specified directory
   */
  uploadFile(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/upload', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Uploads a KYC document file including PDFs, images, and other document types
   */
  uploadKYCDocument(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/api/upload/kyc-document', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

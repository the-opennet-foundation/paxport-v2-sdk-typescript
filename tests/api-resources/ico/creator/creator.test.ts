// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxportV2SDK from '@paxeer-network/paxport-v2-sdk';

const client = new PaxportV2SDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource creator', () => {
  // Prism tests are disabled
  test.skip('retrieveInvestor', async () => {
    const responsePromise = client.ico.creator.retrieveInvestor();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveInvestor: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ico.creator.retrieveInvestor(
        { limit: 0, page: 0, search: 'search', sortDirection: 'sortDirection', sortField: 'sortField' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PaxportV2SDK.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrievePerformance: only required params', async () => {
    const responsePromise = client.ico.creator.retrievePerformance({ range: 'range' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrievePerformance: required and optional params', async () => {
    const response = await client.ico.creator.retrievePerformance({ range: 'range' });
  });

  // Prism tests are disabled
  test.skip('retrieveStat', async () => {
    const responsePromise = client.ico.creator.retrieveStat();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});

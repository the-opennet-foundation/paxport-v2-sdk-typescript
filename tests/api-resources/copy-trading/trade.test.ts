// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxportV2SDK from '@paxeer-network/paxport-v2-sdk';

const client = new PaxportV2SDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource trade', () => {
  // Prism tests are disabled
  test.skip('getDetails', async () => {
    const responsePromise = client.copyTrading.trade.getDetails('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getHistory', async () => {
    const responsePromise = client.copyTrading.trade.getHistory();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getHistory: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.copyTrading.trade.getHistory(
        {
          dateFrom: '2019-12-27',
          dateTo: '2019-12-27',
          followerId: 'followerId',
          leaderId: 'leaderId',
          limit: 0,
          page: 0,
          side: 'BUY',
          status: 'PENDING',
          symbol: 'symbol',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PaxportV2SDK.NotFoundError);
  });
});

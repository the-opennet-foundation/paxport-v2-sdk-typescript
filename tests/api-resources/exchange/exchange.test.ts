// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxportV2SDK from 'paxport-v2-sdk';

const client = new PaxportV2SDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource exchange', () => {
  // Prism tests are disabled
  test.skip('getHistoricalChart: only required params', async () => {
    const responsePromise = client.exchange.getHistoricalChart({
      duration: 0,
      from: 0,
      interval: 'interval',
      symbol: 'symbol',
      to: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getHistoricalChart: required and optional params', async () => {
    const response = await client.exchange.getHistoricalChart({
      duration: 0,
      from: 0,
      interval: 'interval',
      symbol: 'symbol',
      to: 0,
    });
  });

  // Prism tests are disabled
  test.skip('getOrderbook: only required params', async () => {
    const responsePromise = client.exchange.getOrderbook('pair', { currency: 'currency' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getOrderbook: required and optional params', async () => {
    const response = await client.exchange.getOrderbook('pair', { currency: 'currency', limit: 0 });
  });
});

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxportV2SDK from '@paxeer-network/paxport-v2-sdk';

const client = new PaxportV2SDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource finance', () => {
  // Prism tests are disabled
  test.skip('getExchangeRate: only required params', async () => {
    const responsePromise = client.finance.getExchangeRate({
      fromCurrency: 'fromCurrency',
      fromType: 'FIAT',
      toCurrency: 'toCurrency',
      toType: 'FIAT',
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
  test.skip('getExchangeRate: required and optional params', async () => {
    const response = await client.finance.getExchangeRate({
      fromCurrency: 'fromCurrency',
      fromType: 'FIAT',
      toCurrency: 'toCurrency',
      toType: 'FIAT',
    });
  });
});

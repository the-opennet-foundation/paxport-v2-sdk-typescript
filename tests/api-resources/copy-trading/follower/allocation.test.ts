// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PaxportV2SDK from 'paxport-v2-sdk-typescript';

const client = new PaxportV2SDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource allocation', () => {
  // Prism tests are disabled
  test.skip('addFunds: only required params', async () => {
    const responsePromise = client.copyTrading.follower.allocation.addFunds(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('addFunds: required and optional params', async () => {
    const response = await client.copyTrading.follower.allocation.addFunds(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
  });

  // Prism tests are disabled
  test.skip('createAllocation', async () => {
    const responsePromise = client.copyTrading.follower.allocation.createAllocation(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getAllocations', async () => {
    const responsePromise = client.copyTrading.follower.allocation.getAllocations(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('removeFunds: only required params', async () => {
    const responsePromise = client.copyTrading.follower.allocation.removeFunds(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('removeFunds: required and optional params', async () => {
    const response = await client.copyTrading.follower.allocation.removeFunds(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
  });
});

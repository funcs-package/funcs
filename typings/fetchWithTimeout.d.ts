import { RequestInfo, RequestInit, Response } from 'node-fetch';

export function fetchWithTimeout(url: RequestInfo, options?: RequestInit, timeout?: number): Promise<Response>;
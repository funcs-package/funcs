import { RequestInfo, RequestInit, Response } from 'node-fetch';

export default function fetchWithTimeout(url: RequestInfo, options: RequestInit, timeout?: number): Promise<Response>;
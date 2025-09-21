import { NextResponse } from 'next/server';

interface ChatRequestBody {
  message?: string;
  history?: Array<{ sender: 'user' | 'bot'; text: string }>;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ChatRequestBody;
    const message = body.message?.trim();

    if (!message) {
      return NextResponse.json({ error: 'Missing message' }, { status: 400 });
    }

    const url = process.env.N8N_CHAT_URL;
    if (!url) {
      console.error('N8N_CHAT_URL is not configured');
      return NextResponse.json({ error: 'Service unavailable' }, { status: 500 });
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (process.env.N8N_CHAT_KEY) {
      headers['Authorization'] = `Bearer ${process.env.N8N_CHAT_KEY}`;
    }

    const payload = {
      message,
      history: body.history ?? [],
    };

    const n8nResponse = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    let data: unknown;
    const text = await n8nResponse.text();
    try {
      data = text ? JSON.parse(text) : {};
    } catch (error) {
      console.error('Failed to parse n8n response JSON', error);
      return NextResponse.json({ error: 'Invalid response from assistant' }, { status: 502 });
    }

    if (!n8nResponse.ok) {
      console.error('n8n request failed', n8nResponse.status, data);
      return NextResponse.json({ error: 'Assistant unavailable' }, { status: 502 });
    }

    const reply = (data as Record<string, unknown>).reply ?? (data as Record<string, unknown>).message ?? '';

    if (typeof reply !== 'string' || !reply.trim()) {
      return NextResponse.json({ error: 'Empty assistant response' }, { status: 502 });
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Unexpected error handling chat request', error);
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
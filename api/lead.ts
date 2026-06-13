import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const maskedKey = apiKey ? apiKey.substring(0, 8) + '...' + apiKey.substring(apiKey.length - 4) : 'NOT SET';
  
  // Test the key directly
  let keyValid = false;
  let keyError = '';
  try {
    const testResend = new Resend(apiKey);
    await testResend.emails.send({
      from: 'NKY Pressure Washing Pros <lead@scalesolving.com>',
      to: ['kenny@scalesolving.com'],
      subject: 'API Key Test',
      html: '<p>Testing API key from Vercel function</p>',
    });
    keyValid = true;
  } catch (e: any) {
    keyError = e.message;
  }

  return res.status(200).json({ 
    ok: true, 
    maskedKey,
    keyValid,
    keyError,
    keyLength: apiKey?.length || 0,
  });
}

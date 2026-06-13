import type { VercelRequest, VercelResponse } from '@vercel/node';
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const key = process.env.RESEND_API_KEY;
  return res.status(200).json({ 
    keyLength: key?.length || 0,
    first10: key?.slice(0, 10) || 'none',
    last10: key?.slice(-10) || 'none',
    hasNewline: key?.includes('\n') || false,
    hasCR: key?.includes('\r') || false,
    charCodes: key ? Array.from(key).slice(-5).map(c => c.charCodeAt(0)) : [],
  });
}

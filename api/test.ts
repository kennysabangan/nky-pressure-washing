import type { VercelRequest, VercelResponse } from '@vercel/node';
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const key = process.env.RESEND_API_KEY;
  return res.status(200).json({ 
    keyLength: key?.length || 0,
    keyEnd: key?.slice(-4) || 'none',
    hasNewline: key?.includes('\n') || false,
  });
}

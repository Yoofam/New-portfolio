import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { name, email, message } = req.body;
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "victoradeleke55@yahoo.com",
      subject: `New message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

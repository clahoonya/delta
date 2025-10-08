const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, type } = req.body; // type can be 'contact' or 'quote'

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields: name, email, message' });
  }

  const subject = type === 'quote' ? 'New Quote Request' : 'New Contact Message';
  const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
  const html = `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`;

  const msg = {
    to: 'younghoon@levelthree.co',
    from: process.env.VERIFIED_SENDER || 'noreply@deltalife.com', // Set VERIFIED_SENDER in Vercel environment variables
    subject,
    text,
    html,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
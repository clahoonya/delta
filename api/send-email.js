import { Resend } from 'resend';

const resend = new Resend('re_74ca7Trp_7mKqJqD8TXsMFwSfYUW8PAan');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, type, address, products } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields: name, email, message' });
  }

  const subject = type === 'quote' ? 'Quotation Request' : 'Inquiry from Contact Us page';
  let htmlContent = `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p>`;
  
  if (address) {
    htmlContent += `<p><strong>Address:</strong> ${address}</p>`;
  }
  
  if (products) {
    htmlContent += `<p><strong>Products:</strong> ${products}</p>`;
  }
  
  htmlContent += `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`;

  try {
    await resend.emails.send({
      from: 'Delta Life <onboarding@resend.dev>',
      to: 'younghoon@levelthree.co',
      subject,
      html: htmlContent,
    });
    
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
import { Resend } from 'resend';

// Initialize Resend with API key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if API key is configured
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return res.status(500).json({ error: 'Email service not configured' });
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
    const emailResult = await resend.emails.send({
      from: 'Delta Life <younghoon@levelthree.co>',
      to: 'younghoon@levelthree.co',
      subject,
      html: htmlContent,
    });
    
    console.log('Email sent successfully:', emailResult);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message || 'Unknown error'
    });
  }
}
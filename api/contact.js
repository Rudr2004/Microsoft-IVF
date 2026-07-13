export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // ==========================================
  // 1. UPDATE YOUR BREVO LIST ID HERE
  // Replace this number with the actual List ID 
  // for your "Contact Us Form" list in Brevo.
  // ==========================================
  const BREVO_LIST_ID = 6; 

  try {
    const { email, firstName, lastName, country, message, honeypot } = req.body;

    // Basic spam protection (Honeypot)
    // If a bot fills out the hidden honeypot field, we quietly succeed
    // without actually sending the email to Brevo.
    if (honeypot) {
      return res.status(200).json({ success: true, note: 'honeypot triggered' });
    }

    // Basic required field validation
    if (!email || !firstName) {
      return res.status(400).json({ error: 'Missing required fields (email, firstName)' });
    }

    // Check for Vercel Environment Variable
    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error('Missing BREVO_API_KEY environment variable in Vercel');
      return res.status(500).json({ error: 'Server configuration error. Contact administrator.' });
    }

    // Prepare payload for Brevo Contacts API
    const payload = {
      email,
      attributes: {
        FIRSTNAME: firstName,
        LASTNAME: lastName || '',
        COUNTRY: country || '',
        MESSAGE: message || '',
      },
      listIds: [BREVO_LIST_ID],
      updateEnabled: true, // Prevents error if contact already exists
    };

    console.log('Sending payload to Brevo:', JSON.stringify(payload));

    // Call Brevo API
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error('Brevo API Error:', response.status, data);
      return res.status(response.status).json({ 
        error: data.message || 'Failed to sync contact with email provider'
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact API Internal Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export default async function handler(req, res) {
  if (req.query.secret !== 'antigravity-secret') return res.status(401).send('Unauthorized');
  
  const apiKey = process.env.BREVO_API_KEY;
  const response = await fetch('https://api.brevo.com/v3/contacts/attributes', {
    headers: { 'Accept': 'application/json', 'api-key': apiKey }
  });
  
  const data = await response.json();
  res.status(200).json(data);
}

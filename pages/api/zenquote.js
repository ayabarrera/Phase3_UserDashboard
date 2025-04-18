export default async function handler(req, res) {
    try {
      const zenRes = await fetch('https://zenquotes.io/api/random/');
      const data = await zenRes.json();
  
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching quote:', error);
      res.status(500).json({ error: 'Failed to fetch quote' });
    }
  }
  
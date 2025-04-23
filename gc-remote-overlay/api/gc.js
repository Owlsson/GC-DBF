export default function handler(req, res) {
  const fs = require('fs');
  const path = require('path');
  if (req.method === 'POST') {
    const data = req.body;
    const filePath = path.join(process.cwd(), 'public', 'overlay', 'state.json');
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(200).json({ status: 'ok' });
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}

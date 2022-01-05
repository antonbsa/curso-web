export default function handler(req, res) {
  const { code } = req.query;

  return res.status(200).json({
    id: code,
    name: `Maria ${code}`,
    email: 'maria@gmail.com'
  })
}
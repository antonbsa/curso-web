function handleGet(req, res) {
  return res.status(200).json({
    id: 3,
    name: 'Maria',
    idade: 33,
  })
}

export default function index(req, res) {
  const { method } = req;

  if (method === 'GET') {
    handleGet(req, res);
  } else {
    return res.status(405).send();
  }
}
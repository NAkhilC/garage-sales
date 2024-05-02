const products = [
  { id: 1, name: "Product A", price: 100 },
  { id: 2, name: "Product B", price: 150 },
  { id: 3, name: "Product C", price: 200 },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(products);
  }

  return res.status(405).end(); // Method Not Allowed
}

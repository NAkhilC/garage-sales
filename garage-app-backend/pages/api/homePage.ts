import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const DATA = [
    {
      id: "1",
      imageUrl: "landingBg.jpeg",
      address: {
        city: "123 marcus, Thunder Bay, On, Ontario, Canada",
      },
      content:
        "Content for item 1 jwegvjhrf hrwjhsf ehrbfkerb jrbfbjrfjrb erhgoriueg eirhgreg ohetg",
    },
    {
      id: "2",
      imageUrl: "garage1.jpeg",
      content: "Content for item 2",
      address: {
        city: "428 amy, Thunder Bay",
      },
    },
    {
      id: "3",
      imageUrl: "landing.jpeg",
      content: "Content for item 1 jwegvjhrf hrwjhsf ehrbfkerb jrbfb",
      address: {
        city: "928 Jonnaha, Thunder Bay",
      },
    },
    {
      id: "4",
      imageUrl: "garage2.jpeg",
      content: "Content for item 2",
      address: {
        city: "91 katet, Thunder Bay",
      },
    },
    {
      id: "5",
      imageUrl: "garage3.jpeg",
      content: "Content for item 1 jwegvjhrf hrwjhsf ehrbfkerb jrbfb",
      address: {
        city: "431 Lilli, Thunder Bay",
      },
    },
    {
      id: "6",
      imageUrl: "garage4.jpeg",
      content: "Content for item 2",
      address: {
        city: "0991 katet, Thunder Bay",
      },
    },
    {
      id: "7",
      imageUrl: "garage1.jpeg",
      content: "Content for item 1 jwegvjhrf hrwjhsf ehrbfkerb jrbfb",
      address: {
        city: "1291 katet, Thunder Bay",
      },
    },
    {
      id: "8",
      imageUrl: "garage3.jpeg",
      content: "Content for item 2",
      address: {
        city: "991 Inter, Thunder Bay",
      },
    },
    // Add more data objects as needed
  ];
  if (req.method === "GET") {
    res.status(200).json({ data: DATA });
  } else if (req.method === "POST") {
    console.log(req.body);

    res.status(200).json({ status: 200, data: "success" });
  }
  return res.status(405).end(); // Method Not Allowed
}

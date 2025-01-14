import axios from 'axios';

export default async function handler(req, res) {
  const { username, password } = req.body;

  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { username, password });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: "Login failed" });
  }
}

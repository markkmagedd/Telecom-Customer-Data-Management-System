import { executeQuery } from "../../../lib/db-connection"
import type { NextApiRequest, NextApiResponse } from 'next'

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Example query to fetch data
    const query = 'SELECT * FROM HELLOWORLD'; // Replace with your table name
    const result = await executeQuery(query);
    console.log(result);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
}

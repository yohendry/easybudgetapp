import { withAuth } from '../../lib/middleware';
import { getAccounts } from '../../lib/db-admin';

const handler = async (req, res) => {
  try {
    const accounts = await getAccounts(req.uid);
    return res.status(200).json({ accounts });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default withAuth(handler);

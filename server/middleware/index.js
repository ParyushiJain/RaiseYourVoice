const admin = require('../config/firebase-config');
	
const decodeToken = async function (req, res, next) {
		const token = req.headers.authorization;
		try {
			const decodeValue = await admin.auth().verifyIdToken(token);
			if (decodeValue) {
				req.user = decodeValue;
				return next();
			}
			return res.json({ message: 'Un authorize' });
		} catch (e) {
			return res.json({ message: 'Internal Error' });
		}
	}
module.exports = {
    decodeToken
}

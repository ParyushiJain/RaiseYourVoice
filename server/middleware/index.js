const admin = require('../config/firebase-config');
	
const decodeToken = async function (req, res, next) {
		const token = req.headers.authorization;
        console.log(token)
        console.log(await admin.auth().verifyIdToken(token))
		try {
			const decodeValue = await admin.auth().verifyIdToken(token);
            console.log(decodeValue)
			if (decodeValue) {
                console.log(decodeValue)
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

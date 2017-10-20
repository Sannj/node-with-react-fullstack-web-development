const passport = require('passport');

module.exports = (app) => {
	app.get('/auth/google', passport.authenticate('google', {
		scope: ['profile', 'email']    //what all details we need about the user from google. profile n email are google keywords
	}));

	app.get('/auth/google/callback', passport.authenticate('google'));
};
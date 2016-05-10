#!/usr/bin/env node

const GitHooks = require('../index')

new GitHooks({

	PORT: 3333

}).on('payload', (req, res, payload) => {

	console.log(payload)

	// now do some things on the command line!
	// first, pull the new changes
	GitHooks.command('git pull')
		.then((stdout) => {

			// install npm dependencies
			return GitHooks.command('npm install')
			
		}).then((stdout) => {

			// NOTE: might need to restart your webserver at this point, depending on your configuration

			// let the POSTer know it succeeded
			res.end('got it!')

		}).catch(e => {
			console.error(e)

			// delivery failed!!
			res.statusCode = 500;
			res.end(e.message)
		})
})

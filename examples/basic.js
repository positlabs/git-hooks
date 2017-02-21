#!/usr/bin/env node

const GitWebhooks = require('../index')

new GitWebhooks({

	PORT: 3333

}).on('payload', (req, res, payload) => {

	console.log(payload)

	// now do some things on the command line!
	// first, pull the new changes
	GitWebhooks.command('git pull')
		.then(std => {

			// install npm dependencies
			return GitWebhooks.command('npm install')
			
		}).then(std => {

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

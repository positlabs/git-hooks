#!/usr/bin/env node

const GitWebhooks = require('../index')

GitWebhooks.command('echo "running a command now!"').then((stdout) => {

	console.log(stdout)
	return GitWebhooks.command('echo "running another command now!"')

}).then((stdout) => {

	console.log(stdout)
	return GitWebhooks.command('echo "running yet another command now!"')

}).then((stdout) => {

	console.log(stdout)
	console.log('done!')

}).catch(e => console.error)
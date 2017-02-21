#!/usr/bin/env node

const GitWebhooks = require('../index')

GitWebhooks.command('echo "running a command now!"').then(std => {

	console.log(std)
	return GitWebhooks.command('echo "running another command now!"')

}).then(std => {

	console.log(std)
	return GitWebhooks.command('echo "running yet another command now!"')

}).then(std => {

	console.log(std)
	console.log('done!')

}).catch(e => console.error)
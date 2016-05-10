#!/usr/bin/env node

const GitHooks = require('../index')

GitHooks.command('echo "running a command now!"').then((stdout) => {

	console.log(stdout)
	return GitHooks.command('echo "running another command now!"')

}).then((stdout) => {

	console.log(stdout)
	return GitHooks.command('echo "running yet another command now!"')

}).then((stdout) => {

	console.log(stdout)
	console.log('done!')

}).catch(e => console.error)
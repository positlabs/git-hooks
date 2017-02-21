#!/usr/bin/env node

const GitWebhooks = require('../index')

GitWebhooks.command('echo "running a command now!"').then(std => {

	console.log(std)
	return GitWebhooks.command('echo "running another command now!"')

}).then(std => {

	console.log(std)

	// pass options to child_process.exec
	// https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback
	var opts = {
		maxBuffer: 1024*1024
	}
	return GitWebhooks.command('echo "running yet another command now!"', opts)

}).then(std => {

	console.log(std)
	console.log('done!')

}).catch(e => console.error)
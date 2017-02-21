# git-web-hooks
A module for reacting to [git webhooks](https://developer.github.com/webhooks/).

[![NPM](https://nodei.co/npm/git-web-hooks.png)](https://npmjs.org/package/git-web-hooks)

**Example**

```javascript
const GitWebhooks = require('git-web-hooks')

new GitWebhooks({

	PORT: 3333 // optional. 3333 is default

}).on('payload', (req, res, payload) => {

	// do something based on payload contents
	
	// then send a response to github
	res.end('got it!')

})

```

**Commands**

Doing something useful with the webhooks probably means you will run some commands. `GitWebhooks.command` is a thin wrapper around `child_process.exec` that returns a promise. You can use this to run commands like `git pull` or `npm install`.

```javascript

var cmd = GitWebhooks.command('echo "running a command now!"')

// it's a Promise!
cmd.then(std => {
	console.log(std.out, std.err)
}).catch(err => console.error)

// and you can pass options to child_process.exec
GitWebhooks.command('echo "Hello, options!"', {maxBuffer: 1024*1024})


```

**Daemonize**

To keep the process alive, you should use a daemonizer like [nohup](https://en.wikipedia.org/wiki/Nohup), [forever](https://www.npmjs.com/package/forever), [pm2](https://github.com/Unitech/pm2), or others.

`nohup your-hook-server.js &`

`forever start your-hook-server.js`

`pm2 start your-hook-server.js`

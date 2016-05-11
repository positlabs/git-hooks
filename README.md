# git-web-hooks
A module for reacting to [git webhooks](https://developer.github.com/webhooks/).

[![NPM](https://nodei.co/npm/git-web-hooks.png)](https://npmjs.org/package/git-web-hooks)

**Example**

```javascript
const GitWebhooks = require('git-webhooks')

new GitWebhooks({

	PORT: 3333 // optional. 3333 is default

}).on('payload', (req, res, payload) => {

        // do something based on payload contents
        
        // then send a response to github
	res.send('got it!')

})

```

**Daemonize**

To keep the process alive, you should use a daemonizer like [nohup](https://en.wikipedia.org/wiki/Nohup), [forever](https://www.npmjs.com/package/forever), [pm2](https://github.com/Unitech/pm2), or others.

`nohup your-hook-server.js &`

`forever start your-hook-server.js`

`pm2 start your-hook-server.js`

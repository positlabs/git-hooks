# git-web-hooks
A module for reacting to [git webhooks](https://developer.github.com/webhooks/).

[![NPM](https://nodei.co/npm/git-web-hooks.png)](https://npmjs.org/package/git-web-hooks)


```javascript
const GitWebhooks = require('git-webhooks')

new GitWebhooks({

	PORT: 3333

}).on('payload', (req, res, payload) => {

	console.log(payload)
	res.send('got it!')

})

```

To keep the process alive, you should use a daemonizer like [nohup](https://en.wikipedia.org/wiki/Nohup), [forever](https://www.npmjs.com/package/forever), [pm2](https://github.com/Unitech/pm2), or others.

`nohup your-hook-server.js &`

`forever start your-hook-server.js`

`pm2 start your-hook-server.js`

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



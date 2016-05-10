# git-webhooks
A module for reacting to [git webhooks](https://developer.github.com/webhooks/).



```javascript
const GitWebhooks = require('git-webhooks')

new GitWebhooks({

	PORT: 3333

}).on('payload', (req, res, payload) => {

	console.log(payload)
	res.send('got it!')

})

```



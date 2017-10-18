const express = require('express'); //using common js modules on server side. 
const app = express();

app.get('/', (req, res) => {
	res.send({Hi: 'There'});
});

app.listen(5000);


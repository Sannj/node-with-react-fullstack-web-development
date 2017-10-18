const express = require('express'); //using common js modules on server side. 
const app = express();

app.get('/', (req, res) => {
	res.send({Hi: 'There'});
});

const PORT = process.env.PORT || 5000; //listen to the port given as the env variable or default to 5000
app.listen(PORT);

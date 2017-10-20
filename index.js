const express = require('express'); //using common js modules on server side. 
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000; //listen to the port given as the env variable or default to 5000
app.listen(PORT);

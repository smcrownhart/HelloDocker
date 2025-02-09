//this is where the webserver code goes
//the app will start here
const app = require('express')();//get express library install

app.get('/', (req, res ) => 
    res.json({ message: 'Docker is easy 🐳' }) 
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );
//bottom two deal with ports if not found default to 8080
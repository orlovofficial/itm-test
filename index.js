const app = require('./app');
const port = process.env.PORT || 3000;
const { sequelize } = require('./db');


sequelize.sync().then(()=>{
  app.listen(port, () => console.log(`Server has been started on port ${port}.`));
}).catch(err => console.log(err));






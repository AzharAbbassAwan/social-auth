require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const { sequelize } = require('./models/definition');
require('./config/passport');

const app = express();
const port = process.env.PORT ?? 3004;
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', require('./routes/authRoutes'));

app.get('/', (req, res) => {
  res.send(`<a href="/auth/google">Login with Google</a>`);
});

sequelize.sync().then(() => {
  app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
});

var Sequelize = require('sequelize');
var db = new Sequelize('reup', 'root', '', {
  dialect: 'mysql', // or 'sqlite', 'postgres', 'mariadb'
});

db.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

var User = db.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
}, { instanceMethods: {
  comparePassword: function(attemptedPassword, savedPassword, callback) {
      bcrypt.compare(attemptedPassword, savedPassword, function(err, isMatch) {
        if (err) {
          return callback(err, null);
        }
        callback(null, isMatch);
      });
    }
}
});

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Client', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
  }, {
    instanceMethods: {
      getFullName: function() {
        return this.first_name + ' ' + this.last_name;
      }
    }
  });
};

var Game = db.define('Game', {
  gameName: Sequelize.STRING,
  giantBombName: Sequelize.STRING,
  subRedditName: Sequelize.STRING,
  twitchQuery: Sequelize.STRING,
  youtubeChannelId: Sequelize.STRING,
  twitterName: Sequelize.STRING
});

// JOIN TABLE
var Favorites = db.define('Favorites');

// Creating many to many relationship between user and games via Favorites join table
User.belongsToMany(Game, { through: Favorites });
Game.belongsToMany(User, { through: Favorites });

// creates these tables in MySQL if they don't already exist.
User.sync();
Game.sync();
Favorites.sync();

Game.findOrCreate({where: {gameName: 'Overwatch'}, defaults: {
  giantBombName: 'overwatch',
  subRedditName: 'Overwatch',
  twitchQuery: 'overwatch',
  youtubeChannelId: 'UClOf1XXinvZsy4wKPAkro2A',
  twitterName: 'playoverwatch'
}});

module.exports.User = User;
module.exports.Game = Game;
module.exports.Favorites = Favorites;
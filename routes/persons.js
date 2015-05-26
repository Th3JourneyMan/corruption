
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/corruption');

var db = mongoose.connection;
var Schema = mongoose.Schema;

//Person of interest schema
var poiSchema = new Schema({
  fn: String,
  ln: String,
  dob: Date,
  keywords: [], //Array of strings
  donations: [
    {
      link: String,
      date: Date,
      summary: String,
      AddedAt: Date,
      AdedBy: String,
      keywords: [] //Array of strings
    }
  ],
  career: [
    {
      link: String,
      startDate: Date,
      resignDate: Date,
      summary: String,
      AddedAt: Date,
      AdedBy: String,
      keywords: [] //Array of strings
    }
  ],
  events: [
    {
      link: String,
      date: Date,
      summary: String,
      AddedAt: Date,
      AdedBy: String,
      keywords: [] //Array of strings
    }
  ]
});

//user schema
var userSchemq = new Schema({
  username: String,
  pwdHash: String,
  email: String,
  isMod: Boolean,
  postList: [{
    id: String,
    status: {
      values: 'approved flagged mistaken grossError'.split(' '),
      message: 'postList enum validator failed for path `{PATH}` with value `{VALUE}`'
    }
  }]
});

mongoose.model('poi', poiSchema);
mongoose.model('user', userSchema);


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Person of interest schema
var pofISchema = new Schema({
  fn: String,
  ln: String,
  dob: Date
},
{strict: true});
/*  keywords: [], //Array of strings
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
*/
pofISchema.index({fn:1, ln:1, dob:1}, {unique:true});

//user schema
var userSchema = new Schema({
  username: String,
  pwdHash: String,
  email: String,
  isMod: Boolean,
  userPosts: [{
    id: {type: Schema.ObjectId},
    status: {
      values: {
        type: String,
        enum: 'approved flagged mistaken grossError'.split(' ')
      }
    },
    createdAt: { type: Date, default: Date.now}
  }],
  personList: [
    Schema.ObjectId
  ]
},
{strict: true});
userSchema.index({username:1, pwdHash:1, email:1}, {unique:true});


mongoose.model('PofI', pofISchema);
mongoose.model('User', userSchema);

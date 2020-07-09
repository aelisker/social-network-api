const { Schema, model } = require('mongoose');

const emailValidation = function(email) {
  let regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return regex.test(String(email).toLowerCase());
}

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // https://mongoosejs.com/docs/validation.html
      // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
      validate: {
        validator: emailValidation,
        message: email => `${email.value} is not a valid email address`
      }
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
)

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;
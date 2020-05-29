const mongoose = require("mongoose");

const OwnerSchema = mongoose.Schema({

  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  
  phoneNum: {
    type: String,
    required: true
  },
  phoneNum: {
    type: String,
    required: true
  },
  identityNum: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

// export model owner with OwnerSchema
module.exports = mongoose.model("owner", OwnerSchema);


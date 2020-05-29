const mongoose = require("mongoose");

const AssociationSchema = mongoose.Schema({

  aname: {
    type: String,
    required: true
  },
  pname: {
    type: String,
    required: true
  },
  
  phoneNum: {
    type: String,
    required: true
  },
  associationNum: {
    type: String,
    required: true
  },
  legalNum: {
    type: String,
    required: true
  },
  scope: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  website: {
    type: String
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

// export model association with AssociationSchema
module.exports = mongoose.model("association", AssociationSchema);


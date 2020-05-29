const mongoose = require("mongoose");

const AssociationappSchema = mongoose.Schema({


  peopleNum: {
    type: Number,
    min: 5,
    required: true
  },
  serialNum: {
    type: Number,
    required: true
  },  
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Association'
  }
  status: {
    type: Boolean,
    default:false      
  },
  details: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

// export model association with AssociationSchema
module.exports = mongoose.model("associationapp", AssociationappSchema);



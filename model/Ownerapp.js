const mongoose = require("mongoose");


var HouseSchema = new Schema({
    location:  {
        type: String,
        required: true
    },
    area:{
        type: Number,
        min: 1,
        required: true
    },
    area:{
        type: Number,
        min: 3,
        required: true
    },
    number:{
        type: String,
        required: true
    },
    document:{
        type: String,
        required: true
    },
    status: {
    type: Boolean,
    default:false      
    },

    matchedwith: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Association'
    }
}, {
    timestamps: true
});

const OwnerappSchema = mongoose.Schema({

  numhouses:{
        type: Number,
        min: 1,
        required: true
  },

  houses:[Schema]

  createdAt: {
    type: Date,
    default: Date.now()
  }
});

// export model association with AssociationSchema
module.exports = mongoose.model("ownerapp", OwnerappSchema);


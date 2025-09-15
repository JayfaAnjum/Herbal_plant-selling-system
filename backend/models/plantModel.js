const mongoose=require('mongoose');

const plantSchema=new mongoose.Schema({

    name:{

        type:String,
        required:true,

    },
    species:{

        type:String,
        reqired:true,
    },

    image:{


        type:String,
        required:false,
    },
    description:{

        type:String,
        required:true,
    },

    category:{
type:String,
required:true,

    },

    careInstructions:{

        type:String,
        required:true,
    },

    price:{

        type:Number,
        required:true,
    },
    stock:{

        type:Number,
        required:true,
    }
});
module.exports=mongoose.model('plant',plantSchema);

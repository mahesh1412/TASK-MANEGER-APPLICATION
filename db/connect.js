const mongoose=require('mongoose');

//       const connectionString =
//      'mongodb+srv://bhanugupta:mahesh12345@nodexepressproject.ookwb.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'


//const connectionString= 
       //'mongodb+srv://bhanu:mah&321gupT@nodeexpressproject.rt92rjk.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority';
const connectDB =(url)=>{
    return mongoose.connect(url ,{
        useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    
    })
}

module.exports = connectDB




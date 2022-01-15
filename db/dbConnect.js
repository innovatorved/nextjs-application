import moongose from 'mongoose';

const connection = {};

async function connectToDB() {
    if (connection.isConnected){
        return ;
    }
    const db = await moongose.connect(process.env.MONGO_URI , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    connection.isConnected = db.connections[0].readyState;
}

export default connectToDB;
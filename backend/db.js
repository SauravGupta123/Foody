const mongoose = require('mongoose');

const fetchData = async () => {
  try {
    const fetchedData = mongoose.connection.db.collection("foodCategory");
   console.log(fetchedData);
    
   await fetchedData.find({}).toArray((err,data)=>{
            console.log("aa");

            console.log(data);

    });
  } catch (err) {
    console.log('Error fetching data:', err);
  }
};

const connectMongoose = async () => {
  try {
    const url = 'mongodb+srv://srv444:saurav123@gofooddb.ukrvosp.mongodb.net/';
    await mongoose.connect(url);
    console.log('Connected to MongoDB');

    // Accessing the "foodData" collection
    fetchData();
  } catch (err) {
    console.log('Error connecting to MongoDB:', err);
  }
};

module.exports = connectMongoose;

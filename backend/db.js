const mongoose = require('mongoose');
const fetchData = async () => {
    try {
      const fetchedData = mongoose.connection.db.collection('foodData');
  
      // Using await to wait for the result of find().toArray()
      const data = await fetchedData.find({}).toArray();
  
      console.log('Data in the "foodData" collection:');
      console.log(data);
  
      return data; // You can use this data as needed in your application
    } catch (err) {
      console.log('Error fetching data:', err);
      throw err; // Propagate the error if needed
    }
  };
  
const connectMongoose = async () => {
  try {
    const url = 'mongodb+srv://srv444:saurav123@gofooddb.ukrvosp.mongodb.net/goFoodDB?retryWrites=true&w=majority';
    await mongoose.connect(url);
    console.log('Connected to MongoDB');
    // const foodData= await fetchData();
    // return foodData;
  
  } catch (err) {
    console.log('Error connecting to MongoDB:', err);
  }
};

module.exports = connectMongoose;

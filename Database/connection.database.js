  
  const databaseConnection = (mongoose) =>{
  const database = mongoose.connection;
  const uri = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.onsbr9h.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  database.once("open", () => {
    console.log("Database Connected with :", process.env.DATABASE_USER);
  });
};

export default databaseConnection;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ivv8ial.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connect() {
  if (!client.isConnected) {
    await client.connect();
  }
}

const bookCollection = client.db("Bookify").collection("books");

const getBooks = async () => {
  await connect();
  return await bookCollection.find().toArray();
};

const getBookById = async (id) => {
  await connect();
  return await bookCollection.findOne({ _id: new ObjectId(id) });
};

const addBook = async (newBook) => {
  await connect();
  return await bookCollection.insertOne(newBook);
};

module.exports = {
  getBooks,
  getBookById,
  addBook,
};

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://vbalte:215244708@cluster0-ushkr.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  }
);

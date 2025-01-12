const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let appointSchema = new Schema(
  {
    nama: {
      type: String,
    },
    umur: {
      type: Number,
    },
    jenis_kelamin: {
      type: String,
    },
    poli: {
      type: String,
    },
    tanggal: {
      type: Date,
    },
    status: {
      type: String,
    },
  },
  {
    collection: "appointments",
  }
);

module.exports = mongoose.model("Appointment", appointSchema);

// module.exports = Book;

import mongoose from 'mongoose';

const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number }
});

PersonSchema.statics = {
  addOne() {
    return this.create({
      name: 'John Doe',
      age: 33
    });
  },

  list() {
    return this.find();
  }
};

export default mongoose.models.Person || mongoose.model('Person', PersonSchema);

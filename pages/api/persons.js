import { dbConnection } from '@lib/dbConnect';
import Person from '@models/Person';

export default async (req, res) => {
  const { method } = req;

  try {
    await dbConnection();

    let persons;
    let person;
    switch (method) {
      case 'GET':
        persons = await Person.list();
        res.status(200).json({
          success: true,
          data: persons
        });
        return;
      case 'POST':
        person = await Person.addOne();
        res.status(201).json({ success: true, data: person });
        return;
      default:
        res.status(404).json({ success: false });
    }
  } catch (e) {
    res.status(400).json({ success: false });
  }
};

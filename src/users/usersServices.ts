import { Request, Response } from 'express';

const getAllUsers = async (req: Request, res: Response) => {
  //const users = await User.find();
  //res.status(200).json(users);
  return res.send([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'John Smith' },
    { id: 4, name: 'Jane Smith' },
  ]);
};

export default getAllUsers;

import { Router } from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController';
import { userSchema } from '../middlewares/userValidate';

const router = Router();

router.get('/', getUsers);
router.get('/:userId', getUserById);
router.post('/', userSchema, createUser);
router.put('/:userId', userSchema, updateUser);
router.delete('/:userId', deleteUser);

export default router;

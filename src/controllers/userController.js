const userService = require('../services/userService');
const { validateUser, validateUserUpdate } = require('../validators/userValidator');

const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    res.json(users);
};

const getUserById = async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
};

const createUser = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
};

const updateUser = async (req, res) => {
    const { error } = validateUserUpdate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
};

const deleteUser = async (req, res) => {
    const user = await userService.deleteUser(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).send();
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };

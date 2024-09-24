const Router = require('express')
const {
    getAllUsers,
    createUser,
    deleteByid
} = require('../controllers/form.controllers')
const router = Router();



router.get('/', getAllUsers);


router.post('/', createUser);


router.delete('/:id', deleteByid);



module.exports = router;


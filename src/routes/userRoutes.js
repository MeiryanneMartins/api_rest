import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.create);

export default router;

/*
nomes de metódos -- geralmente se cria 5 em cada controller
index -> Lista todos os usuários; GET
store/create -> cria um novo usuário; POST
delete -> apaga um usuário; DELETE
show -> mostra um usuário; GET
update -> atualiza um usuário. PATCH OU PUT

*/
import express from "express";
import CollectionController from "../controllers/collectionController.js";

const collectionRouter = express.Router();

// Rotas de Coleções
// GET /colecoes - Listar todos as Coleções
collectionRouter.get("/", CollectionController.getAllCollections);

// GET /personagens/:id - Obter um Personagem pelo ID
// personagensRouter.get("/:id", PersonagemController.getPersonagemById);

// POST /personagens - Criar um novo Personagem
collectionRouter.post("/", CollectionController.createCollection);

// PUT /personagens/:id - Atualizar um Personagem
// personagensRouter.put("/:id", PersonagemController.updatePersonagem);

// DELETE /personagens/:id - Remover um Personagem
// personagensRouter.delete("/:id", PersonagemController.deletePersonagem);

export default collectionRouter;

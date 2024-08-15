import filmeModel from "../models/filmeModel.js";

class filmes{
    async BuscarTodosOsFilmes(req, res){
        try{
            const filmes = await filmeModel.findAll();
            res.json(filmes);
        } catch(err){
            res.status(500).json({erro: err.message});
        }
    }


    async CadastrarFilme(req, res){
        try{
            const filmeCastrado = await filmeModel.create(req.body);
            res.json({mensage: 'Filme criado com sucesso!', filmeCastrado});
        }
        catch(err){
            res.status(500).json({erro: err.message});
        }
    }
}

export default filmes;



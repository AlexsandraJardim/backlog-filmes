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

    async BuscarFilmePorId(req, res){
        try{
            const filmeEncontrado = await filmeModel.findByPk(req.params.id );
            if(!filmeEncontrado){
                return res.status(404).json({erro: 'Filme não encontrado'});
            }
            return res.json(filmeEncontrado);// se não usar o return vai dar erro, falando que vc está querendo mandar duas mensagens.
        }
        catch(err){
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

    async AtualizarFilme(req, res){
        try{
            const [atualizado] = await filmeModel.update(req.body, { where: {id: req.params.id}}

            );
            if(atualizada){
                const filmeAtualizado = await filmeModel.findByPk(req.params.id);
                res.json({mesagem: 'Filme atualizado com sucesso!', filme: filmeAtualizado });
            }
            else{
                res.status(404).json({erro: 'Filme não encontrado!'});
            }
        }
        catch(err){
            res.status(500).json({erro: err.message});
            
        }
    }
}

export default filmes;



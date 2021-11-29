import Post from '../models/Post.js';
import PostService from '../services/PostService.js';

class PostController{
    async create(req, res){
        try{
            const post = await PostService.create(req.body, req.files.picture);
            res.status(200).json(post);
        }catch(e){
            res.status(500).json(e);
        }
    }

    async getAll(req, res){
        try{
            const posts = await PostService.getAll();
            return res.status(200).json(posts);
        }catch(e){
            res.status(500).json(e);
        }
    }

    async getOne(req, res){
        try{
            const posts = await PostService.getOne(req.params.id);
            return res.status(200).json(posts);
        }catch(e){
            res.status(500).json(e);
        }
    }

    async update(req, res){
        try{
            const updatedPost = await PostService.update(req.body);
            return res.status(200).json(updatedPost);
        }catch(e){
            res.status(500).json(e);
        }
    }

    async delete(req, res){
        try{
            const post = await PostService.delete(req.params.id);
            return res.status(200).json(post);
        }catch(e){
            res.status(500).json(e);
        }
    }
}

export default new PostController();
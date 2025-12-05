const movieModel = require("../UserModel/moviemodel");



const addmovie = async (req, res) => {
    const data = await movieModel.create(req.body);
    res.send(data);
};

const allmovie= async (req, res) => {
    const data = await movieModel.find();
    res.send(data);
};

const Deletemovie = async (req, res) => {
    const data = await movieModel.findByIdAndDelete(req.params.id);
    res.send({ message: "User Deleted", data });
};

const Editmovie = async (req, res) => {
    const id = req.params.id;
    const data = await movieModel.findByIdAndUpdate(id, req.body);
    res.send(data);
};

module.exports = { addmovie, allmovie, Deletemovie, Editmovie };




const { Serie } = require('../db');

//obtener todas las series con unicamente los valores solicitados
const getAllSeries = async () => {
    const serieInDB = await Serie.findAll();

    const serieInfo = await serieInDB.map(s => {

        return{
            id: s.id,
            name: s.name,
            description: s.description,
            date: s.date,
            stars: s.stars,
            gender: s.gender,
            price: s.price,
            atp: s.atp,
            state: s.state
        }
    })
    
return serieInfo;
}

//obtener la serie por su id de busqueda con todos sus detalles
const getDetailsSeries = async (id) => {
    try {
        return await Activity.findOne({
            where: {
                id: id,
            }
        })
    } catch (err) {
        return(err);
    }
}


module.exports = {
    getAllSeries,
    getDetailsSeries
}


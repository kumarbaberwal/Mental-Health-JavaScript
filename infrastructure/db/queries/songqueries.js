const db = require('..');

const getAllSongs = async () => {
    const result = await db.query('select * from songs');
    return result.rows;
}


// console.log(getAllSongs);

module.exports = {getAllSongs};
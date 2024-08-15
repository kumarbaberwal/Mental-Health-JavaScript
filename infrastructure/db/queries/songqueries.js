const db = require('../index');

const getAllSongs = async () => {
    const result = await db.query('SELECT * FROM public.songsdata ORDER BY id ASC');
    return result.rows;
};

module.exports = { getAllSongs };

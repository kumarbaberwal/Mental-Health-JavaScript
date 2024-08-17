const GetSongs = require("../../application/use-cases/getsong");

class SongController {
    static async all(req, res) {
        try {
            const getSongs = new GetSongs();
            const songs = await getSongs.execute();
            res.json(songs);
            // console.log(songs);
            // console.log(res.json(songs));
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = SongController;

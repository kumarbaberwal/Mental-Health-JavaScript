const GetAdviceByMood = require("../../application/use-cases/getadvicebymood");
const GetDailyQuotes = require("../../application/use-cases/getdailyquotes");
const GeminiApi = require("../../infrastructure/gemini/geminiservice")

class MeditationController {
    static async dailyQuote(req, res) {
        try {
            const quotesRepository = new GeminiApi();
            const getDailyQuotes = new GetDailyQuotes(quotesRepository);
            const quotes = await getDailyQuotes.execute();
            req.json(quotes);
        }
        catch(error) {
            res.status(500).json({
                error : error.message
            });
        }
    }
    static async myMood(req, res) {
        try {
            const {mood} = req.params;
            const quotesRepository = new GeminiApi();
            const getAdviceByMood = new GetAdviceByMood(quotesRepository);
            const quotes = await getAdviceByMood.execute();
            req.json(quotes);
        }
        catch(error) {
            res.status(500).json({
                error : error.message
            });
        }
    }
}

module.exports = MeditationController;
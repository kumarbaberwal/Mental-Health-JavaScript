const { GoogleGenerativeAI } = require("@google/generative-ai");
const QuotesRepository = require("../../application/interfaces/quotesrepository");

const genAi = new GoogleGenerativeAI({ apiKey: "AIzaSyBa_O8vomjJDsbuC7hxNCSMOzEhpIPu1l4" });
const model = genAi.getGenerativeModel({ model: "gemini-1.5-pro" });

class GeminiApi extends QuotesRepository {

    async getDailyQuotes() {
        const prompt = `Please provide the inspiration quotes for meditation, one for each part of the day: morning, noon, and evening. 
        Return the response in JSON format with the following structure: 
        {
            "morningQuote": "Your morning quote here",
            "noonQuote": "Your noon quote here",
            "eveningQuote": "Your evening quote here"
        }. Return the JSON only, without using the keyword 'json'.`;
        
        const result = await model.generateContent({ prompt });
        const response = result.response;
        const text = await response.text();
        return JSON.parse(text);
    }

    async getAdviceByMood(mood) {
        const prompt = `Given the current mood of the user, provide appropriate meditation advice or a mental health exercise. 
        The possible response format should be:
        {
            "advice": "Engage in a gratitude practice by listing three things you are thankful for today. This will also help sustain your positive mood."
        }
        so the mood is "${mood}".
        Return the JSON only, without using the keyword 'json'.`;
        
        const result = await model.generateContent({ prompt });
        const response = result.response;
        const text = await response.text();
        return JSON.parse(text);
    }
}

module.exports = GeminiApi;

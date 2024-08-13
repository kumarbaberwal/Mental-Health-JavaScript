const Meditation = require("../../domain/entities/meditation");
const UsecaseInterface = require("../interfaces/usecaseInterface");

class GetDailyQuotes extends UsecaseInterface{
    constructor(quotesRepository){
        super();
        this.quotesRepository = quotesRepository;
    }

    async execute(){
        const quotesData = await this.quotesRepository.getDailyQuotes();
        return new Meditation({text: quotesData});
    }
}

module.exports = GetDailyQuotes;
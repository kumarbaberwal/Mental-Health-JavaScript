const UsecaseInterface = require("../interfaces/usecaseInterface");

class GetAdviceByMood extends UsecaseInterface{
    constructor(quotesRepository){
        super();
        this.quotesRepository = quotesRepository;
    }

    async execute(mood){
        const quotesData = await this.quotesRepository.GetAdviceByMood(mood);
        return new Meditation({text: quotesData});
    }
}


module.exports = GetAdviceByMood;
class Queries{
    constructor(queryObj, config){
        this.conversion = config.conversion
        this.queryObj = queryObj
        this.nPast = []
        this.i = 0
        this.config = config.algoConfig[config.algorithm]
    }

    async initialFetch(){
        if(this.config.data.type == "candles"){
            this.nPast = await this.initFetchCandles(this.config)
        }

    }

    async initFetchCandles(){
        return await this.queryObj.getCandleVals
                        (this.conversion, this.config.data.timeFrame,
                            this.config.fetchConfig.nTest)
    }

    getCandleVals(conversion, duration, limit){

        if(this.config.data.timeFrame == duration && this.conversion == conversion){
            var currVals = this.nPast.slice(this.i, this.i+limit);
            this.i+=limit
            return currVals
        }
        else{
            console.log("error there is a mismatch")
        }
    }

    getTime(){
        return this.queryObj.getTime()
    }

    getcurrentPrice(conversion){
        if(this.data.type == "candles"){
            return this.nPast[i].open
        }
    }
    

}

module.exports = Queries
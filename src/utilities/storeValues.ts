interface storeInterface{
    option:string[]
    area:number[]
    areaInputs:string[]
    setOption(opt:string):void
    getOption():string[]
    setArea(calArea:number):void
    getArea():number[]
    setInputs(inp:string):void
    showInputs():string[]
}

class StoreOption implements storeInterface{
    option:string[]=[]
    area:number[]=[]
    areaInputs:string[]=[]
    constructor() {
        this.option=[]
        this.area=[]
        this.areaInputs=[]        
        return Object.freeze(this)
    }
    setOption = (opt:string):void => {
        this.option.splice(0,1,opt)
    }
    getOption = ():string[] => {
       return this.option 
    }
    setArea = (calArea:number):void => {
        this.area.splice(0,1,calArea)        
    }

    getArea = ():number[] => {
       return this.area        
    }

    setInputs = (inp:string):void => {
        this.areaInputs.splice(0,1,inp)        
    }
    showInputs = ():string[] => {
        return this.areaInputs           
    }
}

const storeData = new StoreOption()
export default storeData
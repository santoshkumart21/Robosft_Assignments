class StoreOption {
    constructor() {
        this.option=[]
        this.area=[]
        this.areaInputs=[]
        StoreOption.instance=this
        return StoreOption.instance
    }
    setOption = (opt) => {
        this.option.splice(0,1,opt)
    }
    getOption = () => {
       return this.option 
    }
    setArea = (calArea) => {
        this.area.splice(0,1,calArea)        
    }

    getArea = () => {
       return this.area        
    }

    setInputs = (inp) => {
        this.areaInputs.splice(0,1,inp)        
    }
    showInputs = () => {
        return this.areaInputs           
    }
}

const options = new StoreOption()
Object.freeze(options)
export default options

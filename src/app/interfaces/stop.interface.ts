
export interface IStop {
    name:string,
    line:number,
    arriveHour?:string[],
    exitHour?:string[],
    orderUp?:number,
    orderDown?:number,
    coordinates:any[];  
}

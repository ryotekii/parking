export default class Spot{
    static id:number=1;
    parking_id:number;

    constructor(pi:number){
        this.parking_id=pi;
        Spot.id++;
    }
}
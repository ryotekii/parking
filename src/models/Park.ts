import { generateRandomNumberId } from "../utils/generateRandomNumberId";

export default class Park{
    id:number;
    spot_id:number;
    startedAt?:Date;
    endedAt?:Date;
    price:number;
    paid:boolean=false;

    constructor(si:number,p:number,id?:number){
        if (!id){
            this.id=generateRandomNumberId();
        } else {
            this.id=id;
        }
        this.spot_id=si;
        this.price=p;
    }

}
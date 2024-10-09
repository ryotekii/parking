import {Parking} from "../models/Parking";
import {City} from "../models/City";


var aip = new City(1,"Aix-en-Provence","France",{latitude:43.533323,longitude:5.43333});
var ls = new City(2,"La spezia","Italie",{latitude:44.238366,longitude:9.6912326});
var alp = new City(3,"Aix-la-Chapelle","Allemagne",{latitude:50.776351,longitude:6.083862});
var scll = new City(4,"San Cristobal de La Laguna","Espagne",{latitude:28.487180709838867,longitude:-16.313879013061523});
var ncut = new City(5,"Newcastle upon Tyne","Angleterre",{latitude:54.9738474,longitude:-1.6131572});
var parkingA = new Parking("A",100,4.5,aip);
aip.add(parkingA);
var parkingB = new Parking("B",50,3,ls);
var parkingC = new Parking("C",80,2.5,ls);
ls.add(parkingB);
ls.add(parkingC);
var parkingD = new Parking("D",40,2.80,alp);
alp.add(parkingD);
var parkingE = new Parking("E",70,3.10,scll);
scll.add(parkingE);
var parkingF = new Parking("F",60,2.40,ncut);
var parkingG = new Parking("G",90,3.20,ncut);
ncut.add(parkingF);
ncut.add(parkingG);

export var cities:City[]=[aip,ls,alp,scll,ncut];
export var parkings:Parking[]=[parkingA,parkingB,parkingC,parkingD,parkingE,parkingF,parkingG];

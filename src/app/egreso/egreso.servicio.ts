import { Egreso } from "./egreso.model";

export class EgresoServicio{

    egresos:Egreso[]=[
        new Egreso("renta dpto" , 9000),
        new Egreso("ropa",200)
    ];

    eliminar(egreso:Egreso){
        const indice:number = this.egresos.indexOf(egreso)
        this.egresos.splice(indice,1)
    }
}
export default class Electrodomestico{

    constructor(consumo,procedencia){
        this.precio=0;
        this.consumo = consumo;
        this.procedencia = procedencia;
    }

    calcularPrecio() {
        this.calcularConsumo();
        this.calcularProcedencia();
        return this.precio;
    }

    calcularConsumo(){
        switch(this.consumo){
            case 'A':
                this.precio+= 450000;
                break;
            case 'B':
                this.precio+= 350000;
                break
            case 'C':
                this.precio+= 250000;
                break;
            default:
                console.log("No se define el consumo");
                break;
        }
    }

    calcularProcedencia(){
        if(this.procedencia){
            this.precio+= 250000;
        }else{
            this.precio+= 350000;
        }
    }


}
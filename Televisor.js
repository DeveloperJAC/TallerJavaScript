class Televisor extends Electrodomestico {
    constructor(consumo, procedencia, tamano, TDT) {
        super(procedencia, consumo);
        this.tamano = tamano;
        this.TDT = TDT;
    }

    calcularPrecio() {
        this.calcularConsumo();
        this.calcularProcedencia();
        this.calcularTamano();
        this.calcularTDT();
        return this.precio;
    }

    calcularTDT() {
        if (this.TDT) {
            this.precio += 250000;
        }
    }

    calcularTamano() {
        if (this.tamano > 40) {
            this.precio += this.precio * 0.3;
        }
    }


}
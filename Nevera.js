export class Nevera extends Electrodomestico {
    constructor(consumo, procedencia, capacidad) {
        super(consumo, procedencia);
        this.capacidad = capacidad;
    }

    calcularPrecio() {
        this.calcularConsumo();
        this.calcularProcedencia();
        this.calcularCapacidad();
        return this.precio;
    }

    calcularCapacidad() {
        if (this.capacidad > 120) {
            let incremento = (this.capacidad - 120) / 10;
            Math.floor(incremento);
            this.precio += (this.precio * 0.05) * incremento;
        }
    }
}
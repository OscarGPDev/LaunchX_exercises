package Semana1;

public class Bicicleta {


    public int pins, rodada;
    public double velocidad;
    public String color;

    public int getPins() {
        return pins;
    }

//    public void setPins(int pins) {
//        this.pins = pins;
//    }

    public int getRodada() {
        return rodada;
    }

//    public void setRodada(int rodada) {
//        this.rodada = rodada;
//    }

    public double getVelocidad() {
        return velocidad;
    }

    //    public void setVelocidad(double velocidad) {
//        this.velocidad = velocidad;
//    }
    public boolean setPins(int pins) {
        if (pins > 0) {
            this.pins = pins;
            return true;
        } else
            return false;
    }

    public boolean setRodada(int rodada) {
        if (rodada > 0) {
            this.rodada = rodada;
            return true;
        } else
            return false;
    }

    public boolean setVelocidad(double velocidad) {
        if (velocidad >= 0) {
            this.velocidad = velocidad;
            return true;
        } else
            return false;
    }

    public String printState() {
        return "pins: " + pins + "\nrodada: " + rodada + "\nvelocidad" + velocidad;
    }

    public boolean setColor(String color) {
        if (!color.isEmpty()) {
            this.color = color;
            return true;
        } else
            return false;
    }
    public String getColor() {
        return this.color;
    }
}

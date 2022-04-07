package Semana1;

public class PruebaBicicleta {

    public static void main(String[] args) {
        def();
    }
    public static void def(){
        Bicicleta bicicletaMontania = new Bicicleta();
        bicicletaMontania.setColor("Negra");
        bicicletaMontania.setPins(6);
        bicicletaMontania.setRodada(26);
        bicicletaMontania.setVelocidad(13.2);
        String msg="Soy una bici de montaña con estas caracteristicas: ";
        msg +="\nColor: "+bicicletaMontania.getColor();
        msg +="\nVelocidad: "+bicicletaMontania.getVelocidad();
        msg +="\nPins: "+bicicletaMontania.getPins();
        msg +="\nRodada: "+bicicletaMontania.getRodada();
        System.out.print(msg);
    }

}

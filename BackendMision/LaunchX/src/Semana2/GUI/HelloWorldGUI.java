package Semana2.GUI;



public class HelloWorldGUI {
    public static void main(String[] args) {
        Screen screen = new Screen();
        Dialog d=new Dialog();
        screen.out("Hello");
        screen.setVisible(true);
        if(d.readString("Entrada").toLower()=="s"){
            screen.showImage();
            screen.out("hola");
        }
        screen.out("en otro momento xd");
    }
}

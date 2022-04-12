package Semana2;

abstract class Shadow{
    abstract void drawShadow();
}
class Weapon extends Shadow{
    void drawShadow(){
        System.out.println("Shadow of weapon");
    }
}
public class Character extends Weapon{
    public static void main(String[] args) {
        Shadow character = new Character();
        Shadow weapon=new Weapon();
        character.drawShadow();
        weapon.drawShadow();
    }

    @Override
    void drawShadow() {
        System.out.println("Shadow of Character");
    }
}

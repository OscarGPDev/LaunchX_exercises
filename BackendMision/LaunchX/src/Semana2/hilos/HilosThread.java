package Semana2.hilos;

public class HilosThread extends Thread{
    @Override
    public void run(){
        System.out.println("El hilo se esta ejecutando");
    }
    public void start(){

    }
/*join
getPriority
setPriority
getName
currentThread
getId
Thread.State
 */


    public static void main(String[] args) {
        HilosThread obj= new HilosThread();
        obj.start();
    }
}

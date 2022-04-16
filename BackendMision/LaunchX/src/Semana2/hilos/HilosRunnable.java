package Semana2.hilos;

public class HilosRunnable  implements Runnable {
    @Override
    public void run() {
        System.out.println("Running");
    }

    public static void main(String[] args) {
        HilosRunnable h = new HilosRunnable();
        Thread t = new Thread(h);
        t.start();
    }
}

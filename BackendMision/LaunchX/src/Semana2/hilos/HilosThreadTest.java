package Semana2.hilos;

public class HilosThreadTest extends Thread {
    public static void main(String[] args) {
        HilosThreadTest h = new HilosThreadTest();
        h.start();
//        Thread t = new Thread(h);
//        t.start();
//        t.wait();

    }

    @Override
    public void run() {
        for (int i = 1; i <= 10; i++) {
            try {
                Thread.sleep(500);
                System.out.println(i);

            }catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}

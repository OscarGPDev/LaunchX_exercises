package Semana2.hilos;

public class HilosRunnableTest implements Runnable {
    public static void main(String[] args) {
        HilosRunnableTest h = new HilosRunnableTest();
        Thread t = new Thread(h);
        t.start();


    }

    @Override
    public void run() {
        for (int i = 1; i <= 10; i++) {
            try {
                Thread.sleep(500);
                System.out.println(i);

            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}

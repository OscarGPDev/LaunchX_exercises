package Semana2.hilos;

public class HilosTestJoin extends Thread {
    public static void main(String[] args) {
        HilosTestJoin x = new HilosTestJoin(),
                x1 = new HilosTestJoin(),
                x2 = new HilosTestJoin();
        showDetails(new HilosTestJoin[]{x, x1, x2});
        x.start();
        try{
            x.setName("Launch x");
            x.join(1500);
            x.setPriority(MAX_PRIORITY);
            showDetails(new HilosTestJoin[]{x, x1, x2});
        } catch (Exception e) {
            e.printStackTrace();
        }
        x1.start();
        x2.start();
    }

    public static void showDetails(HilosTestJoin[] xd) {
        for (HilosTestJoin hilo : xd
        ) {
            System.out.println("" + hilo.getName() + hilo.getId() + hilo.getPriority());
        }

    }

    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            try {
                Thread.sleep(500);
                System.out.println(i);

            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

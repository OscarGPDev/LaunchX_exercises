package Semana2.hilos;

public class Multitask extends Thread {
    public static void main(String[] args) {
        Multitask m0 = new Multitask(),
                m1 = new Multitask(),
                m2 = new Multitask();
        m0.start();
        m1.start();
        m2.start();
    }

    @Override
    public void run() {
        System.out.println("tarea1");
    }
}

class Multitasking implements Runnable {
    public static void main(String[] args) {
        Thread t0 = new Thread(new Multitasking());
        Thread t1 = new Thread(new Multitasking());
        t0.start();
        t1.start();
        Task1 tsk1 = new Task1();
        Task2 tsk2 = new Task2();
        tsk1.start();
        tsk2.start();
        Runnable task1 = new Runnable() {
            @Override
            public void run() {
                System.out.println("tarea 1");
            }
        };
        Runnable task2 = new Runnable() {
            @Override
            public void run() {
                System.out.println("Tarea 2");
            }
        };
        t0 = new Thread(task1);
        t1 = new Thread(task2);
    }

    @Override
    public void run() {
        System.out.println("tarea 1");
    }
}

class Task1 extends Thread {
    @Override
    public void run() {
        System.out.println("tarea A, runnable");
    }
}

class Task2 extends Thread {
    @Override
    public void run() {
        System.out.println("tarea B, runnable");
    }
}
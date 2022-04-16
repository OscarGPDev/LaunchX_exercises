package Semana2.IO;

import java.io.FileInputStream;
import java.io.IOException;

public class IOTest3 {
    public static void main(String[] args) {
        Runnable test = new Runnable() {
            @Override
            public void run() {
                try {
                    FileInputStream fis = new FileInputStream("./magia.txt");
                    int i = 0;
                    while ((i = fis.read()) != -1) {
                        System.out.println((char) i);

                    }
                    fis.close();
                } catch (
                        IOException e) {

                }
            }
        };
        Thread t = new Thread(test);
        t.start();
    }
}

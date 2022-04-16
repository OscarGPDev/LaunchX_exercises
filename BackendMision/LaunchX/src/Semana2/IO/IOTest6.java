package Semana2.IO;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.IOException;

public class IOTest6 {
    public static void main(String[] args) {
        Runnable test = new Runnable() {
            @Override
            public void run() {
                try {
                    FileInputStream fis = new FileInputStream("./magia.txt");
                    BufferedInputStream bi = new BufferedInputStream(fis);
                    int i = 0;
                    while ((i = bi.read()) != -1) {
                        System.out.print((char) i);
                    }

                    bi.close();
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

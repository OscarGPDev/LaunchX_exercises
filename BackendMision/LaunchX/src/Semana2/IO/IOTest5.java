package Semana2.IO;

import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class IOTest5 {
    public static void main(String[] args) {
        Runnable test = new Runnable() {
            @Override
            public void run() {
                try {
                    FileOutputStream fos = new FileOutputStream("./magia.txt");
                    BufferedOutputStream bo = new BufferedOutputStream(fos);
                    bo.write("xd".getBytes());
                    bo.flush();
                    bo.close();
                    fos.close();
                } catch (
                        IOException e) {

                }
            }
        };
        Thread t = new Thread(test);
        t.start();
    }
}

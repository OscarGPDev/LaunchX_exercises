package Semana2.IO;

import java.io.FileOutputStream;
import java.io.IOException;

public class IOTest1 {
    public static void main(String[] args) {
        Runnable r=new Runnable(){
            @Override
            public void run() {
                try{
                    FileOutputStream fos=new FileOutputStream("./magia.txt");
                    fos.write("Magia!".getBytes());
                    fos.close();
                }catch (IOException e){

                }
            }
        };
        Thread t=new Thread(r);
        t.start();

    }
}
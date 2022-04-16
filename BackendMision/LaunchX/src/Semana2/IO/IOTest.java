package Semana2.IO;

import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

public class IOTest {
    public static void main(String[] args) {
        Runnable r=new Runnable(){
            @Override
            public void run() {
                try{
                    FileOutputStream fos=new FileOutputStream("./test.txt");
                    fos.write(65);
                    fos.close();
                }catch (IOException e){

                }
            }
        };
        Thread t=new Thread(r);
        t.start();

    }
}


import java.util.*;

public class ex {
    public static void main(String[] args) {
        int n = makeBeautiful("1001");

        System.out.println(n);
    }

    private static String gen(int n, int val) {
        String str = "";
        if (val == 0) {
            while (n != 0 && n!=1) {
                str += "0";
                str += '1';
                n -= 2;
            }
            if (n == 1) {
                str += "0";
            }
        } else {
            while (n != 0 && n!=1) {
                str += '1';
                str += "0";
                n -= 2;
            }
            if (n == 1) {
                str += "1";
            }
        }
        return str;
    }

    public static int makeBeautiful(String str) {
        String s1 = gen(str.length(), 0);
        String s2 = gen(str.length(), 1);
        int ct1 = 0, ct2 = 0;
        for (int i = 0; i < str.length(); i++) {
            if (s1.charAt(i) != str.charAt(i)) {
                ct1++;
            }
            if (s2.charAt(i) != str.charAt(i)) {
                ct2++;
            }
        }
        return Math.min(ct1, ct2);
    }

}
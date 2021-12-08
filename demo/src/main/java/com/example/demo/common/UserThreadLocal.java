package com.example.demo.common;

/**
 * store username is user thread for application use
 */
public class UserThreadLocal {

    private static ThreadLocal<String> threadLocalValue = new ThreadLocal<>();

    public static String getUserName(){
        return threadLocalValue.get();
    }

    public static void setUserName(String userName){
        threadLocalValue.set(userName);
    }

    public static void clear(){
        threadLocalValue.remove();
        threadLocalValue.set(null);
    }
}

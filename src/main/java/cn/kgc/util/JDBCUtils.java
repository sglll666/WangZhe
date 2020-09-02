package cn.kgc.util;

import com.mchange.v2.c3p0.ComboPooledDataSource;

import java.sql.Connection;
import java.sql.SQLException;

public class JDBCUtils {
    private  static ComboPooledDataSource helloc3p0;
    static {
        helloc3p0 = new ComboPooledDataSource("helloc3p0");
    }
    public static Connection getConnection(){
        //ComboPooledDataSource con = new ComboPooledDataSource("helloc3p0");
        Connection connection = null;
        try {
             connection = helloc3p0.getConnection();
            System.out.println(connection);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return  connection;
    }

    public static  void close(Connection con){
        try {
            con.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}

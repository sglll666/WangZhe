package cn.kgc.Dao;


import cn.kgc.util.JDBCUtils;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.sql.Connection;
import java.util.List;

public class BaseDao<T> {
  //private Address address
    private Class<T> type;
    public BaseDao(){
        ParameterizedType pt = (ParameterizedType) this.getClass().getGenericSuperclass();
        Type[] types = pt.getActualTypeArguments();
        type = (Class<T>) types[0];
    }

    QueryRunner runner = new QueryRunner();

    //查询多个
    public List<T> queryAll(String sql,Object...args){
        List<T> list = null;
        Connection connection = JDBCUtils.getConnection();
        try {
            list = runner.query(connection, sql, new BeanListHandler<T>(type), args);
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            JDBCUtils.close(connection);
        }
        return list;
    }

    //查询一个
    public T queryOne(String sql,Object...args){
        T t = null;
        Connection connection = JDBCUtils.getConnection();
        try {
            t = runner.query(connection, sql, new BeanHandler<T>(type), args);
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            JDBCUtils.close(connection);
        }
        return t;
    }

    //增删改
    public int updateObj(String sql,Object...args){
        Connection connection = JDBCUtils.getConnection();
        int count = 0;
        try {
             count = runner.update(connection, sql, args);
        } catch (Exception e) {
            e.printStackTrace();
        }finally {
            JDBCUtils.close(connection);
        }
        return count;
    }

}

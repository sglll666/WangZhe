package cn.kgc.Dao;

import cn.kgc.entity.User;

import java.util.List;

public interface UserDao {
    public User getUserByUserNameANDPassword(User user);
    // 增加
    public int saveUser(User user);
    //删除
    public int delUser(String id);
    //修改
    public  int updateUser(User user);
    //查一个用户
    User getUserById(String id);
    //查全部用户
    List<User> getAll();


}

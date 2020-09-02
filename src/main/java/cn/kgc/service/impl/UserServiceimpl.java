package cn.kgc.service.impl;


import cn.kgc.Dao.UserDao;
import cn.kgc.Dao.UserDaoImpl.UserDaoimpl;

import cn.kgc.entity.User;
import cn.kgc.service.UserService;

import java.util.List;

public class UserServiceimpl implements UserService {
    UserDao userDao = new UserDaoimpl();
    @Override
    public User getUserByUserNameANDPassword(User user) {
        return userDao.getUserByUserNameANDPassword(user);
    }

    @Override
    public int saveUser(User user) {
        return userDao.saveUser(user);
    }

    @Override
    public int delUser(String id) {
        return userDao.delUser(id);
    }

    @Override
    public int updateUser(User user) {
        return userDao.updateUser(user);
    }

    @Override
    public User getUserById(String id) {
        return userDao.getUserById(id);
    }

    @Override
    public List<User> getAll() {
        return userDao.getAll();
    }
}

package cn.kgc.Test;

import cn.kgc.entity.User;
import cn.kgc.service.UserService;
import cn.kgc.service.impl.UserServiceimpl;

public class TestUserService {
    public static void main(String[] args) {
        UserService userService = new UserServiceimpl();
        User user = new User();
        user.setid("107");
        System.out.println(userService.getUserById(user.getid()));
    }
}

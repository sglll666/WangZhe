package cn.kgc.Servlet;

import cn.kgc.entity.User;
import cn.kgc.service.UserService;
import cn.kgc.service.impl.UserServiceimpl;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class UpdateServlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      /*  String id = req.getParameter("id");
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        String email = req.getParameter("email");

        UserService userService = new UserServiceimpl();
        User user = new User();
        user.setid(id);
        user.setusername(username);
        user.setpassword(password);
        user.setemail(email);
        int i = userService.updateUser(user);
        if(i == 1){
            resp.sendRedirect("/WangZheRongYao_war/UserListServlet");
        }*/
        String id = req.getParameter("id");
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        String email = req.getParameter("email");

        UserService userService = new UserServiceimpl();
        User user = new User();
        user.setid(id);
        user.setusername(username);
        user.setpassword(password);
        user.setemail(email);
        int i = userService.updateUser(user);
        if(i==1){
            resp.sendRedirect("/WangZheRongYao_war/UserListServlet");
        }
    }
}

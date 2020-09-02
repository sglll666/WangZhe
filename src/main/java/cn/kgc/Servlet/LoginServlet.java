package cn.kgc.Servlet;

import cn.kgc.entity.User;
import cn.kgc.service.UserService;
import cn.kgc.service.impl.UserServiceimpl;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class LoginServlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter("username");
        String password = req.getParameter("password");

        UserService userService = new UserServiceimpl();
        User user = new User();
        user.setusername(username);
        user.setpassword(password);
        User login = userService.getUserByUserNameANDPassword(user);
        if(null != login){
            HttpSession session = req.getSession();
            session.setAttribute("username",username);
            resp.sendRedirect("/WangZheRongYao_war/UserListServlet");
        }else {
            req.setAttribute("msg","用户名或者密码错误！！！");
            req.getRequestDispatcher("index.jsp").forward(req,resp);
        }

    }
}

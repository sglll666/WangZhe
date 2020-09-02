package cn.kgc.Servlet;

import cn.kgc.entity.User;
import cn.kgc.service.UserService;
import cn.kgc.service.impl.UserServiceimpl;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class UpdatePageServlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String id = req.getParameter("id");
        UserService userService = new UserServiceimpl();

        User user = userService.getUserById(id);
        System.out.println(user);
        req.setAttribute("user",user);
   /*     resp.sendRedirect("/jsp/update.jsp");*/
        req.getRequestDispatcher("/jsp/update.jsp").forward(req,resp);
    }
}

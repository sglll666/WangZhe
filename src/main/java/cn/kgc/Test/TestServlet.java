package cn.kgc.Test;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class TestServlet extends HttpServlet {
    public static void main(String[] args) {

    }
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("utf-8");
        //resp.setCharacterEncoding("utf-8");
        // 第一种：resp.setHeader("Content-Type","Text/html;Charset=utf-8");
        resp.setContentType("Text/html;Charset=utf-8");
        String username = req.getParameter("username");
        System.out.println(username);
        resp.getWriter().println(username);
    }
}

<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/9/2
  Time: 18:09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" isELIgnored="false" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="/WangZheRongYao_war/UpdateServlet" method="post">
    <input type="hidden" name="id" value="${requestScope.user.id}">
    用户名：<input type="text" name="username" value="${requestScope.user.username}"><br/>
    密码：<input type="password" name="password" value="${requestScope.user.password}"><br/>
    邮箱：<input type="text" name="email" value="${requestScope.user.email}"><br/>
    <input type="submit" value="提交">

</form>
</body>
</html>

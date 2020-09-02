<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.ArrayList" %><%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2020/8/26
  Time: 23:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" isELIgnored="false" language="java" %>
<script type="text/javascript" src="../script/jquery-1.7.2.js"></script>
<script type="text/javascript">
    $(function () {
        $(".delbtn").click(function () {
            var name = $(this).parents().find("td:eq(1)").text();
            flag = confirm("确认要删除"+name+"吗？");
            if(!flag){
                return false;
            }
        })
    })
</script>
<html>
<head>
    <title>Title</title>
</head>
<body>

<c:if test="${empty all}">
    <h1>没有值</h1>
</c:if>
<c:if test="${! empty all}">
   欢迎你：<span style="color: #38ff38;" align="left">${username}</span>
    <table border="2" cellpadding="1" cellspacing="1" align="center">
        <tr style="color:chartreuse;" align="center">
            <td>编号</td>
            <td>姓名</td>
            <td>密码</td>
            <td>邮箱</td>
            <td colspan="2">操作</td>
        </tr>
        <c:forEach items="${all}" var="h">
            <tr style="color: aqua;" align="center">
                <td>${h.id}</td>
                <td>${h.username}</td>
                <td>${h.password}</td>
                <td>${h.email}</td>
                <td>
                    <a href="/WangZheRongYao_war/UpdatePageServlet?id=${h.id}">修改</a>
                    <a href="/WangZheRongYao_war/DelUserServlet?id=${h.id}" class="delbtn" >删除</a>
                </td>
            </tr>
        </c:forEach>
    </table>
</c:if>
<hr/>
<a href="jsp/add.jsp">增加</a>

</body>
</html>

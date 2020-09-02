package cn.kgc.Dao.UserDaoImpl;



import cn.kgc.Dao.BaseDao;
import cn.kgc.Dao.UserDao;
import cn.kgc.entity.User;
import java.util.List;


public class UserDaoimpl extends BaseDao<User> implements UserDao {

    @Override
    public User getUserByUserNameANDPassword(User user) {
        String sql = "select * from servlet where username=? and password=?";
        return queryOne(sql,user.getusername(),user.getpassword());
    }

    @Override
    public int saveUser(User user) {
        String sql = "insert into servlet(username,password,email) values(?,?,?)";
        return updateObj(sql,user.getusername(),user.getpassword(),user.getemail());
    }

    @Override
    public int delUser(String id) {
        String sql = "delete  from servlet where id=?";
        return updateObj(sql,id);
    }

    @Override
    public int updateUser(User user) {
        String sql = "update servlet set username=?,password=?,email=? where id=?";
        return updateObj(sql,user.getusername(),user.getpassword(),user.getemail(),user.getid());
    }

    @Override
    public User getUserById(String id) {
        String sql ="select * from servlet where id=?";
        return queryOne(sql,id);
    }

    @Override
    public List<User> getAll() {
        String sql = "select * from servlet";
        return queryAll(sql);
    }
}

package cn.kgc.entity;

public class User {
    private String id;
    private String del_id;
    private String username;
    private String password;
    private String email;

    public User() {
    }

    public User(String id, String username, String password, String email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public User(String id, String del_id, String username, String password, String email) {
        this.id = id;
        this.del_id = del_id;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public String getDel_id() {
        return del_id;
    }

    public void setDel_id(String del_id) {
        this.del_id = del_id;
    }

    public String getemail() {
        return email;
    }

    public void setemail(String email) {
        this.email = email;
    }

    public String getid() {
        return id;
    }

    public void setid(String id) {
        this.id = id;
    }

    public String getusername() {
        return username;
    }

    public void setusername(String username) {
        this.username = username;
    }

    public String getpassword() {
        return password;
    }

    public void setpassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}

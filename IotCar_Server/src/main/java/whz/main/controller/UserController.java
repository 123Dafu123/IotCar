package whz.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("user/api")
public class UserController {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @GetMapping("getUser")
    public List<Map<String, Object>> getUser(@RequestParam Map<String,String> params){
        String sql="select * from users where id=?";
        Object[] args={params.get("id")};
        return jdbcTemplate.queryForList(sql,args);
    }

    @GetMapping("modUser")
    public  boolean modUser(@RequestParam Map<String,String> params){
        String sql="update users set id=?,name=?,pswd=? where id=?";
        Object[] args={params.get("id"),params.get("name"),params.get("pswd")
                ,params.get("oldId")};
        boolean flag=true;

        try {
            jdbcTemplate.update(sql,args);
        }catch (Exception e){
            flag=false;
        }

        return flag;
    }

}

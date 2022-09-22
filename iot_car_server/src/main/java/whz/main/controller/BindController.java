package whz.main.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("bind/api")
public class BindController {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @GetMapping("bindCar")
    public boolean bindHandler(@RequestParam Map<String,String> params){
        String sql="update car set uid=? where id=?";
        boolean flag=true;
        Object[] args={params.get("uid"),params.get("cid")};
        try {
            if(jdbcTemplate.update(sql,args)>=1) return true;
        }catch (Exception ignored){
        }
        sql="update car set uid=( select id from users where phone=? ) where id=?";
        try {
            if(jdbcTemplate.update(sql,args)<1)flag=false;
        }catch (Exception e){
            flag=false;
        }

        return flag;
    }

    @GetMapping("checkBind")
    public List checkBindHandler(@RequestParam Map<String,String> params){
        String sql="select * from car where uid=? or uid=( select id from users where phone=? )";
        Object[] args ={params.get("id"),params.get("id")};
        return jdbcTemplate.queryForList(sql,args);
    }

}

package whz.main.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

//api有更改
@RestController
@CrossOrigin
@RequestMapping("bind/api")
public class BindController {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @GetMapping("bindCar")
    public boolean bindHandler(@RequestParam Map<String,String> params){
        String sql="update car set uid=? where id=?";
        boolean flag;

        Object[] args={params.get("uid"),params.get("cid")};
        try {
            if(jdbcTemplate.update(sql, args) == 1)flag=true;
            else flag=false;
        }catch (Exception exception){
            flag=false;
        }

        return flag;
    }

    @GetMapping("checkBind")
    public List checkBindHandler(@RequestParam Map<String,String> params){
        String sql="select * from car where uid=?";
        Object[] args ={params.get("uid")};

        return jdbcTemplate.queryForList(sql,args);
    }

}

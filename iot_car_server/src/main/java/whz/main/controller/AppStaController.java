package whz.main.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@CrossOrigin
@RequestMapping("appSta/api")
public class AppStaController {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @GetMapping("getSta")
    public List<Map<String,Object>> getHandler(@RequestParam Map<String,String> params){
        String sql="select * from runsta where cid=(select id from car where uid=(select id from users where id=? or phone=?))";
        Object[] args={params.get("id"),params.get("id")};
        List<Map<String,Object>> list=jdbcTemplate.queryForList(sql,args);
        try{
            if(list.get(0).get("connectedSta").equals(1)){
                list.get(0).put("connectedSta",true);
            }else{
                list.get(0).put("connectedSta",false);
            }
        }catch (Exception ignored){}

        return list;
    }

    @GetMapping("setSta")
    public boolean setHandler(@RequestParam Map<String,String> params){
        String sql="update setsta set leftSpeed=?,rightSpeed=?,grea=? where setsta.cid=(select id from car where uid=(select id from users where id=? or phone=?))";
        Object[] args={params.get("leftS"),params.get("rightS"),params.get("grea"),params.get("id"),params.get("id")};
        boolean flag=true;
        try {
            jdbcTemplate.update(sql,args);
        }catch (Exception e){
            flag=false;
        }
        return  flag;
    }
}

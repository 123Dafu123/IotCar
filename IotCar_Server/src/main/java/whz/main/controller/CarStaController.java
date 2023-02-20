package whz.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;
import whz.main.sta.CarConnectedSta;

import java.util.Map;
import static whz.main.sta.CarConnectedStaList.connectedStaList;

@RestController
@CrossOrigin
@RequestMapping("carSta/api")
public class CarStaController{
    @Autowired
    JdbcTemplate jdbcTemplate;

    @GetMapping("regCar")
    public void regCarHandler(@RequestParam Map<String,String> params){
        String sql="insert into car(id) values (?)";
        Object[] args={params.get("id")};
        try{
            jdbcTemplate.update(sql,args);
        }catch (Exception ignored){
        }
    }

    @GetMapping("getSta")
    public Map<String, Object> getStaHandler(@RequestParam Map<String,Object> params) {
        String sql="select leftSpeed,rightSpeed,grea from setsta where cid=?";
        Object[] args={params.get("id")};
        return jdbcTemplate.queryForMap(sql,args);
    }

    @GetMapping("getBindSta")
    public boolean checkBindHandler(@RequestParam Map<String,String> params){
        String sql="select uid from car where id=?";
        Object[] args ={params.get("id")};
        return jdbcTemplate.queryForMap(sql,args).get("uid")!=null;
    }

    @GetMapping("setSta")
    public void setCarStaHandler(@RequestParam Map<String,String> params){
        String sql="update runsta set leftSpeed=?,rightSpeed=? where cid=?";
        Object[] args={params.get("leftSpeed"),params.get("rightSpeed"),params.get("id")};
        jdbcTemplate.update(sql,args);

    }

    @GetMapping("online")
    public void onlineHandler(@RequestParam Map<String,String> params){
        for(CarConnectedSta connectedSta:connectedStaList){
            if(connectedSta.getId().equals(params.get("id"))){
                int cur=connectedSta.getCurSta()+1;
                connectedSta.setCurSta(cur);
                String sql1="update runsta set connectedSta=1 where cid=?";
                Object[] args={connectedSta.getId()};
                try {
                    jdbcTemplate.update(sql1,args);
                }catch (Exception ignored){
                }
            }
        }
    }

}

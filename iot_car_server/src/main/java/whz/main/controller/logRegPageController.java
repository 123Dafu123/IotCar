package whz.main.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/logReg/api")
public class logRegPageController {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/logCheck")
    public Boolean logCheckHandler(@RequestParam Map<String,String> params){
        String sql="select * from users " +
                "where ( id='"+params.get("id")+"' or phone = '"+params.get("id")+"' )" +
                " and pswd ='"+params.get("pswd")+"'";
        return jdbcTemplate.queryForList(sql).size() != 0;
    }

    @GetMapping("/reg")
    public Boolean regHandler(@RequestParam Map<String,String> params){
        String sql="insert into users values(?,?,?,?)";
        boolean flag=true;
        Object[] args ={params.get("id"),params.get("name"),params.get("phone"),params.get("pswd")};

        try {
            jdbcTemplate.update(sql,args);
        }catch (DuplicateKeyException e){
            flag=false;
        }

        return flag;
    }



}

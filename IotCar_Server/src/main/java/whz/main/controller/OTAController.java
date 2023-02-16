package whz.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.nio.file.Files;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/OTA/api")
public class OTAController {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/download/{otaFileName}")
    public ResponseEntity<ByteArrayResource>  downloadHandler(@PathVariable("otaFileName") String otaFileName) throws Exception{
        byte[] bytes = Files.readAllBytes(new File("D:\\project\\SmartCar\\SmartCar_Server\\src\\main\\resources\\"+otaFileName).toPath());
        ByteArrayResource bar = new ByteArrayResource(bytes);
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header("Content-disposition", "attachment; filename="+otaFileName)
                .body(bar);
    }

    @GetMapping("/updateVersion")
    public void updateVersionHandler(@RequestParam Map<String,String> params){
        String sql="update ota set oldVersion=(select nowVersion from ota where cid=?) where cid=?";
        Object[] args={params.get("cid"),params.get("cid")};
        jdbcTemplate.update(sql,args);
    }

    @GetMapping("/checkUpdateByUid")
    public boolean checkUpdateByUidHandler(@RequestParam Map<String, String> params){
        String oldVersion=null;
        String newVersion=null;
        Map<String, Object> ret=null;

        String sql="select oldVersion,nowVersion from ota where cid=(select id from car where uid=?)";
        Object[] args={params.get("uid")};
        ret=jdbcTemplate.queryForMap(sql,args);
        oldVersion= (String) ret.get("oldVersion");
        newVersion= (String) ret.get("nowVersion");
        return Integer.parseInt(oldVersion) < Integer.parseInt(newVersion);
    }

    @GetMapping("/getVersionInfoByUid")
    public List<Map<String, Object>> getVersionInfoByUidHandler(@RequestParam Map<String, String> params){
        String oldVersion=null;
        String newVersion=null;
        Map<String, Object> ret=null;

        String sql="select oldVersion,nowVersion from ota where cid=(select id from car where uid=?)";
        Object[] args={params.get("uid")};
        return jdbcTemplate.queryForList(sql,args);
    }

    @GetMapping("/checkUpdateByCid")
    public boolean checkUpdateByCidHandler(@RequestParam Map<String, String> params){
        String oldVersion=null;
        String newVersion=null;
        Map<String, Object> ret=null;

        String sql="select oldVersion,nowVersion from ota where cid=?";
        Object[] args={params.get("cid")};
        ret=jdbcTemplate.queryForMap(sql,args);
        oldVersion= (String) ret.get("oldVersion");
        newVersion= (String) ret.get("nowVersion");
        return Integer.parseInt(oldVersion) < Integer.parseInt(newVersion);
    }
}

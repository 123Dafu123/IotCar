package whz.main.thread;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import whz.main.sta.CarConnectedSta;

import java.util.List;
import java.util.Map;

import static whz.main.sta.CarConnectedStaList.connectedStaList;


public class ConnectedStaThread extends Thread{

    @Override
    public void run() {
        List<Map<String,Object>> carIdList;
        DriverManagerDataSource dataSource=new DriverManagerDataSource();

        dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        dataSource.setUrl("jdbc:sqlserver://localhost:1433;DatabaseName=SmartCar");
        dataSource.setUsername("sa");
        dataSource.setPassword("wanghaozhe@@@1");
        JdbcTemplate jdbcTemplate=new JdbcTemplate(dataSource);

        while (true) {
            String sql0="select id from car";
            carIdList=jdbcTemplate.queryForList(sql0);

            for(Map<String,Object> idMap :carIdList) {
                if(connectedStaList.size()==0){
                    connectedStaList.add(new CarConnectedSta(0,0, (String) idMap.get("id")));
                }else{
                    for(CarConnectedSta connectedSta:connectedStaList) {
                        if(!connectedSta.getId().equals(idMap.get("id"))){
                            connectedStaList.add(new CarConnectedSta(0,0, (String) idMap.get("id")));
                        }
                    }
                }

            }

            for(CarConnectedSta connectedSta: connectedStaList) {
                connectedSta.setPreSta(connectedSta.getCurSta());
            }

            try {
                sleep(2000);
            } catch (Exception ignored) {
            }

            for(CarConnectedSta connectedSta: connectedStaList) {
                if(connectedSta.getCurSta()==connectedSta.getPreSta()){
                    String sql="update runsta set connectedSta=0 where cid=?";
                    Object[] args={connectedSta.getId()};
                    try {
                        jdbcTemplate.update(sql,args);
                    }catch (Exception ignored){
                    }
                }
            }
        }
    }
}

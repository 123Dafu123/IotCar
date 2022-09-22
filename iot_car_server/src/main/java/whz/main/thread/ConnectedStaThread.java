package whz.main.thread;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import whz.main.constNum.ConnectedSta;

public class ConnectedStaThread extends Thread{
    @Override
    public void run() {
        while (true) {
            DriverManagerDataSource dataSource=new DriverManagerDataSource();
            dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            dataSource.setUrl("jdbc:sqlserver://localhost:1433;DatabaseName=WifiCar");
            dataSource.setUsername("sa");
            dataSource.setPassword("wanghaozhe@@@1");
            JdbcTemplate jdbcTemplate=new JdbcTemplate(dataSource);
            if(ConnectedSta.curSta!=ConnectedSta.preSta){
                String sql="update runsta set connectedSta=1";
                try {
                    jdbcTemplate.update(sql);
                }catch (Exception ignored){
                }
                ConnectedSta.preSta=ConnectedSta.curSta;
            }else{
                String sql="update runsta set connectedSta=0";
                try {
                    jdbcTemplate.update(sql);
                }catch (Exception ignored){

                }
            }
            try {
                sleep(2000);
            } catch (Exception ignored) {
            }
        }
    }

}

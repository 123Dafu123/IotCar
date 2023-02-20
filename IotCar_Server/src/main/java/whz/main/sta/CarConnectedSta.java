package whz.main.sta;

public class CarConnectedSta {
    private int preSta;
    private int curSta;
    private String id;

    public CarConnectedSta() {
    }

    public CarConnectedSta(int preSta, int curSta, String id) {
        this.preSta = preSta;
        this.curSta = curSta;
        this.id = id;
    }

    public int getPreSta() {
        return preSta;
    }

    public void setPreSta(int preSta) {
        this.preSta = preSta;
    }

    public int getCurSta() {
        return curSta;
    }

    public void setCurSta(int curSta) {
        this.curSta = curSta;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}

#include <wifi_thread_my.h>
#include <qr_thread.h>
#include <http_thread.h>

int main(void)
{
    wifi_thread_init();
    qr_thread_init();
    http_thread_init();

    return 0;
}

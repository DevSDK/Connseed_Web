    $(document).ready(function(){
        // menu Ŭ���� �ٷ� ������ �ִ� a �±׸� Ŭ��������
        $(".rectangle-list>a").click(function () {
            var submenu = $(this).next("ol");
 
            // submenu �� ȭ��� ���϶��� ���� ������� ���� �ƴϸ� �Ʒ��� ������� ��ġ��
            if( submenu.is(":visible") ){
                submenu.slideUp();
            }else{
                submenu.slideDown();
            }
        });
    });
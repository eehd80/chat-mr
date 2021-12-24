$(function () {
    // 처음으로, 의견보내기
    $(".chat-btn-wrap").each(function () {
        let $this = $(this);

        $this.removeClass("active");

        $this.find(".btn-func").click(function () {
            if ($this.hasClass("active") === true) {
                $this.removeClass("active");
            } else {
                $this.addClass("active");
            }
        });

        $(".link-opinion").click(function () {
            $(".layer-review").show();
            $this.removeClass("active");
        });
    });

    $(".btn-reset").click(function (event) {
        event.preventDefault();
        $(this).parents(".layer-wrap").hide();
    });

    $(".layer-review .btn-upload").click(function (event) {
        event.preventDefault();
        $(".layer-review").hide();
        $(".layer-txt").show();
    });
});

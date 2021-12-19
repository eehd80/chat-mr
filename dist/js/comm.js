$(function () {
    $("#inquiry1").click(function () {
        $(".layer-review").show();
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

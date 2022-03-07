var shown = 'continents',
    previous_shown = '';
$(document).ready(function() {
    $("#svg_holder").html(svgs[shown]);
    add_func();
});

function custom_transition(is_continent) {
    $("#back_btn").removeClass("back_btn_show");
    $("body").fadeOut("slow", function() {
        if (is_continent) $("#svg_holder").html(svgs[shown]);
        if (!is_continent) $("#svg_holder").html(countrie_svgs[shown]);
        $("body").fadeIn("slow", function() {
            add_func();
        });
    });
}

function add_func() {
    $("#svg_holder svg g").unbind("hover click");
    $("#svg_holder svg g path").unbind("hover click");
    $("#svg_holder svg path").unbind("hover click");
    $("#back_btn").unbind("click");
    if (shown != 'continents') {
        $("#back_btn").addClass("back_btn_show");
        $("#back_btn").click(
            function() {
                shown = previous_shown;
                previous_shown = 'continents';
                custom_transition(true);
            });
    }

    switch(shown) {
        case 'continents':
            $("#svg_holder svg g").hover(
                function() {
                    if (!$(this).attr("data-id")) return;
                    $(this).children().addClass("svg_hover");
                },
                function() {
                    if (!$(this).attr("data-id")) return;
                    $(this).children().removeClass("svg_hover");
                });
            $("#svg_holder svg g").click(
                function() {
                    if (!$(this).attr("data-id")) return;
                    previous_shown = 'continents';
                    shown = $(this).attr("data-id");
                    custom_transition(true);
                });
            return;
        case 'europe':
            $("#svg_holder svg g path").hover(
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).attr("class", "svg_hover");
                },
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).attr("class", "");
                });
            $("#svg_holder svg g").hover(
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).children().addClass("svg_hover");
                },
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).children().removeClass("svg_hover");
                });
            $("#svg_holder svg g path").click(
                function() {
                    if (!$(this).attr("id")) return;
                    previous_shown = 'europe';
                    shown = $(this).attr("id");
                    custom_transition(false);
                });
            $("#svg_holder svg g").click(
                function() {
                    if (!$(this).attr("id")) return;
                    previous_shown = 'europe';
                    shown = $(this).attr("id");
                    custom_transition(false);
            });
            return;
        case 'africa':
            $("#svg_holder svg path").hover(
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).attr("class", "svg_hover");
                },
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).attr("class", "");
                });
            $("#svg_holder svg path").click(
                function() {
                    if (!$(this).attr("id")) return;
                    previous_shown = 'africa';
                    shown = $(this).attr("id");
                    custom_transition(false);
                });
            return;
        case 'asia':
            $("#svg_holder svg g").hover(
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).children().addClass("svg_hover");
                },
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).children().removeClass("svg_hover");
                });
            $("#svg_holder svg path").hover(
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).attr("class", "svg_hover");
                },
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).attr("class", "");
                });
            $("#svg_holder svg g").click(
                function() {
                    if (!$(this).attr("id")) return;
                    previous_shown = 'asia';
                    shown = $(this).attr("id");
                    custom_transition(false);
            });
            $("#svg_holder svg path").click(
                function() {
                    if (!$(this).attr("id")) return;
                    previous_shown = 'asia';
                    shown = $(this).attr("id");
                    custom_transition(false);
                });
            return;
        case 'northamerica':
            $("#svg_holder svg g").hover(
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).children().addClass("svg_hover");
                },
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).children().removeClass("svg_hover");
                });
            $("#svg_holder svg path").hover(
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).attr("class", "svg_hover");
                },
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).attr("class", "");
                });
            $("#svg_holder svg g").click(
                function() {
                    if (!$(this).attr("id")) return;
                    previous_shown = 'northamerica';
                    shown = $(this).attr("id");
                    custom_transition(false);
            });
            $("#svg_holder svg path").click(
                function() {
                    if (!$(this).attr("id")) return;
                    previous_shown = 'northamerica';
                    shown = $(this).attr("id");
                    custom_transition(false);
                });
            return;
        case 'southamerica':
            $("#svg_holder svg g").hover(
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).children().addClass("svg_hover");
                },
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).children().removeClass("svg_hover");
            });
            $("#svg_holder svg g").click(
                function() {
                    if (!$(this).attr("id")) return;
                    previous_shown = 'southamerica';
                    shown = $(this).attr("id");
                    custom_transition(false);
            });
            return;
        case 'australiaoceania':
            $("#svg_holder svg g").hover(
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).children().children().addClass("svg_hover");
                    $(this).children().addClass("svg_hover");
                },
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).children().children().removeClass("svg_hover");
                    $(this).children().removeClass("svg_hover");
            });
            $("#svg_holder svg path").hover(
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).attr("class", "svg_hover");
                },
                function() {
                    if (!$(this).attr("id")) return;
                    $(this).attr("class", "");
                });
            $("#svg_holder svg g").click(
                function() {
                    if (!$(this).attr("id")) return;
                    previous_shown = 'australiaoceania';
                    shown = $(this).attr("id");
                    custom_transition(false);
            });
            $("#svg_holder svg path").click(
                function() {
                    if (!$(this).attr("id")) return;
                    previous_shown = 'australiaoceania';
                    shown = $(this).attr("id");
                    custom_transition(false);
                });
            return;
        default:
            console.log(shown);
            return;
    }
}

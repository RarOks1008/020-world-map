var shown = 'continents',
    previous_shown = '',
    fadeEf = null;
window.addEventListener('load', function () {
    document.getElementById("svg_holder").innerHTML = svgs[shown];
    add_func();
});

function back_button_click() {
    shown = previous_shown;
    previous_shown = 'continents';
    custom_transition();
}

function button_show(should_show) {
    var bckbtn = document.getElementById("back_btn");
    if (!should_show && bckbtn) {
        bckbtn.removeEventListener("click", back_button_click);
        bckbtn.parentNode.removeChild(bckbtn);
        return;
    }
    var btn = document.createElement("button");
    btn.innerHTML = "Back";
    btn.setAttribute("id", "back_btn");
    btn.addEventListener("click", back_button_click);
    document.body.appendChild(btn);
}

function custom_transition() {
    button_show(false);
    fade_in_out(false);
}

function fade_in_out(isFadeIn) {
    if (fadeEf) {
        clearInterval(fadeEf);
        fadeEf = null;
    }
    var fadeEl = document.getElementsByTagName("body")[0];
    fadeEf = setInterval(function () {
        if (!fadeEl.style.opacity && !isFadeIn) fadeEl.style.opacity = 1;
        if (fadeEl.style.opacity > 0 && !isFadeIn) {
            fadeEl.style.opacity = parseFloat(fadeEl.style.opacity) - 0.01;
            return;
        }
        if (!fadeEl.style.opacity && isFadeIn) fadeEl.style.opacity = 0;
        if (fadeEl.style.opacity < 1 && isFadeIn) {
            fadeEl.style.opacity = parseFloat(fadeEl.style.opacity) + 0.01;
            return;
        }
        clearInterval(fadeEf);
        fadeEf = null;
        if (!isFadeIn) {
            document.getElementById("svg_holder").innerHTML = svgs[shown];
            add_func();
            fade_in_out(true);
            return;
        }
    }, 20);
}

function element_hover(children_class, second_children_class, e) {
    if (!e) return;
    var target = e.target || e.srcElement;
    if (!target) return;
    var id = target.id;
    if (!id) return;
    target.classList.add("svg_hover");
    if (children_class) {
        Array.from(target.children).forEach((el) => {
            el.classList.add("svg_hover");
            if (second_children_class) {
                Array.from(el.children).forEach((eel) => {
                    eel.classList.add("svg_hover");
                });
            }
        });
    }
}
function element_hover_remove(children_class, second_children_class, e) {
    if (!e) return;
    var target = e.target || e.srcElement;
    if (!target) return;
    var id = target.id;
    if (!id) return;
    target.classList.remove("svg_hover");
    if (children_class) {
        Array.from(target.children).forEach((el) => {
            el.classList.remove("svg_hover");
            if (second_children_class) {
                Array.from(el.children).forEach((eel) => {
                    eel.classList.remove("svg_hover");
                });
            }
        });
    }
}

function get_id_from_path(path) {
    var sid = '';
    path.forEach((i) => {
        if (sid) return;
        if (!i.id) return;
        sid = i.id;
    });
    return sid;
}

function element_click(prev_shown, cust_trans, e) {
    if (!e) return;
    if (!e.path) return;
    var elid = get_id_from_path(e.path);
    if (!elid) return;
    previous_shown = prev_shown;
    shown = elid;
    custom_transition();
}

function add_func() {
    document.querySelectorAll("#svg_holder svg g").forEach((el) => {
        el.removeEventListener("mouseenter", element_hover);
        el.removeEventListener("mouseleave", element_hover_remove);
        el.removeEventListener("click", element_click);
    });
    document.querySelectorAll("#svg_holder svg g path").forEach((el) => {
        el.removeEventListener("mouseenter", element_hover);
        el.removeEventListener("mouseleave", element_hover_remove);
        el.removeEventListener("click", element_click);
    });
    document.querySelectorAll("#svg_holder svg path").forEach((el) => {
        el.removeEventListener("mouseenter", element_hover);
        el.removeEventListener("mouseleave", element_hover_remove);
        el.removeEventListener("click", element_click);
    });
    if (shown != 'continents') button_show(true);

    switch(shown) {
        case 'continents':
            document.querySelectorAll("#svg_holder svg g").forEach((el) => {
                el.addEventListener("mouseenter", element_hover.bind(null, true, false));
                el.addEventListener("mouseleave", element_hover_remove.bind(null, true, false));
                el.addEventListener("click", element_click.bind(null, "continents", true));
            });
            return;
        case 'europe':
            document.querySelectorAll("#svg_holder svg g").forEach((el) => {
                el.addEventListener("mouseenter", element_hover.bind(null, true, false));
                el.addEventListener("mouseleave", element_hover_remove.bind(null, true, false));
                el.addEventListener("click", element_click.bind(null, "europe", false));
            });
            document.querySelectorAll("#svg_holder svg g path").forEach((el) => {
                el.addEventListener("mouseenter", element_hover.bind(null, false, false));
                el.addEventListener("mouseleave", element_hover_remove.bind(null, false, false));
                el.addEventListener("click", element_click.bind(null, "europe", false));
            });
            return;
        case 'africa':
            document.querySelectorAll("#svg_holder svg path").forEach((el) => {
                el.addEventListener("mouseenter", element_hover.bind(null, false, false));
                el.addEventListener("mouseleave", element_hover_remove.bind(null, false, false));
                el.addEventListener("click", element_click.bind(null, "africa", false));
            });
            return;
        case 'asia':
            document.querySelectorAll("#svg_holder svg g").forEach((el) => {
                el.addEventListener("mouseenter", element_hover.bind(null, true, false));
                el.addEventListener("mouseleave", element_hover_remove.bind(null, true, false));
                el.addEventListener("click", element_click.bind(null, "asia", false));
            });
            document.querySelectorAll("#svg_holder svg path").forEach((el) => {
                el.addEventListener("mouseenter", element_hover.bind(null, false, false));
                el.addEventListener("mouseleave", element_hover_remove.bind(null, false, false));
                el.addEventListener("click", element_click.bind(null, "asia", false));
            });
            return;
        case 'northamerica':
            document.querySelectorAll("#svg_holder svg g").forEach((el) => {
                el.addEventListener("mouseenter", element_hover.bind(null, true, false));
                el.addEventListener("mouseleave", element_hover_remove.bind(null, true, false));
                el.addEventListener("click", element_click.bind(null, "northamerica", false));
            });
            document.querySelectorAll("#svg_holder svg path").forEach((el) => {
                el.addEventListener("mouseenter", element_hover.bind(null, false, false));
                el.addEventListener("mouseleave", element_hover_remove.bind(null, false, false));
                el.addEventListener("click", element_click.bind(null, "northamerica", false));
            });
            return;
        case 'southamerica':
            document.querySelectorAll("#svg_holder svg g").forEach((el) => {
                el.addEventListener("mouseenter", element_hover.bind(null, true, false));
                el.addEventListener("mouseleave", element_hover_remove.bind(null, true, false));
                el.addEventListener("click", element_click.bind(null, "southamerica", false));
            });
            return;
        case 'australiaoceania':
            document.querySelectorAll("#svg_holder svg g").forEach((el) => {
                el.addEventListener("mouseenter", element_hover.bind(null, true, true));
                el.addEventListener("mouseleave", element_hover_remove.bind(null, true, true));
                el.addEventListener("click", element_click.bind(null, "australiaoceania", false));
            });
            document.querySelectorAll("#svg_holder svg path").forEach((el) => {
                el.addEventListener("mouseenter", element_hover.bind(null, false, false));
                el.addEventListener("mouseleave", element_hover_remove.bind(null, false, false));
                el.addEventListener("click", element_click.bind(null, "australiaoceania", false));
            });
            return;
        default:
            console.log(shown);
            return;
    }
}

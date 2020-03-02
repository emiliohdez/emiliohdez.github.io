var dynamicTexts = [
    "working out!",
    "functional programming.",
    "social projects.",
    "multidisciplinarity.",
    "traveling México :D",
    "meeting new people.",
    "teaching.",
    "volunteering social causes."
];

var index = 0;

function loopFunction(delay, callback) {
    var loop = function() {
        callback();
        setTimeout(loop, delay);
    };
    loop();
};

function changeDynamicText() {
    if (index == dynamicTexts.length)
        index = 0;
    $("#profile > p").fadeOut(function() {
        $("#dynamic-text").text(dynamicTexts[index]);
        index++;
    }).fadeIn();
}

loopFunction(5000, changeDynamicText);



function hamButtonToggle(node) {
    $(node).toggleClass("is-active");
    $(".menu > ul").toggleClass("visible");
}
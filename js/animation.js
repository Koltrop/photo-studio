var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        triggerHook: 0.9,
        offset: 50
    })
    .setClassToggle("#reveal1", "visible")
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        triggerHook: 0.9,
        offset: 50
    })
    .setClassToggle("#reveal2", "visible")
    //.addIndicators()
    .addTo(controller);

var revealElements = document.getElementsByClassName("digit");
for (var i = 0; i < revealElements.length; i++) {
    new ScrollMagic.Scene({
            triggerElement: revealElements[i],
            offset: 50,
            triggerHook: 0.9,
        })
        .setClassToggle(revealElements[i], "visible")
        /*.addIndicators({
            name: "digit " + (i + 1)
        })*/
        .addTo(controller);
}

new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        triggerHook: 0.9,
        offset: 50,
    })
    .setClassToggle("#reveal3", "visible")
    //.addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: "#trigger4",
        triggerHook: 0.9,
        offset: 50,
    })
    .setClassToggle("#reveal4", "visible")
    //.addIndicators()
    .addTo(controller);
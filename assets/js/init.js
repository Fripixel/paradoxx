$(function(e) {
    $(".paradoxx--1").paradoxx({
        position: 1,
        offset: 10,
        velocity: '0.4s',
        delay: '0.05s',
        ease: 'ease-out',
        opacity: 1,
        debug: true,
    });
    $(".paradoxx--2").paradoxx({
        position: 0,
        offset: 10,
        opacity: 1,
    });
})
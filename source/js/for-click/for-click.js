"use strict";

particlesJS("particles-js-click", {
    particles: {
        number: { value: 0, density: { enable: false, value_area: 0 } },
        color: { value: "#0fff00" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#e61414" },
            polygon: { nb_sides: 4 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 2.8,
            random: true,
            anim: {
                enable: false,
                speed: 131.86813186813185,
                size_min: 54.345654345654346,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 12.626362266116361,
            direction: "bottom",
            random: false,
            straight: false,
            out_mode: "kill",
            bounce: false,
            attract: { enable: false, rotateX: 10000, rotateY: 1104.8066982851817 }
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: { enable: false, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 0, line_linked: { opacity: 0 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 40 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});

var updateWithPatch = function() {
    var pJS = this;

    var newParticles = [];

    for (var i = 0; i < pJS.particles.array.length; i++) {
        /* the particle */
        var p = pJS.particles.array[i];

        // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
        // var f = -BANG_SIZE / d;
        // if ( d < BANG_SIZE ) {
        //     var t = Math.atan2( dy, dx );
        //     p.vx = f * Math.cos(t);
        //     p.vy = f * Math.sin(t);
        // }

        /* move the particle */
        if (pJS.particles.move.enable) {
            var ms = pJS.particles.move.speed / 2;
            p.x += p.vx * ms;
            p.y += p.vy * ms;
        }

        /* change opacity status */
        if (pJS.particles.opacity.anim.enable) {
            if (p.opacity_status == true) {
                if (p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
                p.opacity += p.vo;
            } else {
                if (p.opacity <= pJS.particles.opacity.anim.opacity_min)
                    p.opacity_status = true;
                p.opacity -= p.vo;
            }
            if (p.opacity < 0) p.opacity = 0;
        }

        /* change size */
        if (pJS.particles.size.anim.enable) {
            if (p.size_status == true) {
                if (p.radius >= pJS.particles.size.value) p.size_status = false;
                p.radius += p.vs;
            } else {
                if (p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
                p.radius -= p.vs;
            }
            if (p.radius < 0) p.radius = 0;
        }

        /* change particle position if it is out of canvas */
        if (pJS.particles.move.out_mode == "bounce") {
            var new_pos = {
                x_left: p.radius,
                x_right: pJS.canvas.w,
                y_top: p.radius,
                y_bottom: pJS.canvas.h
            };
        } else {
            var new_pos = {
                x_left: -p.radius,
                x_right: pJS.canvas.w + p.radius,
                y_top: -p.radius,
                y_bottom: pJS.canvas.h + p.radius
            };
        }

        if (p.x - p.radius > pJS.canvas.w) {
            p.x = new_pos.x_left;
            p.y = Math.random() * pJS.canvas.h;
        } else if (p.x + p.radius < 0) {
            p.x = new_pos.x_right;
            p.y = Math.random() * pJS.canvas.h;
        }
        if (p.y - p.radius > pJS.canvas.h) {
            p.y = new_pos.y_top;
            p.x = Math.random() * pJS.canvas.w;
        } else if (p.y + p.radius < 0) {
            p.y = new_pos.y_bottom;
            p.x = Math.random() * pJS.canvas.w;
        }

        /* out of canvas modes */
        switch (pJS.particles.move.out_mode) {
            case "bounce":
                if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
                else if (p.x - p.radius < 0) p.vx = -p.vx;
                if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
                else if (p.y - p.radius < 0) p.vy = -p.vy;
                newParticles.push(p);
                break;
            case "kill":
                if (!(p.x + p.radius > pJS.canvas.w) &&
                    !(p.x - p.radius < 0) &&
                    !(p.y + p.radius > pJS.canvas.h) &&
                    !(p.y - p.radius < 0)
                ) {
                    newParticles.push(p);
                }
                break;
        }

        /* events */
        if (isInArray("grab", pJS.interactivity.events.onhover.mode)) {
            pJS.fn.modes.grabParticle(p);
        }

        if (
            isInArray("bubble", pJS.interactivity.events.onhover.mode) ||
            isInArray("bubble", pJS.interactivity.events.onclick.mode)
        ) {
            pJS.fn.modes.bubbleParticle(p);
        }

        if (
            isInArray("repulse", pJS.interactivity.events.onhover.mode) ||
            isInArray("repulse", pJS.interactivity.events.onclick.mode)
        ) {
            pJS.fn.modes.repulseParticle(p);
        }

        /* interaction auto between particles */
        if (pJS.particles.line_linked.enable || pJS.particles.move.attract.enable) {
            for (var j = i + 1; j < pJS.particles.array.length; j++) {
                var p2 = pJS.particles.array[j];

                /* link particles */
                if (pJS.particles.line_linked.enable) {
                    pJS.fn.interact.linkParticles(p, p2);
                }

                /* attract particles */
                if (pJS.particles.move.attract.enable) {
                    pJS.fn.interact.attractParticles(p, p2);
                }

                /* bounce particles */
                if (pJS.particles.move.bounce) {
                    pJS.fn.interact.bounceParticles(p, p2);
                }
            }
        }
    }

    pJS.particles.array = newParticles;
};

pJSDom[0].pJS.fn.particlesUpdate = updateWithPatch.bind(pJSDom[0].pJS);

var count_particles, stats, update;
stats = Stats;
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);
var Cylon = require('cylon');
var ws = require('nodejs-websocket');
var bot;

// Initialise the robot
Cylon.robot()
    .connection("ardrone", {
        adaptor: 'ardrone',
        port: '192.168.1.1'
    })
    .device("drone", {
        driver: "ardrone",
        connection: "ardrone"
    })
    .device("nav", {
        driver: "ardrone-nav",
        connection: "ardrone"
    })
    .on("ready", fly);

// Fly the bot
function fly(robot) {
    bot = robot;
    bot.drone.disableEmergency();

    bot.drone.config('general:navdata_demo', 'TRUE');

    bot.nav.on("navdata", function(data) {
        console.log(data);
    });

    bot.drone.ftrim();
    bot.drone.takeoff();


    after(3 * 1000, function() {
        bot.drone.up(0.1);
    });

    after(6 * 1000, function() {
        bot.drone.hover(0.1);
    })

    after(9*1000, function() {
        bot.drone.up(0.1);
    })

    after(12*1000, function() {
        bot.drone.front(0.1);
    })

    after(13.5*1000, function() {
        bot.drone.down(0.1);
    })

    after(16.5 * 1000, function() {
            bot.drone.hover(0.1);

    })

    after(18*1000, function() {
        bot.drone.up(0.1);
    })

    after(21*1000, function() {
        bot.drone.back(0.1);
    })

    after(24*1000, function() {
        bot.drone.down(0.1)
    })
    after(27*1000, function() {
        bot.drone.land(0.1);
    })

    after(29*1000, function() {
        bot.drone.stop();
    });
}

Cylon.start();









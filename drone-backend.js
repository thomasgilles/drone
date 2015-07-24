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
        bot.drone.up(0.2);
    });

    after(4.5 * 1000, function() {
        bot.drone.left(0.1);
    });

    after(6.5*1000, function() {
        bot.drone.forward(0.2);
    }

    after(8*1000, function() {
        bot.drone.right(0.2);
    }

    after(10*1000, function() {
        bot.drone.back(0.2);
    }

    after(11*1000, function() {
        bot.drone.left(0.1);
    }

    after(12*1000, function() {
        bot.drone.land(0.2);
    }

    after(13*1000, function() {
        bot.drone.stop();
    });
}

Cylon.start();
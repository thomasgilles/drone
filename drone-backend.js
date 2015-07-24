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

    after(1 * 1000, function() {
        bot.drone.up(0.1);
    });

    after(2 * 1000, function() {
        bot.drone.left(0.1);
    });

    after(4*1000, function() {
        bot.drone.front(0.2);
    })

    after(5.5*1000, function() {
        bot.drone.right(0.2);
    })

    after(8*1000, function() {
        bot.drone.back(0.2);
    })

    after(8*1000, function() {
        bot.drone.left(0.1);
    })

    after(9*1000, function() {
        bot.drone.land(0.2);
    })

    after(11*1000, function() {
        bot.drone.stop();
    });
}

Cylon.start();








bot.drone.takeoff();

after(10*1000, function(){

   bot.drone.land();
});
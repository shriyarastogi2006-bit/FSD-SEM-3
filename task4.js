const EventEmitter = require("events");

const tracker = new EventEmitter();

tracker.on("login", (studentName) => {
    console.log(`Student ${studentName} logged in.`);
});

tracker.on("courseRegistration", (courseName) => {
    console.log(`Course registered: ${courseName}`);
});

tracker.on("notification", (message) => {
    console.log(`Notification: ${message}`);
});

tracker.on("logout", (studentName) => {
    console.log(`Student ${studentName} logged out.`);
});

tracker.emit("login", "Rahul");
tracker.emit("courseRegistration", "Full Stack Development");
tracker.emit("notification", "Your course registration is successful.");
tracker.emit("logout", "Rahul");
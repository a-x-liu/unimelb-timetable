exports.users = [];
exports.timetables = [];
exports.events = [];

exports.user = class user {
    constructor(id, name, password, timetable, src) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.timetable = timetable;
        this.src = src;
    }
};

exports.timetable = class timetable {
    constructor(id, events, title) {
        this.id = id;
        this.events = events;
        this.title = title;
    }
};

exports.event = class event {
    constructor(id, day, title, timeStart, timeEnd, type, description) {
        this.id = id;
        this.day = day;
        this.title = title;
        this.timeStart = timeStart;
        this.timeEnd = timeEnd;
        this.type = type;
        this.description = description;
    }
};


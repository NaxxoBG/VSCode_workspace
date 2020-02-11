let crt = n => n.toString()

class Time {
    constructor(hours, minutes, seconds) {
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
    }

    getHours() {
        return this.hours
    }

    getMinutes() {
        return this.minutes
    }

    getSeconds() {
        return this.seconds
    }

    next() {
        if (this.seconds == 59) {
            if (this.minutes == 59) {
                this.hours += 1
                this.minutes = 0
                this.seconds = 0
            } else {
                this.minutes += 1
                this.seconds = 0
            }
        } else {
            this.seconds += 1
        }
    }

    equals(o) {
        return JSON.stringify(this) === JSON.stringify(o)
    }

    toString() {
        return `Time: ${crt(this.hours).padStart(2, '0')}:${crt(this.minutes).padStart(2, '0')}:${crt(this.seconds).padStart(2, '0')}`
    }
}

class Clock {
    constructor() {
        this.time = new Time(0, 0, 0)
    }

    setTime(hours, minutes, seconds) {
        this.time = new Time(hours, minutes, seconds)
    }

    getTime() {
        return this.time
    }

    advanceTime() {
        this.time.next()
    }

    toString() {
        return this.time.toString()
    }
}

class AlarmClock extends Clock {
    constructor() {
        super()
        this.alarmOn = false
        this.alarm = new Time(0, 0, 0)
    }

    setAlarm(hours, minutes, seconds) {
        this.alarm = new Time(hours, minutes, seconds)
    }

    IsAlarmOn() {
        return this.alarmOn
    }

    turnAlarmOn() {
        this.alarmOn = true
    }

    turnAlarmOff() {
        this.alarmOn = false
    }

    advanceTime() {
        return this.alarm.equals(this.getTime())
    }

    toString() {
        return `Alarm: ${crt(this.alarm.hours).padStart(2, '0')}:${crt(this.alarm.minutes).padStart(2, '0')}:${crt(this.alarm.seconds).padStart(2, '0')}`
    }
}

let alarm = new AlarmClock()
alarm.setAlarm(1, 14, 23)
console.log(alarm.toString())

let clock = new Clock()
clock.setTime(1, 20, 30)
console.log(clock.getTime().toString())

for (let i = 0; i < 120; i++) {
    clock.advanceTime()
    console.log(clock.toString())
}

let a = new Time(12, 2, 23)
let b = new Time(0, 1, 52)

let c = new Time(12, 2, 23)
console.log(a.equals(c))
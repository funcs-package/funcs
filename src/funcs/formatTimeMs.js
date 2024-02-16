export function formatTimeMs(duration) {
    let seconds = parseInt((duration / 1000) % 60);
    let minutes = parseInt((duration / (1000 * 60)) % 60);
    let hours = parseInt((duration / (1000 * 60 * 60)) % 24);
    let days = parseInt((duration / (1000 * 60 * 60 * 24)));
    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    if (days > 0) return days + ":" + hours + ":" + minutes + ":" + seconds;
    if (hours > 0) return hours + ":" + minutes + ":" + seconds;
    return minutes + ":" + seconds;
}
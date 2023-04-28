function timeToWalk(steps, footprintInMeters, speedKmH) {

    let totalDistanceInMeters = steps * footprintInMeters;
    let speedInMetersPerSecond = speedKmH * (5 / 18);

    let totalTimeInSeconds = Math.floor(totalDistanceInMeters / 500) * 60;

    totalTimeInSeconds += Math.ceil((totalDistanceInMeters / speedInMetersPerSecond));

    let date = new Date(0);
    date.setSeconds(totalTimeInSeconds);
    console.log(date.toISOString().substring(11, 19));

}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);

/*

    Attend Meetings

    Given a list of meeting intervals where each interval
    consists of a start and an end time, check if a person
    can attend all the given meetings such that only one
    meeting can be attended at a time.

    Example One

    Input = [[1, 5], [5, 8], [10, 15]]

    Output = 1

    As the above intervals are non-overlapping intervals,
    it means a person can attend all these meetings.

    Example Two

    Input = [[1, 5], [4, 8]]

    Output = 0

    Time 4 - 5 is overlapping in the first and second intervals.

*/

let can_attend_all_meetings = (intervals) => {
    intervals.sort((a,b) => a[0]-b[0]);
    console.log(intervals);

    for(let i = 0; i < intervals.length - 1; i++) {
        if(intervals[i][1] > intervals[i+1][0]) {
            console.log('false');
            return 0;
        }
    }
    console.log('true');
    return 1;
}

can_attend_all_meetings([[5,8], [10,15], [1,5]]);
can_attend_all_meetings([[4,8], [10,15], [1,5]]);
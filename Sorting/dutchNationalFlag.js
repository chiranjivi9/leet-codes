/*
    Dutch National Flag Colors

    Given some balls of three colors arranged in a line, rearrange them such that 
    all the red balls go first, then green and then blue ones.

    Do rearrange the balls in place. A solution that simply counts colors and 
    overwrites the array is not the one we are looking for.

    This is an important problem in search algorithms theory proposed by Dutch 
    computer scientist Edsger Dijkstra. Dutch national flag has three colors 
    (albeit different from ones used in this problem).

    Example
    { "balls": ["G", "B", "G", "G", "R", "B", "R", "G"]}
    Output: ["R", "R", "G", "G", "G", "G", "B", "B"]
    There are a total of 2 red, 4 green and 2 blue balls. In this order they appear in the correct output.

    Notes
    Constraints:
    1 <= n <= 100000
    Do this in ONE pass over the array, NOT TWO passes.
    Solution is only allowed to use constant extra memory.

*/


function dutch_flag_sort(balls) {
     
    if(balls.length <= 1) {
        return balls;
    }
    // console.log('OG Arr: ', balls);
    let red = 0;
    let blue = balls.length - 1;
    let i = 0;

    while(i <= blue) {
        if (balls[i] === 'R') {
            let temp = balls[red];
            balls[red] = balls[i];
            balls[i] = temp;
            i++
            red++;
        } else if (balls[i] === 'B') {
            let temp = balls[blue];
            balls[blue] = balls[i];
            balls[i] = temp;
            blue--;
        } else {
            i++;
        }
    }
    // console.log(balls);
    return balls;
}

dutch_flag_sort(["G", "B", "G", "G", "R", "B", "R", "G"]);
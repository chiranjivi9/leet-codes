/*

    Given a network of servers where each server is connected 
    to every other server directly or indirectly through the bidirectional
    connections in the network, find all the critical connections.

    A connection in a connected network is said to be critical if
    removing it disconnects the network.



    n =  5
    connections = [[0, 1],[0, 2],[0, 4],[1, 2],[1, 3]]

         4--0--1--3
            | /
            |/
            2
    
    Output: [[0, 4],[1, 3]]


*/

function find_critical_connections(number_of_servers, connections) {
    // Build the graph
    let adjList = {};
    let nonCriticalConnections = [];
    
    connections.forEach((item) => {
        for(let i = 0; i< item.length; i++) {
            adjList[item[i]] = [];
        }
    })

    connections.forEach(([v1, v2]) => {
        addEdge(v1, v2);
    })

    function addEdge(v1, v2) {
        adjList[v1].push(v2);
        adjList[v2].push(v1);
    }

    for(const server in adjList) {

        if(adjList[server].length === 1) {
            nonCriticalConnections.push([server, adjList[server][0]]);
        }
    }
    
    if(!nonCriticalConnections.length) nonCriticalConnections.push([-1,-1]);
    
    console.log(nonCriticalConnections);
    console.log(adjList);

    return nonCriticalConnections;
}

find_critical_connections(6, [
    [0,1],
    [0,2],
    [1,2],
    [1,3],
    [3,5],
    [3,4],
    [4,5]
])

// find_critical_connections(5, [[0, 1],[0, 2],[0, 4],[1, 2],[1, 3]]);
// find_critical_connections(2,  [

//     [0, 1],
    
//     [0, 2],
    
//     [0, 3],
    
//     [1, 2],
    
//     [2, 3]
    
//     ])
// find_critical_connections(5, [[0, 1],[0, 2],[1, 2]]);

// find_critical_connections(2, [[0, 1]]);
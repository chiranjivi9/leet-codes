/*
    Number of Connected Components in an Undirected Graph
    Problem:
    Given n nodes labeled from 0 to n - 1 and a list of undirected edges
    (each edge is a pair of nodes), write a function to find the number of
    connected components in an undirected graph.

    Example 1:
        0            3
        |            |
        1 --- 2      4
    Given n = 5 and edges = [[0, 1], [1, 2], [3, 4]], return 2.

    Example 2:
        0           4
        |           |
        1 --- 2 --- 3
    Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]], return 1.
*/

function countComponents(n, edges){
    let adjList = {};
    let connectionCounter = 0;
    let visited = [];
    
    // Build the graph;
    edges.forEach((item) => {
        for(let i = 0; i < item.length; i++) {
            if(!adjList[item[i]]) adjList[item[i]] = [];
        }
    })
    
    edges.forEach(([v1, v2]) => {
        addEdge(v1, v2);
    });
    
    function addEdge(v1, v2) {
        adjList[v1].push(v2);
        adjList[v2].push(v1);
    }

    // Outer Loop
    for (let v = 0; v < n; v++) {
        if(visited[v] === undefined) {
            connectionCounter++;
            // dfs(v);
            bfs(v);
        }
    }

    // DFS;
    function dfs(node) {
        visited[node] = 1;
        adjList[node] && adjList[node].forEach((neighbor) => {
            console.log('NEIGHBOR ', neighbor, adjList[node])
            if(visited[neighbor] === undefined) {
                dfs(neighbor);
            }
        })
    }


    // BFS;
    function bfs(source) {
        console.log('source', source);
        let q = [];
        q.push(source);
        visited[source] = 1;
        while (q.length) {
            let node = q.pop();
            adjList[node] && adjList[node].forEach((neighbor) => {
                if(visited[neighbor] === undefined) {
                    visited[neighbor] = 1;
                    // connectionCounter++
                    q.push(neighbor);
                }
            })
        }
    }

    console.log(adjList);
    console.log(connectionCounter);
   

    return connectionCounter;

}




// countComponents(5, [[0, 1], [1, 2], [3, 4]]);
// countComponents(5, [[0, 1], [1, 2], [2, 3], [3, 4]]);
countComponents(6, [
    [ 1, 2 ], [ 1, 3 ],
    [ 1, 4 ], [ 2, 5 ],
    [ 3, 6 ], [ 4, 3 ],
    [ 4, 6 ], [ 5, 6 ]
  ])
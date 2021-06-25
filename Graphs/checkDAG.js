function question(pairs) {
    let adjList = {};
    let visited = [];
    let timestamp = [0];
    let arrival = [];
    let departure = [];
    
    // Build the graph;
    pairs.forEach((item) => {
        for(let i = 0; i < item.length; i++) {
            if(!adjList[item[i]]) adjList[item[i]] = [];
        }
    })
    
    pairs.forEach(([v1, v2]) => {
        addEdge(v1, v2);
    });
    
    function addEdge(v1, v2) {
        adjList[v1].push(v2);
        adjList[v2].push(v1);
    }
    
    // Outer Loop
    for (let v = 0; v < Object.keys(adjList).length; v++) {
        if(visited[v] === undefined) {
            if(dfs(v)){
                return true;
            }
        }
        
        return false;
    }
    
    return false;
    
    function dfs(source) {
        arrival[source] = timestamp[0];
        timestamp[0] += 1;
        visited[source] = 1;
        
        adjList[source] && adjList[source].forEach((neighbor) => {
            if(visited[neighbor] === undefined) {
                if(dfs(neighbor)){
                    return true;
                }
            } else {
                if(departure[neighbor] === undefined) {
                    // this is a back edge, hence a cycle.
                    return true;
                }
            }
            departure[source] = timestamp[0];
            timestamp[0] += 1;
            return false;
        })
    }

}



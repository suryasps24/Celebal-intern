let hasMachine = (new Array(N)).fill(false);
function createHasMachine(n, machines) {
    for(let m of machines) {
        hasMachine[m] = true;
    }
    return hasMachine;
}

function getParent(u, parents) {
    while(parents[u] !== null) {
        u = parents[u];
    }
    return u;
}

function combineSets(u, v, parents, sizes) {
    if(sizes[u] > sizes[v]) {
        let tmp = u;
        u = v;
        v = tmp;
    }
    // Now set-u is smaller than set-v
    parents[u] = v;
    sizes[v] += sizes[u];
    return v;
}

let parents = (new Array(N)).fill(null);
let sizes = (new Array(N)).fill(1);
// Complete the minTime function below.
function minTime(roads, machines) {
    let n = roads.length + 1;
    roads.sort((a, b) => {
        return b[2] - a[2];
    });
    createHasMachine(n, machines);

    let time = 0;
    for(let [u, v, cost] of roads) {
        let parentU = getParent(u, parents);
        let parentV = getParent(v, parents);
        if(hasMachine[parentU] && hasMachine[parentV]) {
            time += cost;
        } else {
            let combinedParent = combineSets(parentU, parentV, parents, sizes);
            if(hasMachine[parentU] || hasMachine[parentV]) {
                hasMachine[combinedParent] = true;
            }
        }
    }
    return time;

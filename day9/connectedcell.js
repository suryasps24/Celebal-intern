function connectedCell(matrix) {
     let {x, y} = regionIndex;
    let flag = false;
    if (regions.length == 0) {
        regions.push([regionIndex]);
    }
    else {
        for (let k = 0; k < regions.length; k++) {
           
            let region = regions[k];
            for (let cell of region){
                //console.log('here');
                let {x : i, y : j} = cell
                if ((i == x-1 && j == y)
                || (i == x+1 && j == y)
                || (i == x-1 && j == y-1)
                || (i == x+1 && j == y+1)
                || (i == x && j == y-1)
                || (i == x && j == y+1)
                || (i == x+1 && j == y-1)
                || (i == x-1 && j == y+1)) {
                    region.push(regionIndex);
                    regions[k] = region;
                    flag = true;
                    break;
                }
            }
        }
        if (!flag){
            regions.push([regionIndex]);
        }
    }

}

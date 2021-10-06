 var slotCount = []
    var itemCount = []
    for(var i=0;i<container.length;i++){
        for(var k=0;k<container.length;k++){
            slotCount[i] = (slotCount[i] || 0) + container[i][k]
            itemCount[k] = (itemCount[k] || 0) + container[i][k]
        }
    }
    
    itemCount.sort()
    slotCount.sort()
    
    for(var i=0;i<itemCount.length;i++){
        if(itemCount[i] !=slotCount[i])
            return "Impossible"
    }
    return "Possible"
}


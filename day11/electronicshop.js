function getMoneySpent(keyboards, drives, b) {
     var min = 0;
   keyboards.forEach(x => {
       drives.forEach(y => {
           if (x + y > min && x + y <= b) {
               min = x + y;
           }
       })
   })
   return min === 0 ? -1 : min;

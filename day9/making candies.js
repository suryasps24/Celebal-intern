function minimumPasses(m, w, p, n) {
    let pass = 0;
let result = Math.ceil(n/m*w);

let resource = 0;

while(pass<result)
{
    let st_pass = Math.ceil(p-resource/(m*w));
    pass+=st_pass;
    resource += m*w*st_pass;


    // bulk hiring
    if(Math.floor(resource/p) >= Math.abs(n-w))
    {
        resource -= Math.abs(m-w)*p;
        m>w ? w=m : m=w;

        let reinvest = Math.floor(resource/p);
        if(reinvest>0)
        {
            if(reinvest % 2 === 0)
            {
                m=w=m+(reinvest/2);

            }else{
                m=w=m+Math.floor(reinvest/2);
                m++;
            }
            resource -= reinvest *p;
        //even
        //odd
        
        }
    }else{
        // step by step
       let  reinvest = Math.floor(resource/p);
        m>w?w+=reinvest : m+=reinvest;
        resource -= reinvest *p;
    }


    // condition checking
    let minpass = Math.ceil((n-resource)/(m*w));
    if(result > pass + minpass)
    {
        result = pass + minpass;
    }

}

return result;// Write your code here

// fetchdataの中に変数
export async function fetchdata(target){
    
    const url='https://v6.exchangerate-api.com/v6/4261f9758addc7d22585f3e0/pair/JPY/'+target
    console.log(url)
    const data =await fetch(url).then((res)=>res.json());
    return data;
}

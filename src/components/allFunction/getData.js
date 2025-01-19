export default async function getData(url) {
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data.data;

    }
    catch(e){
        throw e
    }
}
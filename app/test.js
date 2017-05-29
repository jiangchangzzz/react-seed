import "babel-polyfill";
import "isomorphic-fetch";

function postData(){
    fetch('/api/post',{
        body: JSON.stringify({name: 'jc',num: 3})
    })
        .then(response=>response.json())
        .then(json=>console.log(json))
        .catch(error=>console.log(error));
}
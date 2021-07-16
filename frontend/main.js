window.addEventListener('DOMContentLoaded',(event) => {
    getVisitCount();
})

const functionApi = '';// url of the api; ie this is api through azure function
// now javascript code to grab the json that is provided from this functionapi

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()


    }).then(response =>{
        console.log("This Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;


}

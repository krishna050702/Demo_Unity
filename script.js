var unityDetail = unityData.slice(0);
console.log(unityDetail);

window.addEventListener("load", getUnity());

function getUnity() {
    let unityCollection = document.getElementsByClassName("container")[0];
    let output = "";
    for(let i=0;i<unityDetail.length;++i){
        output += `
        <div class="unityCards">
        <a href=${unityDetail[i].Project_Repo} class="hoverEffect"
            target="_blank">
            <h2 class="Conrtibutor"><a href=${unityDetail[i].ContributorURL}><span>${unityDetail[i].ContributorName}</span></a></h2>
        </a>
        </div>`
    }
    
    console.log(output);
    console.log(unityCollection);
    unityCollection.innerHTML = output;
}

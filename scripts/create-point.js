function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    //.then((res) => {return res.json()}) //return retorna uma promeça para o then
    .then( res => res.json())  // igual a linha de cima
   .then( states => {

        for( const state of states ){
            ufSelect.innerHTML += `<option value = "${state.id}">${state.nome}</option>`
        }

        
    })
}
populateUFs()

function getCities(event){
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")
    console.log(event.target.value)

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a cidade</option>";
    citySelect.disabled = true;

    fetch(url)
    .then( res => res.json() )  // igual a linha de cima
    .then( cities => {


        for( const city of cities ){
            citySelect.innerHTML += `<option value = "${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false;
    })

}

document
    .querySelector("select[name = uf]")
    .addEventListener("change", getCities) // criar func. annonuma () => {}

// itens de coleta
// pegar todos os li's
const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect ){
    item.addEventListener("click", handleSelectedItem)
}


const collectedItems = document.querySelector("input[name = items]")
let selectedItems = [] //array de items

function handleSelectedItem(event){
    // add or remove class on JS
    const itemLi = event.target

    itemLi.classList.toggle("selected") //add or remove class
    
    const itemId = itemLi.dataset.id

    //verificar se existem itens selecionados, se sim
    //se sim, pegar os itens selecionados
    const alreadySelected = selectedItems.findIndex( item => item == itemId)
    // parte de cima tem a msm funçao
    // const alreadySelected = selectedItems.findIndex( item => {
    //     const itemFound = item == itemId
    //     return itemFound
    // })


    //se ja estiver selecionado, tirar da selecao
    if(alreadySelected >= 0){
        //tirar da seleçao
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent 
        })

        selectedItems = filteredItems
    }else{
        // se nao estiveer selecionado, adiocionar a selecao
        selectedItems.push(itemId)
    }

    //atualizae o campo escondido com os itens selecionados    
    collectedItems.value = selectedItems


}
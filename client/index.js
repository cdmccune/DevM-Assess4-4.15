
const baseURL = "http://localhost:4000"
const dropdown = document.getElementById(`deleteDropdown`)

document.getElementById("complimentButton").onclick = function () {
    axios.get(`${baseURL}/api/compliment/`)
        .then(function (res) {
          const data = res.data;
          alert(data);
        });
  };



const dropdownCallback = (res) => {
    dropdown.innerHTML = ""
    const fortunes = res.data
    for (i=0; i<fortunes.length; i++) {
        const option = document.createElement("option")
        option.value = i
        // option.id = `Fortune ${i}`
        option.innerText = fortunes[i]
        // console.log(option)
        dropdown.appendChild(option)
    }
}

const updateDropdown = () => {
    axios.get(`${baseURL}/api/fortune/`)
    .then(dropdownCallback)
}

const fortuneAlert = () => {
    axios.get(`${baseURL}/api/fortune/random`)
    .then(res => alert(res.data))
    .catch(err => alert(err.data))
}

const deleteAlert = () => {
    axios.delete(`${baseURL}/api/fortune/${dropdown.value}`)
    .then(res => {
        updateDropdown()
        alert(res.data)
    })

}

const updateAlert = () => {
    updatedFortune = document.getElementById(`newFortune`).value
    if (updatedFortune == "") {
        alert("You must enter a new fortune!")
        return
    } else {
    axios.put(`${baseURL}/api/fortune/${dropdown.value}`, {updatedFortune})
    .then(res => {
        document.getElementById(`newFortune`).value = ""
        updateDropdown()
        alert(res.data)
    })
}
}

const createAlert = () => {
    createdFortune = document.getElementById(`createdFortune`).value
    if (createdFortune == "") {
        alert(`The fortune you entered was an empty void, do you want to die?`)
    } else {
    axios.post(`${baseURL}/api/fortune`, {createdFortune})
    .then(res => {
        document.getElementById(`createdFortune`).value=""
        updateDropdown()
        alert(res.data)
    })
    }
}

document.getElementById(`fortuneButton`).addEventListener(`click`, fortuneAlert)
document.getElementById(`deleteFortuneButton`).addEventListener(`click`,deleteAlert)
document.getElementById(`updateFortuneButton`).addEventListener(`click`,updateAlert)
document.getElementById(`createFortuneButton`).addEventListener(`click`,createAlert)


updateDropdown()

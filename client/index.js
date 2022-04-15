
const baseURL = "http://localhost:4000"

document.getElementById("complimentButton").onclick = function () {
    axios.get(`${baseURL}/api/compliment/`)
        .then(function (res) {
          const data = res.data;
          alert(data);
        });
  };

const alertFortune = () => {
    axios.get(`${baseURL}/api/fortune/`)
    .then(res => alert(res.data))
    .catch(err => alert(err.data))
}

document.getElementById(`fortuneButton`).addEventListener(`click`, alertFortune)

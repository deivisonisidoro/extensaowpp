const intervalo = setInterval(()=>{
    const header = document.querySelector("._1QUKR")
    if(header){
        console.log(header)
        clearInterval(intervalo)
        
        var button = document.createElement("button")
        button.innerHTML = "2x"
        button.classList.add("twoTimesButton")
        header.appendChild(button)
        
        button.addEventListener("click", ()=>{
            const audios = document.querySelectorAll("audio")
             audios.forEach((audio)=>{
                audio.playbackRate = 2
             })
        })

        header.appendChild(button)
    }
}, 1000)

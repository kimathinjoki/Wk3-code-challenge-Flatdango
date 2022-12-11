const url = "http://localhost:3000/films"

document.addEventListener('DOMContentLoaded',()=>{

    const moviePlaceHolder = ()=>{
        fetch(url)
        .then(res =>res.json())
        .then(content =>{
            const firstMovie = content[0]

            const filmImg = document.getElementById("poster")
            const movieTitle = document.getElementById("filmTitle")
            const movieDescr = document.getElementById("movieDescription")
            const runningTime = document.getElementById("runtime")
            const showingTime = document.getElementById("showtime")
            const availTicket =document.getElementById("ticketsAvailable")
            filmImg.src = firstMovie.poster
            movieTitle.innerText = firstMovie.title
            movieDescr.textContent = firstMovie.decription
            runningTime.innerText =`Runtime: ${firstMovie.runtime} minutes`
            showingTime.innerText =`Showtime: ${firstMovie.showtime}`
            availTicket.innerText =`Tickets available: (${firstMovie.capacity - firstMovie.tickets_sold})`


            const ticketBuy = document.getElementById("buyTicket")
            let tickets = Number(firstMovie.capacity - firstMovie.tickets_sold)

            ticketBuy.addEventListener('click',()=>{

                tickets--

                // const ticketRemaining = tickets-1

                if(tickets <= 0){
                    return availTicket.innerText = "SOLD OUT"
                }else{
                    availTicket.innerText = `Tickets available: ${tickets}`
                }
            })

        })




    }



    const movieDetails = ()=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            for(let i = 0; i < data.length; i++){
                let item = data[i]
                console.log(item)
                const movieList = document.createElement("li")
                const list = document.getElementById("showingMovie")
                movieList.innerText = item.title
                console.log(item.title)


                list.appendChild(movieList)

                movieList.addEventListener('click',()=>{
                    const filmImage = document.getElementById("poster")
                    const filmTitle = document.getElementById("filmTitle")
                    const filmDescr = document.getElementById("movieDescription")
                    const runTime = document.getElementById("runtime")
                    const showTime = document.getElementById("showtime")
                    const availTickets =document.getElementById("ticketsAvailable")
                    filmImage.src = item.poster
                    filmTitle.innerText = item.title
                    filmDescr.textContent = item.decription
                    runTime.innerText =`Runtime: ${item.runtime} minutes`
                    showTime.innerText =`Showtime: ${item.showtime}`
                    availTickets.innerText =`Tickets available: (${item.capacity - item.tickets_sold})`

                    const ticketsBuy = document.getElementById("buyTicket")
                    let ticket = Number(item.capacity - item.tickets_sold)

                    ticketsBuy.addEventListener('click',()=>{

                        // const ticketRemain = ticket-1
                        ticket --
                        if(ticket <= 0){
                            return availTickets.innerText = "Tickets available: SOLD OUT"

                        }else{
                            return availTickets.innerText = `Tickets available: ${ticket}`
                        }
                        // availTickets.innerText = `Tickets available: ${ticket}`
                        // while(ticket> -1){
                        //     availTickets.innerText = `Tickets available: ${ticket}`
                        //     if(ticket === 0){
                        //         return availTickets.innerText = "SOLD OUT"
                        //     }

                        // }




                        // if(ticket === 0){
                        //     return availTickets.innerText = "SOLD OUT"
                        // }

                        // for(let i = ticket; i > -1 ; i-=1 ){

                        //     const ticketRemain = i
                        //     availTickets.innerText = `Tickets available: ${ticketRemain}`
                        //     if(ticketRemain === 0){
                        //         availTickets.innerText = "SOLD OUT"
                        //     }


                        // }


                    })



                })


            }




        })

    }


    movieDetails()
    moviePlaceHolder()

})
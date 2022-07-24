const tableBody = document.querySelector("#table-body");

let flights = [
    {
      time: "08:11",
      destination: "OMAN",
      flight: "OX 203",
      gate: "A 01",
      remarks: "ON TIME"
     },
    {
      time: "12:39",
      destination: "LONDON",
      flight: "CL 320",
      gate: "C 31",
      remarks: "CANCELLED"
     },
    {
      time: "13:21",
      destination: "DUBAI",
      flight: "DXB 201",
      gate: "A 19",
      remarks: "CANCELLED"
    },
    {
      time: "14:01",
      destination: "FRANKFURT",
      flight: "FR 402",
      gate: "B 02",
      remarks: "ON TIME"
    },
    {
      time: "15:22",
      destination: "TOKYO",
      flight: "TK 211",
      gate: "A 32",
      remarks: "DELAYED"
    }
  ]

  const destinations = ["TOKYO", "FRANKFURT", "DUBAI", "LONDON", "OMAN", "BEIRUT"]
  const remarks = ["ON TIME", "DELAYED", "CANCELLED"]
  let hour = 15;

  function populateTheTable() {
    for (const singleFlight of flights ) {
        console.log(singleFlight)
        const tableRow = document.createElement("tr");
        tableBody.append(tableRow);
        const icon = document.createElement("td");
        icon.textContent = "✈";
        tableRow.append(icon)

        for (const flightDetail in singleFlight) {
            console.log(flightDetail);
            const tableCell = document.createElement("td");
            const word = Array.from(singleFlight[flightDetail]);
            console.log(word)
            for (const [index, value] of word.entries()) {
                console.log(index, value)
                const letterDiv = document.createElement("div");
                setTimeout(() => {
                    letterDiv.classList.add("flip")
                    letterDiv.textContent = value;
                    tableCell.append(letterDiv)
                }, 100 * index)
                console.log(letterDiv)
            }
            tableRow.append(tableCell)
        }
    }
  }
  populateTheTable()
 

  function generateRandomLetters() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomNumber = Math.floor(Math.random() * letters.length);
    return letters.charAt(randomNumber);
  }


  function generateRandomNumbers(maxNumber) {
    const Numbers = "0123456789";
    if(maxNumber) {
      const newNumbers = Numbers.slice(0, maxNumber);
      return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length));
    } else {
      return Numbers.charAt(Math.floor(Math.random() * Numbers.length));
    }
  }

  function generateTime() {
    let displayTime = hour;
    if(hour < 24) {
      hour++;
    }
    if(hour >= 24) {
      hour = 1;
      displayTime = hour;
    }
    if(hour < 10) {
      displayTime = "0"+ hour;
    }
    return displayTime + ":" + generateRandomNumbers(6) + generateRandomNumbers()
  }

  function shuffleTime() {
    flights.shift();
    flights.push(
      {
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateRandomLetters() + generateRandomLetters() + " " + generateRandomNumbers() + generateRandomNumbers() + generateRandomNumbers(),
        gate: generateRandomLetters() + " " + generateRandomNumbers() + generateRandomNumbers(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
      })
      tableBody.textContent = ""
      populateTheTable()
  }

  setInterval(shuffleTime, 5000)
  

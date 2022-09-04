

function test(event) {


    event.preventDefault();
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let subject = document.getElementById("subject")
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.set('Authorization', 'Basic ' +'4867fa453fea05f273b69865d7d3085e'+":" +'9c181f305dd60e7096d085443f28703f');
  


    const data = JSON.stringify({
      "Messages": [{
        "From": {"Email": "zakaressaiydy@gmail.com", "Name": "zakariae essaiydy"},
        "To": [{"Email": email, "Name": name}],
        "Subject": subject,
        "TextPart": message
      }]
    });


  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: data,
    };
  

    fetch("https://api.mailjet.com/v3.1/send", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));


  }
document.addEventListener('DOMContentLoaded', (event) => {
    let age = +prompt("Confirm Your Age");
    let div = document.getElementById('div');
    let divv = document.getElementById('divv');
    let helloJamshid = document.getElementById('helloJamshid');
    let bod = document.getElementById('bod');
    // Hide all elements initially
    div.style.display = 'none';
    divv.style.display = 'none';
    helloJamshid.style.display = 'none';
    bod.style.display = 'none';
    if (isNaN(age) || age < 0) {
      // Handle invalid or negative age (no divv2 anymore)
      bod.style.display = 'none';
      div.style.display = 'flex';
      div.style.height = '100vh';
      div.style.width = '100%';
      div.style.backgroundColor = 'red';
      div.style.color = 'white';
      div.style.alignItems = 'center';
      div.style.justifyContent = 'center';
      div.style.fontFamily = 'cursive';
      div.style.fontWeight = '900';
      div.style.fontSize = '70px';
    } else if (age === 23) {
      // Display "Hello Jamshid" when age is 23
      helloJamshid.style.display = 'flex';
      helloJamshid.style.height = '100vh';
      helloJamshid.style.width = '100%';
      helloJamshid.style.backgroundColor = 'green';
      helloJamshid.style.color = 'white';
      helloJamshid.style.alignItems = 'center';
      helloJamshid.style.justifyContent = 'center';
      helloJamshid.style.fontFamily = 'cursive';
      helloJamshid.style.fontWeight = '900';
      helloJamshid.style.fontSize = '70px';
    } else if (age >= 60) {
      bod.style.display = 'none';
      div.style.display = 'none';
      divv.style.display = 'flex';
      divv.style.height = '100vh';
      divv.style.width = '100%';
      divv.style.backgroundColor = 'black';
      divv.style.color = 'white';
      divv.style.alignItems = 'center';
      divv.style.justifyContent = 'center';
      divv.style.fontFamily = 'cursive';
      divv.style.fontWeight = '900';
      divv.style.fontSize = '70px';
    } else if (age >= 18) {
      div.style.display = 'none';
      divv.style.display = 'none';
      bod.style.display = 'block'; // Show the form or main content
    } else {
      bod.style.display = 'none';
      div.style.display = 'flex';
      div.style.height = '100vh';
      div.style.width = '100%';
      div.style.backgroundColor = 'black';
      div.style.color = 'white';
      div.style.alignItems = 'center';
      div.style.justifyContent = 'center';
      div.style.fontFamily = 'cursive';
      div.style.fontWeight = '900';
      div.style.fontSize = '70px';
      divv.style.display = 'none';
    }
  });
  const sendMessage = (event) => {
    event.preventDefault();
    const Name = document.getElementById('name').value;
    console.log(Name);
    const my_text = ` %0A👤Name: ${Name}`;
    const chat_id = -1002497938815; // Make sure this chat ID is correct
    const token = '7958432129:AAE-PGBnmynyKnY39ehLaqDfXskeBcNeXjk'; // Replace with your actual token
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;
    
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    // Clear input field
    document.getElementById('name').value = "";
};
















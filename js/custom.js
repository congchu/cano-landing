
function sendEmail (){
    alert("hello");
    const email = document.getElementsByName("EMAIL");
    
    alert(email.value);

    let user_email = {
        records: [
          {
            fields: { email: input_mail},
          },
        ],
      };
      
      let response = await fetch(
        "https://api.airtable.com/v0/apprdRViOmvRUpg5E/LandingEmails",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer keywlgmSjQ2ToUwTz",
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(user_email),
        }
      );
      
      let result = await response.json();
      alert(result.message);
      
}
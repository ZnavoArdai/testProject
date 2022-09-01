
function sendMail(){
    let sub=document.getElementById("subject22").value
let email=document.getElementById("Email1msg").value
    console.log(sub)

    btnaContact.target="_blank"
    btnaContact.href=`https://mail.google.com/mail/u/0/?fs=1&to=znavoardai@gmail.com&su=${sub}&body=${email}&bcc=&tf=cm`;


}
sendMail()
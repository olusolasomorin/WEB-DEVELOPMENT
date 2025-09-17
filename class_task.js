const about = document.getElementById("about");
const contact = document.getElementById("contact");
const skill = document.getElementById("skill");

const about_content = document.getElementById("about-cont");
const contact_content = document.getElementById("contact-cont");
const skill_content = document.getElementById("skill-cont");


about.onclick =()=> {
    alert("About me clicked")
    about_content.style.display="block"
    contact_content.style.display="none"
    skill_content.style.display="none"
}

contact.onclick =()=> {
    alert("Contact me clicked")
    about_content.style.display="none"
    contact_content.style.display="block"
    skill_content.style.display="none"
}

skill.onclick =()=> {
    alert("My skill clicked")
    about_content.style.display="none"
    contact_content.style.display="none"
    skill_content.style.display="block"
}
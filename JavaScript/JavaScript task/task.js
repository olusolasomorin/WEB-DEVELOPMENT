const about = document.getElementById("about")
const contact = document.getElementById("contact")
const skill = document.getElementById("skill")

const about_me = document.getElementById("about-me")
const contact_me = document.getElementById("contact-me")
const my_skill = document.getElementById("my-skill")

about.onclick = () => {
    alert("About me section clicked")
    about_me.style.display="block"
    contact_me.style.display="none"
    my_skill.style.display="none"
    about.style.backgroundColor="blue"
    about.style.color="white"
    contact.style.backgroundColor="white"
    contact.style.color="blue"
    skill.style.backgroundColor="white"
    skill.style.color="blue"
}

contact.onclick = () => {
    alert("About me section clicked")
    about_me.style.display="none"
    contact_me.style.display="block"
    my_skill.style.display="none"
    contact.style.backgroundColor="blue"
    contact.style.color="white"
    about.style.backgroundColor="white"
    about.style.color="blue"
    skill.style.backgroundColor="white"
    skill.style.color="blue"
}

skill.onclick = () => {
    alert("About me section clicked")
    about_me.style.display="none"
    contact_me.style.display="none"
    my_skill.style.display="block"
    skill.style.backgroundColor="blue"
    skill.style.color="white"
    contact.style.backgroundColor="white"
    contact.style.color="blue"
    about.style.backgroundColor="white"
    about.style.color="blue"
}
'use strict';


// store variables for type(s) of jobs, the strength of the current job market, and future job projections.
let typeOfJob;
let strengthOfJobMarket;
let futureJobProjections;

// store title name
let title;
let webTitle;

// store the experience that the user gains from learning about the different career trends in different areas
let experience = 0;

// store if each career trend was clicked and the user has gained the expereince so it doesn't repeat and the user can't gain over 30 experience
let gtaExperience = false;
let nationalExperience = false;
let internationalExperience = false;

// store title text
let text1Title;
let text2Title;
let text3Title;

// store text 
let text1;
let text2;
let text3;

// store img text
let img1;
let img2;
let img3;


// display the text for the career trends
function discText(){
    document.getElementById('title').innerText = title;

    const textContainer = document.querySelector('.textContainer');
    document.getElementById('text1').innerText = text1;
    document.getElementById('text2').innerText = text2;
    document.getElementById('text3').innerText = text3;


    // Set background color for the entire container when text is present
    if (text1 || text2 || text3) {
        textContainer.style.backgroundColor = 'grey';
        document.getElementById('text1').hidden = false;
        document.getElementById('text2').hidden = false;
        document.getElementById('text3').hidden = false;
        document.getElementById('text1-title').hidden = false;
        document.getElementById('text2-title').hidden = false;
        document.getElementById('text3-title').hidden = false;
        
    }
}


// change the variables for the trends for the GTA trend

function img1Disc(){ 
    // change variables depending on which image/button clicked and what page the user is on 
    if (page == 2){
        
        title = "Greater Toronto Area Career Trends"
        text1 = "In the Greater Toronto Area, artificial intelligence and machine learning are major trends in the computer science job market." + 
                    " Roles like AI researchers, data scientists, machine learning engineers, and AI consultants are in high demand."
        text2 = "Toronto is one of the leading AI hubs globally, with a strong AI ecosystem supported by government funding, local tech startups," +
                            "and major companies like Google, Uber, and Shopify setting up AI labs in the GTA. The Vector Institute for Artificial Intelligence also contributes to" +
                            "the growth of AI in the region. It has increased 63,800 jobs and 29% growth in 2022."
        text3 = "The demand for AI and ML roles is expected to grow by 30-40% over the next decade in Toronto, as industries like healthcare," + 
                                "finance, and manufacturing increasingly adopt AI-based solutions. According to the growth of increased tech jobs, the GTA's tech job growth rate will" + 
                                "be around 30-50% in the future years. The total employment rate of the GTA for tech jobs is around 9.75%."
        discText();
        // Only allow the user to get experience from the image once
        if (!img1Experience){
            experience = experience + 10
            img1Experience = true;
            }
        
        titleText();
        // Scroll to the textContainer
        document.querySelector('.textContainer').scrollIntoView({ behavior: 'smooth' });
        nextLevelrequirement()
        experienceText()
        }

    }

// change the variables for the trends for the national trend
function img2Disc(){
    // change variables depending on which image/button clicked and what page the user is on 
    title = "National Career Trends"
    text1 = "In Canada, cybersecurity is a major trend in the Canadian job market. Positions like cybersecurity analysts, and threat intelligence analysts are highly in demand." 
    text2 = "There has been a growing concern about digital security, especially with the rise in cyberattacks on businesses, healthcare, and government institutions." +
                            "The federal government, along with provinces, is investing heavily in improving Canada’s cybersecurity infrastructure," +
                            "leading to a robust demand for talent across the country.";
    text3 = "The cybersecurity industry is expected to grow around 8.2% annually in Canada.";
    discText();
    // Only allow the user to get experience from the image once
    if (!img2Experience){
        experience = experience + 10
        img2Experience = true;
        }
    // Scroll to the textContainer
    document.querySelector('.textContainer').scrollIntoView({ behavior: 'smooth' });
    nextLevelrequirement()
    experienceText()
    titleText();
}

// change the variables for the trends for the GTA
function img3Disc(){
    // change variables depending on which image/button clicked and what page the user is on 
    title = "International Career Trends"
    text1 = " Quantum computing is emerging as a significant field internationally, with positions like quantum software developers, quantum researchers, and quantum algorithm engineers becoming more available. Big tech companies like IBM and Google are investing in quantum research internationally."
    text2 = " Countries like the U.S., Germany, China, and Japan are leading the way in quantum computing research and development. As quantum computing moves from theoretical models to practical applications, job openings have surged in top research institutions and tech companies." 
    text3 = " Quantum Computing has an estimated annual growth rate of around 30% during 2020-2026"
    
    discText();
    // Only allow the user to get experience from the image once
    if (!img3Experience){
        experience = experience + 10
        img3Experience = true;
        }
    // Scroll to the textContainer
    document.querySelector('.textContainer').scrollIntoView({ behavior: 'smooth' });
    nextLevelrequirement()
    experienceText();
    titleText();
}

// display text of how much experience the user has
function experienceText(){
    document.getElementById('xp').innerText = experience + " experience"
}

function nextLevelrequirement(){
    if (experience == 30){
        document.getElementById('next-button').disabled = false;
    }
}

function loadImg(){
    document.getElementById('img1').src = img1;
    document.getElementById('img2').src = img2;
    document.getElementById('img3').src = img3;
}
function start(){
    img1 = "https://media.istockphoto.com/id/950485392/vector/greater-toronto-area-administrative-and-political-map.jpg?s=612x612&w=0&k=20&c=Wtf-juc8OmT2TiY7lCin3ogNsTZI8LiD10LNcISy0Mk=";
    img2 = "https://www.map-of-canada.org/map-of-canada-724.jpg";
    img3 = "https://www.worldometers.info/world-map/world-map-pro.jpg";
    loadImg();

    }


function titleText(){
    text1Title= "Type of job";
    text2Title= "Strength of Job Market";
    text3Title= "Future Job Projection";
    document.getElementById('text1-title').innerText = text1Title;
    document.getElementById('text2-title').innerText = text2Title;
    document.getElementById('text3-title').innerText = text3Title;
}
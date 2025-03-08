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

// store if each imgage was clicked and the user has gained the expereince so it doesn't repeat and the user can't gain over 30 experience
let gtaExperience = false;
let nationalExperience = false;
let internationalExperience = false;
let coopExperience = false;
let jobShadowExperience = false;
let careerFairExperience = false;
let uwExperience = false;
let uftExperience = false;
let connestogaExperience = false;


// store which page the user is on 
let page = 2;

// store title text
let text1Title;
let text2Title;
let text3Title;

// store text for the image discriptions
let text1;
let text2;
let text3;

// store img text
let img1;
let img2;
let img3;

// store the variable for the background  img
let backgroundImg;

// store img button text
let img1Button;
let img2Button;
let img3Button;


// display the text for the career trends
function discText(){
    document.getElementById('title').innerText = title;

    const textContainer = document.querySelector('.textContainer');
    document.getElementById('text1').innerText = text1;
    document.getElementById('text2').innerText = text2;
    document.getElementById('text3').innerText = text3;


    // Set background color for the entire container when text is present
    if (text1 || text2 || text3) {
        textContainer.style.backgroundColor = '#fbeee0';
        document.getElementById('text1').hidden = false;
        document.getElementById('text2').hidden = false;
        document.getElementById('text3').hidden = false;
        document.getElementById('text1-title').hidden = false;
        document.getElementById('text2-title').hidden = false;
        document.getElementById('text3-title').hidden = false;
        
    }
}

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
        // make it so that user can only click on the image once and gain experience and after they click it again they can't get any more exerience from the same image
        if (!gtaExperience){
            experience = experience + 10
            gtaExperience = true;
            }
        
        titleText();


        }


    else if (page ==3){
         // change variables depending on which image/button clicked and what page the user is on 
        title = "Co-op Program";
        text1Title = "History";
        text2Title = "Cost";
        text3Title = "During the Program";
        showTitleText();
        text1 = "Waterloo Comp Sci is well known for its strong co-op program and offers many great opportunities to get into the tech industry. The first co-op program in Waterloo began in 1975 for economics and opened to other majors throughout a few years.";
        text2 = "Coop Tuition: $17,786 \n Non-Coop Tuition: $17,000";
        text3 = "The coop program takes 5 years, and you will have one work placement each year. You will have around 3-4 months for each work placement. There are no additional graduation requirements compared to any other normal program other than you will have to study for 5 years instead of 4 for many other programs."
        discText();
        // make it so that user can only click on the image once and gain experience and after they click it again they can't get any more exerience from the same image
        if (!coopExperience){
            experience = experience + 10
            coopExperience = true;
            }
    }

    else if (page == 4){
         // change variables depending on which image/button clicked and what page the user is on 
        title = "Univeristy of Waterloo";
        text1Title = "Institution Overview";
        text2Title = "Program Details";
        text3Title = "Costs & Requirements";
        showTitleText();
        text1 = "Unviersity of Waterloo\n \n The Univeristy of Waterloo, founded in 1957, pioneered cooperative education in Canada, integrating academic learning with work experience. Known for strengths in engineering, computer science, and innovation, Waterloo has grown into a global leader in experiential learning and entrepreneurship, connecting students with industry for hands-on experience. Waterloo Computer Science is well known for its strong co-op program and offers many great opportunities to get into the tech industry. The first co-op program in Waterloo began in 1975 for economics and opened to other majors throughout a few years.";
        text2 = "Computer Science \n \n Length of Program: 5 years \n\n Course of Study:\n \n CS 115 - Introduction to Computer Science 1\nCS 135 - Designing Functional Programs\nCS 136 - Elementary Algorithm Design and Data Abstraction\nCS 136L - Tools for Software Development (0.25 unit)\nCS 240 - Data Structures and Data Management\nCS 241 - Foundations of Sequential Programs\nCS 245 - Logic and Computation\nCS 246 - Object-Oriented Software Development\nCS 251 - Computer Organization and Design\nCS 341 - Algorithms\nCS 350 - Operating Systems\nCS 340-398 - Advanced Special Topics in Computer Science\nCS 440-489 - Advanced Topics in Computer Science (higher level)\nCS 499T - Thesis\nCS 6XX/CS 7XX - Graduate-level courses in Computer Science\nCO 487 - Applied Cryptography\nSTAT 440 - Computational Inference\nOne of\nCS 440-498 - Advanced Topics in Computer Science (varies depending on specific course number)\nCS 499T - Undergraduate Thesis\nCS 6XX - Graduate-level Computer Science courses (varies depending on specific course)\nCS 7XX - Graduate-level Computer Science courses (varies depending on specific course)\nCO 487 - Applied Cryptography\nSTAT 440 - Computational Inference\nMATH 135 – Algebra for Honours Mathematics\nMATH 136 – Linear Algebra 1 for Honours Mathematics\nMATH 137 – Calculus 1 for Honours Mathematics\nMATH 138 – Calculus 2 for Honours Mathematics\nMATH 239 – Introduction to Combinatorics\nSTAT 230 – Probability\nSTAT 231 – Statistics for Computer Science";
        text3 = "Admission Requirements: Six 4U/M courses, including:\nAdvanced Functions\nCalculus and Vectors\nAny Grade 12 U English\nOne other 4U course\nAdmission average: Individual selection from the low to mid-90s\n\n Cost throughout the entire program\nTuition: $60,000 to $80,000\nTextbooks: $2,500 to $5,000\nHousing: $30,000 to $50,000\nFood: $15,000 to $25,000\nUtilities/Internet: $6,000 to $12,000\nTransportation: $2,500 to $5,000\nMiscellaneous: $10,000 to $15,000"
        discText();
        // make it so that user can only click on the image once and gain experience and after they click it again they can't get any more exerience from the same image
        if (!uwExperience){
            experience = experience + 10
            uwExperience = true;
            }
    }

    // Scroll to the textContainer
    document.querySelector('.textContainer').scrollIntoView({ behavior: 'smooth' });

    nextLevelrequirement()
    experienceText()
    xpBar();

}

function img2Disc(){

    if (page == 2){
        // change variables depending on which image/button clicked and what page the user is on 
        title = "National Career Trends"
        text1 = "In Canada, cybersecurity is a major trend in the Canadian job market. Positions like cybersecurity analysts, and threat intelligence analysts are highly in demand." 
        text2 = "There has been a growing concern about digital security, especially with the rise in cyberattacks on businesses, healthcare, and government institutions." +
                                "The federal government, along with provinces, is investing heavily in improving Canada’s cybersecurity infrastructure," +
                                "leading to a robust demand for talent across the country.";
        text3 = "The cybersecurity industry is expected to grow around 8.2% annually in Canada.";
        // make it so that user can only click on the image once and gain experience and after they click it again they can't get any more exerience from the same image
        if (!nationalExperience){
            experience = experience + 10
            nationalExperience = true;
            }
        titleText();
    }

    else if (page== 3){
        // change variables depending on which image/button clicked and what page the user is on 
        text1Title = "What is Job Shadowing?";
        text2Title = "UofT Job Shadowing Program";
        text3Title = "Length";
        title = "Job Shadowing"
        text1 = "Job shadowing means that a student can follow someone in their field who is working and see how they get through their day to better understand what the job entails." 
        text2 = "The University of Toronto offers its students and recent graduates a job shadowing program. The UfT job shadowing program allows students and recent graduates to develop their career ideas and connect with diverse individuals to practice networking. It also allows them to understand the workplace culture and deepen their interest.";
        text3 = " The length of the job shadowing lasts for around 1-2 days.";
        
        if (!jobShadowExperience){
            experience = experience + 10
            jobShadowExperience = true;
            }
        
    }

    else if (page ==4){
         // change variables depending on which image/button clicked and what page the user is on 
        title = "Univeristy of Toronto";
        text1Title = "Institution Overview";
        text2Title = "Program Details";
        text3Title = "Costs & Requirements";
        
        text1 = "Unviersity of Toronto\n \n The University of Toronto (UofT), founded in 1827, began as King's College and became a secular institution in 1850. It's now one of the world's top research universities, known for discoveries like insulin and innovations in fields like AI and medicine. Located in downtown Toronto, UofT's St. George campus is its largest, attracting students globally with a strong reputation for academic excellence and cutting-edge research.";

        text2 = "Computer Science \n \n Length of program: 5 years \n\n Course of Study: CSC148H1: Introduction to Computer Science\nCSC165H1: Mathematical Expression and Reasoning for Computer Science\nCSC207H1: Software Design\nCSC236H1: Introduction to the Theory of Computation\nCSC240H1: Enriched Introduction to the Theory of Computation\nCSC263H1: Data Structures and Analysis\nSTA247H1: Probability with Computer Applications\nSTA237H1: Probability, Statistics and Data Analysis I\nSTA255H1: Statistical Theory\nSTA257H1: Probability and Statistics I\nCSC209H1: Software Tools and Systems Programming\nCSC299H1: Research Opportunity Program\nCSC299Y1: Research Opportunity Program\nBCB410H1: Applied Bioinformatics\nBCB420H1: Computational Systems Biology\nMAT223H1: Linear Algebra I\nMAT235Y1";

        text3 = "Entrance Requirements: \n\nSix 4U/M courses, including: \nCalculus & Vectors (MCV4U)\n English (ENG4U) \n\n Cost of Program:\nTuition: $30,500 to $70,900\nTextbooks: $5,000 to $7,500\nHousing: $45,000 to $75,000\nFood: $15,000 to $25,000\nUtilities/Internet: $6,000 to $12,000\nTransportation: $2,500 to $5,000\nMiscellaneous: $10,000 to $15,000";
        discText();
        showTitleText();

        // make it so that user can only click on the image once and gain experience and after they click it again they can't get any more exerience from the same image
        if (!uftExperience){
            experience = experience + 10
            uftExperience = true;
            }
    
    
    }

    // Scroll to the textContainer
    document.querySelector('.textContainer').scrollIntoView({ behavior: 'smooth' });

    
    nextLevelrequirement()
    experienceText()
    discText();
    showTitleText();
    xpBar();
}

// change the variables for the trends for the GTA
function img3Disc(){
    if (page == 2){
        // change variables depending on which image/button clicked and what page the user is on 
        title = "International Career Trends"
        text1 = " Quantum computing is emerging as a significant field internationally, with positions like quantum software developers, quantum researchers, and quantum algorithm engineers becoming more available. Big tech companies like IBM and Google are investing in quantum research internationally."
        text2 = " Countries like the U.S., Germany, China, and Japan are leading the way in quantum computing research and development. As quantum computing moves from theoretical models to practical applications, job openings have surged in top research institutions and tech companies." 
        text3 = " Quantum Computing has an estimated annual growth rate of around 30% during 2020-2026"
        
        if (!internationalExperience){
            experience = experience + 10
            internationalExperience = true;
            }

        
        titleText();
    }

    else if (page == 3){
        // change variables depending on which image/button clicked and what page the user is on 
        title = "International Career Trends"
        text1Title = "Which Job Fair?";
        text2Title = "Location";
        text3Title = "Time & Date";
        text1 = "Toronto Job Fair"
        text2 = "Virtual Job Fair" 
        text3 = "Wednesday, October 16, 11 am - 3pm"
        if (!careerFairExperience){
            experience = experience + 10
            careerFairExperience = true;
            }
    }
    else if (page ==4){
        // change variables depending on which image/button clicked and what page the user is on 
       title = "Univeristy of Toronto";
       text1Title = "Institution Overview";
       text2Title = "Program Details";
       text3Title = "Costs & Requirements";
       showTitleText();
       text1 = "Connestoga College\n \n Conestoga College was established in 1967 in Kitchener, Ontario, as part of Ontario’s initiative to create colleges of applied arts and technology. It began by offering career-oriented diploma programs but has since expanded to provide a range of degrees, diplomas, and certifications. Known for its emphasis on hands-on, practical learning, Conestoga has a strong reputation in fields like technology, business, and health sciences, and maintains close ties with local industries to ensure graduates are job-ready.";

       text2 = "Computer Science \n \n Length of program: 4 years \n\n Course of Study: Conestoga 101 (CON0101)\nSoftware Engineering Fundamentals (CSCN71000)\nComputer Systems Architecture Fundamentals\nProject I: Software Implementation and Unit Testing (CSCN71020)\nScientific and Technical Communications (ENGL71200)\nLinear Algebra and Discrete Mathematics (MATH71010)\nProgramming Principles (PROG71990)\nProject II: Team Based Software Development (CSCN71030)\nObject Oriented Programming (PROG71020)\nUser Experience Design (PROG71030)\nOperating Systems and Security Fundamentals (PROG71040)\nData Structures and Algorithms (PROG72370)\nGroup Dynamics (SOC71500)\nCo-op and Career Preparation (CEPR71050)\nIntroduction to Database Systems (CSCN72000)\nSoftware Quality I: Testing Tools and Methodologies (CSCN72010)\nComputer Networks (CSCN72020)\nProject III: Software Development Life Cycle (CSCN72030)\nSystems Analysis and Design (SENG71000)\nProject IV: Mobile and Networked Environments (COMP72070)\nSoftware Design Techniques (CSCN72040)\nMobile and Networked Systems (CSCN72050)\nSoftware Quality II: User Experience Evaluation (CSCN72060)\nAdvanced Technical Communication (ENGL73170)\nProbability and Statistics (STAT72000)\nParallel Computing Techniques (CSCN73000)\nSoftware Quality III: Build and Release (CSCN73010)\nProject V: Advanced Software Development (CSCN73030)\nUnderstanding Research (RSCH73000)\nIntroduction to Software Security (SECU73000)\nSoftware Quality IV: Performance and Analysis (CSCN73040)\nProject VI: Software Efficiency and Performance (CSCN73060)\nEnterprise Application Development (PROG73020)\nAnalysis of Algorithms (PROG73030)";


       text3 = "Admission requirements: \n\nOntario Secondary School Diploma (OSSD) or 19 years of age or older\nSix 4U/M courses with a minimum cumulative average of 65% with the following required courses:\nENG4U\nAny 4U math\nAny four additional 4U/M courses\n \n Cost of program:\nTuition: $18,000 to $28,000\nTextbooks: $2,000 to $4,000\nHousing: $24,000 to $48,000\nFood: $12,000 to $20,000\nUtilities/Internet: $4,800 to $9,600\nTransportation: $2,000 to $4,000";
       discText();

       // make it so that user can only click on the image once and gain experience and after they click it again they can't get any more exerience from the same image
       if (!connestogaExperience){
        experience = experience + 10
        connestogaExperience = true;
        }
   
   }


    // Scroll to the textContainer
    document.querySelector('.textContainer').scrollIntoView({ behavior: 'smooth' });
    nextLevelrequirement()
    experienceText()
    discText();
    showTitleText();
    xpBar();
}
// print how much experience the user has
function experienceText(){
    document.getElementById('xp').innerText = experience + " experience"
}

// check the amount of experience needed to go to the next page
function nextLevelrequirement(){
    if (experience == 40 || experience == 70 || experience == 100){
        document.getElementById('next-button').disabled = false;
    }
   
}

// change the xp bar length depending on how much xp the user has
function xpBar(){
    if (experience == 10) {
        document.querySelector(".html").style.width = "10%";
    } else if (experience == 20) {
        document.querySelector(".html").style.width = "20%";
    } else if (experience == 30) {
        document.querySelector(".html").style.width = "30%";
    } else if (experience == 40) {
        document.querySelector(".html").style.width = "40%";
    } else if (experience == 50) {
        document.querySelector(".html").style.width = "50%";
    } else if (experience == 60) {
        document.querySelector(".html").style.width = "60%";
    } else if (experience == 70) {
        document.querySelector(".html").style.width = "70%";
    } else if (experience == 80) {
        document.querySelector(".html").style.width = "80%";
    } else if (experience == 90) {
        document.querySelector(".html").style.width = "90%";
    } else if (experience == 100) {
        document.querySelector(".html").style.width = "100%";
    }
}
// turn on the overlay when clicked on the menu button
function on(){
    document.getElementById("overlay").style.display = "block";
}

// turn off the overlay when clicked on the menu button
function off(){
    document.getElementById("overlay").style.display = "none";
}

// go to page 1
function returnPage1(){
    window.location.href = "page1.html";
}


    
   

// display images
function loadImg(){
    document.getElementById('img1').src = img1;
    document.getElementById('img2').src = img2;
    document.getElementById('img3').src = img3;
}

// change variables for page two when the page is opened
function start(){
    console.log(page)
    if (page == 2){
        
        img1 = "https://media.istockphoto.com/id/950485392/vector/greater-toronto-area-administrative-and-political-map.jpg?s=612x612&w=0&k=20&c=Wtf-juc8OmT2TiY7lCin3ogNsTZI8LiD10LNcISy0Mk=";
        img2 = "https://www.map-of-canada.org/map-of-canada-724.jpg";
        img3 = "https://www.worldometers.info/world-map/world-map-pro.jpg";
        loadImg();
        titleText();
        webTitle = "Career Trends";
        document.getElementById('web-title').innerText = webTitle;
        experience = 10;
        document.getElementById('xp').innerText = experience + " experience";
        xpBar();
    }

}
// display title text and button text
function showTitleText(){
    document.getElementById('text1-title').innerText = text1Title;
    document.getElementById('text2-title').innerText = text2Title;
    document.getElementById('text3-title').innerText = text3Title;
    document.getElementById('img1-button').innerText = img1Button;
    document.getElementById('img2-button').innerText = img2Button;
    document.getElementById('img3-button').innerText = img3Button;
}

// print the title texts
function titleText(){
    text1Title= "Type of job";
    text2Title= "Strength of Job Market";
    text3Title= "Future Job Projection";
    img1Button= "Greater Toronto Area";
    img2Button= "National";
    img3Button= "International";
    showTitleText()
}

// change elements dependingn on the page
function pageLoad(){
    document.getElementById('web-title').innerText = webTitle; 
    document.getElementById('title').innerText = title;
    document.getElementById('body').style.backgroundImage = `url(${backgroundImg})`;
    loadImg();
    showTitleText();
}

// change page nuumber and the info on each page 
function nextPage(){
    // change page number variable
    if (page==2 && experience == 40){
        page = 3;
    }
    // change page number variable
    else if(page == 3 && experience == 70){
        page = 4;
    }
    // change page number variable
    else if (page==4 && experience == 100){
        page = 5;
    }

    // change variables for page 4
    if (page== 3){
        
        webTitle = "Experiencial Learning";
        title = "Experiencial Learning";
        img1 = "https://i.ytimg.com/vi/s42iS7g67zo/maxresdefault.jpg";
        img2 = "https://www.mentordino.com/wp-content/uploads/2020/10/Job-Shadowing.jpg";
        img3 = "https://img.freepik.com/premium-photo/cartoon-career-fair-is-shown-yellow-background_1217673-158842.jpg"
        document.getElementById('page3-child').hidden = false;
        backgroundImg = "https://images2.alphacoders.com/747/thumb-1920-747506.jpg";
        
        img1Button = "Co-op";
        img2Button = "Job Shadow";
        img3Button = "Career Fair";
        pageLoad();
        
    }
    // change variables for page 4
    else if (page ==4){
        
        webTitle = "Post-Secondary";
        title = "Post-Secondary";
        img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhZ98u3aFtHqQcFxUAih13vfEmyG9_DNHcA&s";
        img1 = "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/University_of_Waterloo_seal.svg/1200px-University_of_Waterloo_seal.svg.png";
        img3 = "https://greeneconomy.ca/wp-content/uploads/2021/09/logo-conestoga-college.png";
        img2Button = "University of Toronto";
        img1Button = "Univeristy of Waterloo";
        img3Button = "Conestoga College";
        backgroundImg = "https://wallpaperaccess.com/full/1850680.jpg"; 
        document.getElementById('page4-adult').hidden = false;
        document.getElementById('page3-child').hidden = true;
        pageLoad();
    }

    else if (page ==5 && experience == 100){
        window.location.href = "page5.html"
    }
}






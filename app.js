var Data = {

    mee: {
        name: 'Muneer Hussain',
        email: 'meermuneer1111@gmail.com',

    },
    objective: {
        objective: 'Seeking an opportunity where i can contribute my education & nalytical skills foe the prestigious. And renowned organization likes yours. I believe work with the team co-ordination nad expecting to serve with the Capabilities with long term and result-oriented achievement. This will allow mw to further utilize my exiting skills and enable to acquire new abilities.'},
        
    personalInformation:{
        fatherName: 'Muhammad Ismail',
        dateOfBirth: '05-July-1998',
        nic: '42301-6299290-1',
        nationality: 'Pakistani',
        religion: 'Islam',
        cell: '03353450411',
    },

    educationInformation: {
        commerce: '1st year (Commerce) from Quaid-e-Millat College',
    },

    otherSkills:{
        msoffice: 'MS Office',
        graphic: 'Graphic (Adobe Photoshop , Illustrator)',
        webDesigner: 'Web Designing from Ibraheem jamal (kharadar) And Saylani (MassTraining)', 
    },

    language:{
        language: ['English' , 'Urdu' , 'Arabic'],
    },

    experience:{
        shop: 'Shop Keeper in a general Store (2 years)',
        designing: 'Graphic Designing (3 years)',

    },

}



 document.getElementById('myName').innerHTML = Data.mee.name;
 document.getElementById('email').innerHTML = Data.mee.email;

 document.getElementById('Objective').innerHTML = Data.objective.objective;

 document.getElementById('fatherName').innerHTML = Data.personalInformation.fatherName;
 document.getElementById('dateOfBirth').innerHTML = Data.personalInformation.dateOfBirth;
 document.getElementById('nic').innerHTML = Data.personalInformation.nic;
 document.getElementById('nationality').innerHTML = Data.personalInformation.nationality;
 document.getElementById('religion').innerHTML = Data.personalInformation.religion;
 document.getElementById('cell').innerHTML = Data.personalInformation.cell;


 document.getElementById('EducationInformation').innerHTML = Data.educationInformation.commerce;

 document.getElementById('skill1').innerHTML = Data.otherSkills.msoffice;
 document.getElementById('skill2').innerHTML = Data.otherSkills.graphic;
document.getElementById('skill3').innerHTML = Data.otherSkills.webDesigner;

document.getElementById('Language1').innerHTML = Data.language.language[0];
document.getElementById('Language2').innerHTML = Data.language.language[1];
document.getElementById('Language3').innerHTML = Data.language.language[2];

document.getElementById('Experience1').innerHTML = Data.experience.shop;
document.getElementById('Experience2').innerHTML = Data.experience.designing;


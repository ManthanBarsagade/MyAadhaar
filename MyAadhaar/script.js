
const infoOne = [{
    title: "Document Update",
    desc: "Click Here to upload your Proof of Identity (PoI) and Proof of Address (PoA) Documents. This service is free of cost till 14/12/2023",
    img: "https://myaadhaar.uidai.gov.in/static/media/DocumentUpdate.65ceb110.svg"
},
{
    title: "Download Aadhaar",
    desc: "Click here to download digitally signed and password protected electronic copy of the Aadhaar",
    img: "https://myaadhaar.uidai.gov.in/static/media/RetrieveUid.3698f8e5.svg"

},
{
    title: "Retrieve EID / Aadhaar number",
    desc: "Click here to find out Aadhaar number or Enrolment ID (EID).",
    img: "https://myaadhaar.uidai.gov.in/static/media/OrderPVC.6d5f4b1e.svg"
},
{
    title: "Verify Email/Mobile",
    desc: "Click here to verify mobile and email registered with the Aadhaar.",
    img: "https://myaadhaar.uidai.gov.in/static/media/VerifyMobile.f06f31ed.svg"

},
{
    title: "VID Generator",
    desc: "Click here to generate 16 Digit Virtual ID(VID)linked to your Aadhaar.",
    img: "https://myaadhaar.uidai.gov.in/static/media/GenerateVirtualId.4f686149.svg"

},
{
    title: "Lock / Unlock Aadhaar",
    desc: "Click here to temporarily lock/unlock your Aadhaar. Please use this service carefully.",
    img: "https://myaadhaar.uidai.gov.in/static/media/AadhaarLockUnlock.7faddebf.svg"

},
{
    title: "Bank Seeding Status",
    desc: "Click here to find your Bank Seeding Status.",
    img: "https://myaadhaar.uidai.gov.in/static/media/BankLinking.2f5998ed.svg"

}
]

const infoTwo = [
    {
        title: "Order Aadhaar PVC Card",
        desc: "Click here to order a secure, wallet-sized Aadhaar PVC card.",
        img: "https://myaadhaar.uidai.gov.in/static/media/OrderPVC.6d5f4b1e.svg"
    },
    {
        title: "Check Aadhaar PVC Card Order Status",
        desc: "Click here to check the status of the already ordered PVC card.",
        img: "https://myaadhaar.uidai.gov.in/static/media/OrderPVCStatusIcon.39852724.svg"
    },
    {
        title: "Check Enrolment & Update Status",
        desc: "Click here to check the status of the Enrolment or Update request.",
        img: "https://myaadhaar.uidai.gov.in/static/media/EnrolmentStatusIcon.1da8598a.svg"
    }, {
        title: "Locate Enrolment Center",
        desc: "Click here to search and locate nearby Aadhaar Seva Kendras.",
        img: "https://myaadhaar.uidai.gov.in/static/media/LecIcon.ec816ce5.svg"
    }, {
        title: "Book an Appointment",
        desc: "Click here to book an Appointment for Enrolment or Update.",
        img: "https://myaadhaar.uidai.gov.in/static/media/BookAppointmentIcon.145e2775.svg"
    }, {
        title: "Check Aadhaar Validity",
        desc: "Click here to validate the status of the Aadhaar.",
        img: "https://myaadhaar.uidai.gov.in/static/media/CheckAadhaarValidityIcon.500f1afd.svg"
    }, {
        title: "File a complaint",
        desc: "Click here to file a complaint",
        img: "https://myaadhaar.uidai.gov.in/static/media/FileAComplaintIcon.4450c8d4.svg"
    }, {
        title: "Check Complaint Status",
        desc: "Click here to check the status of the complaint",
        img: "https://myaadhaar.uidai.gov.in/static/media/CheckComplaintStatusIcon.225aeb96.svg"
    }, {
        title: "Feedback",
        desc: "Click here to submit Feedback.",
        img: "https://myaadhaar.uidai.gov.in/static/media/FeedbackIcon.98ae4904.svg"
    },
];


function abcd(elemSelector, dataInfo) {

    const main = document.querySelector(elemSelector);


    for (let i = 0; i < dataInfo.length; i++) {

        const wrapperDiv = document.createElement('div')
        wrapperDiv.classList.add('service-card');

        const secDiv = document.createElement('div')
        secDiv.classList.add('service-card__service-container');

        const thrDiv = document.createElement('div')
        thrDiv.classList.add('service-card__info-section');

        const fourthDiv = document.createElement('div')
        fourthDiv.classList.add('service-card__service-logo');

        const imgEle = document.createElement('img')
        imgEle.src = dataInfo[i].img;

        fourthDiv.appendChild(imgEle)



        const fithDiv = document.createElement('div')
        fithDiv.classList.add('service-card__info-text');

        const fithFirstDiv = document.createElement('div')
        fithFirstDiv.classList.add('service-card__label');
        fithFirstDiv.textContent = dataInfo[i].title;

        const fithSecDiv = document.createElement('div')
        fithSecDiv.classList.add('service-card__description');
        fithSecDiv.textContent = dataInfo[i].desc;

        fithDiv.appendChild(fithFirstDiv);
        fithDiv.appendChild(fithSecDiv);

        thrDiv.appendChild(fourthDiv);
        thrDiv.appendChild(fithDiv);

        secDiv.appendChild(thrDiv);
        wrapperDiv.appendChild(secDiv);


        const arrowDiv = document.createElement('div')
        arrowDiv.classList.add('service-card__arrow-icon');

        const arrowImgEle = document.createElement('img')
        arrowImgEle.src = "https://myaadhaar.uidai.gov.in/static/media/arrowRight.36a2fb68.svg";

        arrowDiv.appendChild(arrowImgEle);
        secDiv.appendChild(arrowDiv);

        const crossDiv = document.createElement("button")
        crossDiv.classList.add('corss_Icon', onclick = "checker()");

        // crossDiv.addEventListener("click", function(event){
        //     console.log('checking new method been called ', wrapperDiv);
        //     wrapperDiv.remove();
        // });
        crossDiv.addEventListener('click', function (checker) {
            var result = confirm('Are you sure?');
            if (result == true) {
                removeData(i, dataInfo, elemSelector);
            }
        });

        // crossDiv.addEventListener("click", function (event) {
        // });



        const crossEle = document.createElement('img')
        crossEle.src = "https://designcode.io/images/icons/close-input.svg";

        crossDiv.appendChild(crossEle);
        secDiv.appendChild(crossDiv);


        main.appendChild(wrapperDiv);

    }

}


abcd(".services__services-container.one", infoOne);
abcd(".services__services-container.two", infoTwo);

let z = document.querySelector(".header-languages");
let display = 0;

function hideShow() {
    if (display == 1) {
        z.style.display = 'none';
        display = 0;
    }
    else {
        z.style.display = 'flex';
        display = 1;
    }
};

function removeData(indexNum, dataSet, wrapperEleSelector) {
    if (indexNum > -1) {
        dataSet.splice(indexNum, 1);

        const mainContainer = document.querySelector(wrapperEleSelector);
        mainContainer.innerHTML = "";

        abcd(wrapperEleSelector, dataSet);
    }

}

function addData(event) {
    event.preventDefault();

    const tname = document.getElementById("Title").value;
    const dname = document.getElementById("Description").value;
    const iname = document.getElementById("Image").value;
    const varName = document.getElementById("varName").value;

    let arrayToUpdate;
    let containerClassName;


    const dataObj = {
        'title': tname,
        'desc': dname,
        'img': iname
    }

    if (varName === "InfoOne") {
        arrayToUpdate = infoOne;
        containerClassName = ".services__services-container.one";
    } else {
        arrayToUpdate = infoTwo;
        containerClassName = ".services__services-container.two";
    }

    arrayToUpdate.push(dataObj);
    document.querySelector(containerClassName).innerHTML = "";
    abcd(containerClassName, arrayToUpdate);

    // close popup
    document.querySelector(".popup").classList.remove("active");
}


document.querySelectorAll(".popUpTrigger").forEach((triggerEle) => {
    triggerEle.addEventListener("click", function () {
        console.log('checking trigger', this.name);

        document.getElementById('varName').value = this.name;
        document.querySelector(".popup").classList.add("active");
    });
})

document.querySelector("#cancel").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
});


// const output = document.getElementById("output");
// console.log(output);

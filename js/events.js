document.addEventListener("DOMContentLoaded", function () {
    const events = [
        {
            title: "Career Dev and Interview Prep ft. AWS!",
            date: "Oct. 3rd, 2024",
            location: "Daly Science 206",
            description:
                "Get ready for a workshop interview preparation and career development with Amazon AWS Engineers Stephen Mistele and Japjot Walia! Whether you're gearing up for your first interview or looking to advance your career, this is your chance to gain insights from those who have been through it all. Don't miss out on this opportunity to learn from industry professionals and ask your questions directly on Thursday, October 3, at 7:15 pm in Daly Science 206.",
            image: "https://firebasestorage.googleapis.com/v0/b/scu-acm.appspot.com/o/flyers%2F4cTV96UWLjIWjyLjQp3A.png?alt=media&token=6ff5a367-43d4-48ee-b536-cb5986cbdd89",
            week: 40,
        },
        {
            title: "Intro: Rag + Prompt Engineering w/ Bedrock & Sagemaker Demo",
            date: "Oct. 15th, 2024",
            location: "Kenna 104",
            description:
                "Ready to learn about AI Engineering with Amazon? On Tuesday, October 15, from 5:45 - 6:45 pm in Kenna Room 104, join us for an AWS Workshop where you’ll dive into Prompt Engineering and experience live demos of Bedrock & Sagemaker—the AI tools Amazon uses! No experience is needed! This is an incredible opportunity to learn from an industry expert and get hands-on with AI technologies. Don't miss out on this exciting workshop!",
            image: "../img/week3.png",
            week: 41,
        },
        {
            title: "AWS Workshop Catch Up",
            date: "Oct. 21st, 2024",
            location: "SCDI 2301",
            description:
                "Missed our meeting last week? Want a second look at the topics covered by our AWS professionals? Then this workshop is for you! Join us TONIGHT for a look into resources for learning AI, a look at the AWS console interface, and an intro into the prompt engineering you'll be doing for the hackathon!",
            image: "../img/workshops.png",
            week: 42,
        },
        {
            title: "Intro: Computer Vision & Intro to Rekognition, Textrack, and OpenCV",
            date: "Oct. 29th, 2024",
            location: "Kenna 104",
            description:
                "New week, new AWS tech! This time we're diving into Computer Vision and exploring the world of Rekognition, Textrack, and OpenCV. Join us on Tuesday, October 29, at 5:45 pm in Kenna 104 to learn more!",
            image: "../img/AI Engineering with Amazon Speaker.png",
            week: 43,
        },
        {
            title: "How to WIN AWS AI Hack",
            date: "Nov. 4th, 2024",
            location: "SCDI 2301",
            description:
                "Want to make a winning impression at the AWS x INRIX Hackathon? Join us on Monday, November 4, for the How to WIN the AWS Hack Workshop in collaboration with ACM-G! This workshop will cover the prize breakdown, guidance on working effectively in hackathon teams, and example project ideas tailored for the competition. Whether you're new to hackathons or aiming to boost your skills, this workshop will help you make the most of the hackathon experience and give you an edge to win! Don't miss out!",
            image: "../img/week 5.png",
            week: 44,
        },
        {
            title: "Data science with Python",
            date: "Nov. 12th, 2024",
            location: "Kenna 104",
            description:
                "Prepping for the hackathon? Our Data Science with Python Workshop is the perfect way to level up your data analysis skills! Happening on Tuesday, November 12, from 5:45 - 6:45 pm in Kenna 104, this session will cover beginner-friendly techniques to analyze and visualize data using Python. No prior experience is required, so bring your curiosity and dive into data science with us! Don't miss out!",
            image: "../img/Data Science with Python.png",
            week: 45,
        },
        {
            title: "Hackathon Prep",
            date: "Nov. 14th, 2024",
            location: "Kenna 216",
            description:
                "The hackathon countdown is on! Join us for our Hackathon Prep Workshop this Thursday, Nov. 14, at 7:15 pm in Kenna 216, where you'll learn how to access and leverage AWS resources and get all the insider tips you need for the weekend. Don't miss this last chance to prep, ask questions, and get set to build something incredible!",
            image: "../img/AWS X INRIX HACK PREP.png",
            week: 45,
        },
    ];

    function getCurrentWeek() {
        const currentDate = new Date();

        const startDate = new Date(currentDate.getFullYear(), 0, 1);
        const startDayOfWeek = startDate.getDay();
        const daysUntilFirstSunday = (6 - startDayOfWeek) % 7;
        startDate.setDate(startDate.getDate() + daysUntilFirstSunday);

        const days = Math.floor(
            (currentDate - startDate) / (24 * 60 * 60 * 1000)
        );
        const currentWeek = Math.ceil(days / 7);

        return currentWeek;
    }

    function updateWorkshops() {
        const currentWeek = getCurrentWeek();
        const thisWeekWorkshop = document.getElementById("this-week-workshop");
        const futureWorkshops = document.getElementById("future-workshops");

        events.forEach((event) => {
            if (event.week === currentWeek) {
                const eventHTML = `
                <img src="${event.image}" alt="Event Flyer" style="width: 30rem; padding-right: 1em; margin-bottom: 1em;">
                <div class="col-md-8" style="margin-bottom: 1em;">
                    <h3><strong>${event.title}</strong></h3>
                    <p>${event.date} - ${event.location}</p>
                    <p>${event.description}</p>
                </div>`;
                thisWeekWorkshop.innerHTML += eventHTML;
            } else if (event.week > currentWeek) {
                const eventHTML = `
                <div>
                    <h3><strong>${event.title}</strong></h3>
                    <p>${event.date} - ${event.location}</p>
                </div>`;
                futureWorkshops.innerHTML += eventHTML;
            }
        });
    }

    updateWorkshops();
});


document.addEventListener("DOMContentLoaded", function () {
  const events = [
    {
      title: "Hackathon Prep",
      date: "May 13th, 2025",
      location: "Kenna 216",
      description:
        "The hackathon countdown is on! Join us for our Hackathon Prep Workshop this Thursday, Nov. 14, at 7:15 pm in Kenna 216, where you'll learn how to access and leverage AWS resources and get all the insider tips you need for the weekend. Don't miss this last chance to prep, ask questions, and get set to build something incredible!",
      image: "../img/AWS X INRIX HACK PREP.png",
      week: 19,
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
      if (!thisWeekWorkshop.innerHTML.trim()) {
        thisWeekWorkshop.innerHTML += "<p>No workshops scheduled for this week.</p>";
      }
      if (!futureWorkshops.innerHTML.trim()) {
        futureWorkshops.style.textAlign = "center";
        futureWorkshops.innerHTML += "<p>No future workshops scheduled.</p>";
      }
    });
  }

  updateWorkshops();
});


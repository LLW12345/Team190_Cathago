function addToTimetable(eventId) {
    var eventTitle = document.getElementById("event-title").value;
    var eventTime = document.getElementById("event-time").value;
    var eventDate = document.getElementById("event-date").value;

    var eventRow = document.getElementById("event-" + eventId);
    var eventTitle = eventRow.cells[0].textContent;
    var eventTime = eventRow.cells[1].textContent;
    var eventDate = eventRow.cells[2].textContent;

    var timetableEvents = document.getElementById("timetable-events");
    var newRow = document.createElement("tr");

    var titleCell = document.createElement("td");
    titleCell.textContent = eventTitle;

    var timeCell = document.createElement("td");
    timeCell.textContent = eventTime;

    var dateCell = document.createElement("td");
    dateCell.textContent = eventDate;

    var removeCell = document.createElement("td");
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-button";
    removeButton.onclick = function() {
    timetableEvents.removeChild(newRow);
    eventRow.classList.remove("hidden-event");
    };

    removeCell.appendChild(removeButton);

    newRow.appendChild(titleCell);
    newRow.appendChild(timeCell);
    newRow.appendChild(dateCell);
    newRow.appendChild(removeCell);

    timetableEvents.appendChild(newRow);

    eventRow.classList.add("hidden-event");
}

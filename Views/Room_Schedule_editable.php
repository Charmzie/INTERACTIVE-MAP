<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Schedule Maker</title>
  <style>
    * {
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }
    body {
      margin: 0;
      padding: 20px;
      background-color: #f5f5f5;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 20px;
    }
    h1 {
      text-align: center;
      color: #333;
      margin-top: 0;
    }
    .input-section {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 20px;
      align-items: flex-end;
    }
    .input-group {
      flex: 1;
      min-width: 250px;
    }
    .input-group label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #555;
    }
    input, select {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
    }
    .time-select {
      display: flex;
      gap: 10px;
    }
    .time-select select {
      flex: 1;
    }
    .day-select {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 10px;
    }
    .day-checkbox {
      display: flex;
      align-items: center;
      background-color: #f0f0f0;
      border-radius: 4px;
      padding: 5px;
      cursor: pointer;
    }
    .day-checkbox input {
      width: auto;
      margin-right: 5px;
    }
    button {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s;
    }
    button:hover {
      background-color: #45a049;
    }
    .schedule-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    .schedule-table th, .schedule-table td {
      border: 1px solid #ddd;
      padding: 10px;
      text-align: center;
      vertical-align: top;
    }
    .schedule-table th {
      background-color: #f2f2f2;
      font-weight: bold;
    }
    .time-cell {
      width: 120px;
      font-weight: bold;
      background-color: #f2f2f2;
    }
    .subject-item {
      background-color: #a8e6a8;
      border-radius: 4px;
      padding: 8px;
      text-align: center;
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .subject-name {
      font-weight: bold;
      margin-bottom: 3px;
    }
    .course-code {
      font-size: 14px;
      margin-bottom: 5px;
    }
    .professor-info {
      font-size: 12px;
      font-style: italic;
    }
    .delete-btn {
      position: absolute;
      top: 2px;
      right: 2px;
      background-color: red;
      color: white;
      width: 16px;
      height: 16px;
      line-height: 14px;
      text-align: center;
      border-radius: 50%;
      font-size: 12px;
      cursor: pointer;
    }
    .controls {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
    .color-picker {
      width: 30px;
      height: 30px;
      padding: 0;
      border: 1px solid #ddd;
    }
    
    @media (max-width: 768px) {
      .input-group {
        flex: 100%;
      }
      .schedule-table {
        font-size: 14px;
      }
      .time-cell {
        width: 60px;
      }
      .schedule-table th, .schedule-table td {
        padding: 5px;
      }
    }
    
    /* Print styles */
    @media print {
      body {
        padding: 0;
        background-color: white;
      }
      .container {
        box-shadow: none;
        padding: 10px;
        max-width: 100%;
      }
      .input-section, .controls {
        display: none;
      }
      .schedule-table {
        width: 100%;
      }
      .subject-item .delete-btn {
        display: none;
      }
      h1 {
        margin-bottom: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Interactive Schedule Maker</h1>
    
    <div class="input-section">
      <div class="input-group">
        <label for="subject-name">Subject Name</label>
        <input type="text" id="subject-name" placeholder="e.g., Structural Theory">
      </div>
      
      <div class="input-group">
        <label for="course-code">Course Code</label>
        <input type="text" id="course-code" placeholder="e.g., CE3B">
      </div>
      
      <div class="input-group">
        <label for="professor">Professor</label>
        <input type="text" id="professor" placeholder="e.g., John Smith">
      </div>
      
      <div class="input-group">
        <label>Start Time</label>
        <div class="time-select">
          <select id="start-hour">
            <option value="" disabled selected>Hour</option>
          </select>
          <select id="start-minute">
            <option value="" disabled selected>Minute</option>
          </select>
        </div>
      </div>
      
      <div class="input-group">
        <label>End Time</label>
        <div class="time-select">
          <select id="end-hour">
            <option value="" disabled selected>Hour</option>
          </select>
          <select id="end-minute">
            <option value="" disabled selected>Minute</option>
          </select>
        </div>
      </div>
      
      <div class="input-group">
        <label>Days</label>
        <div class="day-select">
          <label class="day-checkbox"><input type="checkbox" value="Monday">Mon</label>
          <label class="day-checkbox"><input type="checkbox" value="Tuesday">Tue</label>
          <label class="day-checkbox"><input type="checkbox" value="Wednesday">Wed</label>
          <label class="day-checkbox"><input type="checkbox" value="Thursday">Thu</label>
          <label class="day-checkbox"><input type="checkbox" value="Friday">Fri</label>
          <label class="day-checkbox"><input type="checkbox" value="Saturday">Sat</label>
        </div>
      </div>
      
      <div class="input-group">
        <label for="subject-color">Subject Color</label>
        <input type="color" id="subject-color" class="color-picker" value="#a8e6a8">
      </div>
      
      <div class="input-group">
        <button id="add-subject">Add Subject</button>
      </div>
    </div>
    
    <div id="schedule-container">
      <table class="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thurs</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody id="schedule-body">
          <!-- Time slots will be generated here -->
        </tbody>
      </table>
    </div>
    
    <div class="controls">
      <button id="clear-schedule">Clear Schedule</button>
      <button id="print-schedule">Print Schedule</button>
      <button id="save-schedule">Save Schedule</button>
    </div>
  </div>
  
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      // Initialize time dropdowns
      const startHourSelect = document.getElementById('start-hour');
      const startMinuteSelect = document.getElementById('start-minute');
      const endHourSelect = document.getElementById('end-hour');
      const endMinuteSelect = document.getElementById('end-minute');
      const scheduleBody = document.getElementById('schedule-body');
      
      // Populate hour dropdowns (24-hour format)
      for (let i = 7; i < 21; i++) {
        const hourValue = i.toString().padStart(2, '0');
        const startOption = document.createElement('option');
        startOption.value = hourValue;
        startOption.textContent = hourValue;
        startHourSelect.appendChild(startOption);
        
        const endOption = document.createElement('option');
        endOption.value = hourValue;
        endOption.textContent = hourValue;
        endHourSelect.appendChild(endOption);
      }
      
      // Populate minute dropdowns
      const minutes = ['00', '15', '30', '45'];
      minutes.forEach(minute => {
        const startOption = document.createElement('option');
        startOption.value = minute;
        startOption.textContent = minute;
        startMinuteSelect.appendChild(startOption);
        
        const endOption = document.createElement('option');
        endOption.value = minute;
        endOption.textContent = minute;
        endMinuteSelect.appendChild(endOption);
      });
      
      // Generate time slots for the schedule (from 7:00 to 20:00 in 30-minute intervals)
      generateTimeSlots();
      
      // Add subject button event listener
      document.getElementById('add-subject').addEventListener('click', addSubject);
      
      // Clear schedule button event listener
      document.getElementById('clear-schedule').addEventListener('click', clearSchedule);
      
      // Save schedule button event listener
      document.getElementById('save-schedule').addEventListener('click', saveSchedule);
      
      // Print schedule button event listener
      document.getElementById('print-schedule').addEventListener('click', printSchedule);
      
      // Function to generate time slots
      function generateTimeSlots() {
        scheduleBody.innerHTML = '';
        
        for (let hour = 7; hour < 21; hour++) {
          for (let min = 0; min < 60; min += 30) {
            const timeStart = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
            const nextMin = (min + 30) % 60;
            const nextHour = nextMin === 0 ? hour + 1 : hour;
            const timeEnd = `${nextHour.toString().padStart(2, '0')}:${nextMin.toString().padStart(2, '0')}`;
            
            // Format time for display (12-hour format with AM/PM)
            const displayHourStart = hour > 12 ? hour - 12 : hour;
            const ampmStart = hour >= 12 ? 'PM' : 'AM';
            const displayHourEnd = nextHour > 12 ? nextHour - 12 : nextHour;
            const ampmEnd = nextHour >= 12 ? 'PM' : 'AM';
            
            const displayTime = `${displayHourStart}:${min.toString().padStart(2, '0')}-${displayHourEnd}:${nextMin.toString().padStart(2, '0')} ${ampmStart}`;
            
            const row = document.createElement('tr');
            row.dataset.time = timeStart;
            row.dataset.timeEnd = timeEnd;
            row.dataset.timeValue = (hour * 60 + min).toString();
            
            const timeCell = document.createElement('td');
            timeCell.className = 'time-cell';
            timeCell.textContent = displayTime;
            row.appendChild(timeCell);
            
            // Add cells for each day
            const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            days.forEach(day => {
              const dayCell = document.createElement('td');
              dayCell.dataset.day = day;
              dayCell.className = 'day-cell';
              dayCell.dataset.occupied = 'false';
              row.appendChild(dayCell);
            });
            
            scheduleBody.appendChild(row);
          }
        }
      }
      
      // Function to add a subject to the schedule
      function addSubject() {
        const subjectName = document.getElementById('subject-name').value.trim();
        const courseCode = document.getElementById('course-code').value.trim();
        const professor = document.getElementById('professor').value.trim();
        const subjectColor = document.getElementById('subject-color').value;
        const startHour = startHourSelect.value;
        const startMinute = startMinuteSelect.value;
        const endHour = endHourSelect.value;
        const endMinute = endMinuteSelect.value;
        
        // Validate inputs
        if (!subjectName) {
          alert('Please enter a subject name.');
          return;
        }
        
        if (!startHour || !startMinute || !endHour || !endMinute) {
          alert('Please select both start and end times.');
          return;
        }
        
        // Calculate start and end times as numbers for comparison
        const startTime = parseInt(startHour) * 60 + parseInt(startMinute);
        const endTime = parseInt(endHour) * 60 + parseInt(endMinute);
        
        if (startTime >= endTime) {
          alert('End time must be after start time.');
          return;
        }
        
        // Get selected days
        const selectedDays = [];
        document.querySelectorAll('.day-checkbox input:checked').forEach(checkbox => {
          selectedDays.push(checkbox.value);
        });
        
        if (selectedDays.length === 0) {
          alert('Please select at least one day.');
          return;
        }
        
        // Process each selected day
        selectedDays.forEach(day => {
          // Get all rows within the time range
          const rows = Array.from(scheduleBody.querySelectorAll('tr')).filter(row => {
            const rowTimeValue = parseInt(row.dataset.timeValue);
            return rowTimeValue >= startTime && rowTimeValue < endTime;
          }).sort((a, b) => parseInt(a.dataset.timeValue) - parseInt(b.dataset.timeValue));
          
          if (rows.length === 0) return;
          
          // Check if any of the cells in this day and time range are already occupied
          let conflict = false;
          rows.forEach(row => {
            const dayCell = row.querySelector(`td[data-day="${day}"]`);
            if (dayCell.dataset.occupied === 'true') {
              conflict = true;
            }
          });
          
          if (conflict) {
            if (!confirm(`There's already a subject scheduled on ${day} during this time. Would you like to replace it?`)) {
              return;
            }
            
            // Remove existing subjects in this time range for this day
            rows.forEach(row => {
              const dayCell = row.querySelector(`td[data-day="${day}"]`);
              dayCell.innerHTML = '';
              dayCell.dataset.occupied = 'false';
              dayCell.rowSpan = 1;
            });
          }
          
          // Create subject item and add it to the first row
          const firstRow = rows[0];
          const firstDayCell = firstRow.querySelector(`td[data-day="${day}"]`);
          
          // Create subject item
          const subjectItem = document.createElement('div');
          subjectItem.className = 'subject-item';
          subjectItem.style.backgroundColor = subjectColor;
          
          const subjectNameElem = document.createElement('div');
          subjectNameElem.className = 'subject-name';
          subjectNameElem.textContent = subjectName;
          subjectItem.appendChild(subjectNameElem);
          
          if (courseCode) {
            const courseCodeElem = document.createElement('div');
            courseCodeElem.className = 'course-code';
            courseCodeElem.textContent = courseCode;
            subjectItem.appendChild(courseCodeElem);
          }
          
          if (professor) {
            const profElem = document.createElement('div');
            profElem.className = 'professor-info';
            profElem.textContent = professor;
            subjectItem.appendChild(profElem);
          }
          
          // Add delete button
          const deleteBtn = document.createElement('span');
          deleteBtn.className = 'delete-btn';
          deleteBtn.textContent = '×';
          deleteBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (confirm('Remove this subject from the schedule?')) {
              // Reset all affected cells
              rows.forEach((row, index) => {
                if (index > 0) {
                  // For rows after the first one, re-create the cell
                  const newDayCell = document.createElement('td');
                  newDayCell.dataset.day = day;
                  newDayCell.className = 'day-cell';
                  newDayCell.dataset.occupied = 'false';
                  
                  // Find the position to insert the new cell
                  const dayIndex = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(day);
                  const cells = Array.from(row.querySelectorAll('td'));
                  const timeCell = cells[0]; // The first cell is always the time
                  
                  // Find the correct position to insert
                  let inserted = false;
                  for (let i = 1; i < cells.length; i++) {
                    const currentDay = cells[i].dataset.day;
                    const currentDayIndex = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(currentDay);
                    
                    if (currentDayIndex > dayIndex) {
                      row.insertBefore(newDayCell, cells[i]);
                      inserted = true;
                      break;
                    }
                  }
                  
                  if (!inserted) {
                    row.appendChild(newDayCell);
                  }
                } else {
                  // For the first row, just clear the content
                  firstDayCell.innerHTML = '';
                  firstDayCell.dataset.occupied = 'false';
                  firstDayCell.rowSpan = 1;
                }
              });
            }
          });
          
          subjectItem.appendChild(deleteBtn);
          firstDayCell.appendChild(subjectItem);
          firstDayCell.dataset.occupied = 'true';
          
          // Set rowspan to cover multiple time slots and remove cells from subsequent rows
          if (rows.length > 1) {
            firstDayCell.rowSpan = rows.length;
            
            // Remove the cells for this day from subsequent rows
            for (let i = 1; i < rows.length; i++) {
              const row = rows[i];
              const cellToRemove = row.querySelector(`td[data-day="${day}"]`);
              if (cellToRemove) {
                cellToRemove.remove();
              }
            }
          }
        });
        
        // Clear inputs after adding
        document.getElementById('subject-name').value = '';
        document.getElementById('course-code').value = '';
        document.getElementById('professor').value = '';
        startHourSelect.selectedIndex = 0;
        startMinuteSelect.selectedIndex = 0;
        endHourSelect.selectedIndex = 0;
        endMinuteSelect.selectedIndex = 0;
        document.querySelectorAll('.day-checkbox input:checked').forEach(checkbox => {
          checkbox.checked = false;
        });
      }
      
      // Function to clear the entire schedule
      function clearSchedule() {
        if (confirm('Are you sure you want to clear the entire schedule?')) {
          // Regenerate the time slots to reset everything
          generateTimeSlots();
        }
      }
      
      // Function to save the schedule (in this case, just alerts that it would save)
      function saveSchedule() {
        // This would typically connect to a backend to save the data
        alert('Schedule saved successfully! (In a real application, this would save to a database)');
      }
      
      // Function to print the schedule
      function printSchedule() {
        window.print();
      }
      
      // Add keyboard shortcut for printing (Ctrl+P)
      document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'p') {
          e.preventDefault();
          printSchedule();
        }
      });
    });
  </script>
</body>
</html>
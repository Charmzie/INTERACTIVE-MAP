<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enhanced Schedule Maker</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      color: #333;
      line-height: 1.5;
      background-color: #f5f5f5;
    }
    h1 {
      text-align: center;
      color: #2c3e50;
      margin-bottom: 20px;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 10px;
      table-layout: fixed;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: center;
      font-size: 14px;
      height: 30px;
      vertical-align: top;
    }
    th {
      background-color: #f2f2f2;
      position: sticky;
      top: 0;
    }
    .time-cell {
      width: 100px;
      font-weight: bold;
      background-color: #f2f2f2;
    }
    .class-block {
      border-radius: 4px;
      padding: 5px;
      margin: -5px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }
    .class-title {
      font-weight: bold;
      margin-bottom: 3px;
    }
    .class-location {
      font-size: 13px;
    }
    .class-instructor {
      font-size: 13px;
      font-style: italic;
    }
    .controls {
      margin-bottom: 20px;
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
    }
    .form-group {
      margin-bottom: 15px;
      flex: 1;
      min-width: 200px;
    }
    .form-control {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    button {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 10px 15px;
      cursor: pointer;
      border-radius: 4px;
      font-weight: bold;
    }
    button:hover {
      background-color: #45a049;
    }
    .action-buttons {
      display: flex;
      gap: 10px;
      margin-top: 15px;
      justify-content: space-between;
    }
    #clearAll {
      background-color: #f44336;
    }
    #clearAll:hover {
      background-color: #d32f2f;
    }
    #saveSchedule {
      background-color: #2196F3;
    }
    #saveSchedule:hover {
      background-color: #0b7dda;
    }
    .delete-button {
      position: absolute;
      top: 2px;
      right: 2px;
      background-color: #ff5252;
      color: white;
      border: none;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      font-size: 10px;
      line-height: 1;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
    }
    .responsive-wrapper {
      overflow-x: auto;
    }
    .sidebar {
      width: 220px;
      float: left;
      margin-right: 20px;
    }
    .sidebar-button {
      display: block;
      width: 100%;
      text-align: left;
      margin-bottom: 10px;
      padding: 12px;
      background-color: #f8f9fa;
      border: 1px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
      transition: 0.3s;
    }
    .sidebar-button:hover {
      background-color: #e9ecef;
    }
    .sidebar-button i {
      margin-right: 10px;
    }
    .main-content {
      margin-left: 240px;
    }
    .modal {
      display: none;
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.5);
    }
    .modal-content {
      background-color: white;
      margin: 5% auto;
      padding: 20px;
      border-radius: 8px;
      width: 80%;
      max-width: 600px;
      position: relative;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    .close-modal {
      position: absolute;
      right: 15px;
      top: 10px;
      font-size: 24px;
      font-weight: bold;
      cursor: pointer;
    }
    .tabs {
      display: flex;
      margin-bottom: 20px;
      border-bottom: 1px solid #ddd;
    }
    .tab {
      padding: 10px 20px;
      background-color: #f5f5f5;
      border: 1px solid #ddd;
      border-bottom: none;
      border-radius: 4px 4px 0 0;
      margin-right: 5px;
      cursor: pointer;
    }
    .tab.active {
      background-color: #4CAF50;
      color: white;
      border-color: #4CAF50;
    }
    .time-input-group {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .time-input {
      width: 60px;
      text-align: center;
    }
    .am-pm {
      display: flex;
    }
    .am-pm-btn {
      padding: 8px 12px;
      background-color: #f5f5f5;
      border: 1px solid #ddd;
      cursor: pointer;
    }
    .am-pm-btn.active {
      background-color: #2196F3;
      color: white;
      border-color: #2196F3;
    }
    .day-selector {
      display: flex;
      gap: 10px;
      margin-bottom: 15px;
      flex-wrap: wrap;
    }
    .day-checkbox {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    /* For small screens */
    @media (max-width: 768px) {
      .sidebar {
        width: 100%;
        float: none;
        margin-right: 0;
      }
      .main-content {
        margin-left: 0;
      }
      .day-selector {
        flex-direction: column;
      }
      .time-input-group {
        flex-direction: column;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Enhanced Class Schedule Maker</h1>
    
    <div class="controls">
      <button id="openAddClassModal" class="sidebar-button">
        <i>➕</i> Add Class
      </button>
      <button id="saveSchedule" class="sidebar-button">
        <i>💾</i> Save Schedule
      </button>
      <button id="clearAll" class="sidebar-button">
        <i>🗑️</i> Clear All Classes
      </button>
    </div>
    
    <div class="responsive-wrapper">
      <table id="scheduleTable">
        <thead>
          <tr>
            <th class="time-cell">Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <!-- Time slots will be generated here -->
        </tbody>
      </table>
    </div>
  </div>
  
  <!-- Add Class Modal -->
  <div id="addClassModal" class="modal">
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      
      <div class="tabs">
        <div class="tab active" id="courseTab">Course</div>
        <div class="tab" id="eventTab">Event</div>
      </div>
      
      <div id="courseForm">
        <div class="form-group">
          <label for="courseTitle">Course Title:</label>
          <input type="text" id="courseTitle" class="form-control" placeholder="e.g. Structural Theory" required>
        </div>
        
        <div class="form-group">
          <label for="classColor">Color:</label>
          <div style="display: flex; align-items: center; gap: 10px;">
            <input type="color" id="classColor" value="#8ED1A4" style="width: 50px; height: 30px;">
            <span id="colorCode">#8ED1A4</span>
          </div>
        </div>
        
        <div class="form-group">
          <label for="instructor">Instructor:</label>
          <input type="text" id="instructor" class="form-control" placeholder="e.g. John Smith">
        </div>
        
        <div class="form-group">
          <label for="location">Section:</label>
          <input type="text" id="location" class="form-control" placeholder="e.g. CE3B">
        </div>
        
        <div class="form-group">
          <label>Days:</label>
          <div class="day-selector">
            <div class="day-checkbox">
              <input type="checkbox" id="monday" value="Monday">
              <label for="monday">Mon</label>
            </div>
            <div class="day-checkbox">
              <input type="checkbox" id="tuesday" value="Tuesday">
              <label for="tuesday">Tue</label>
            </div>
            <div class="day-checkbox">
              <input type="checkbox" id="wednesday" value="Wednesday">
              <label for="wednesday">Wed</label>
            </div>
            <div class="day-checkbox">
              <input type="checkbox" id="thursday" value="Thursday">
              <label for="thursday">Thu</label>
            </div>
            <div class="day-checkbox">
              <input type="checkbox" id="friday" value="Friday">
              <label for="friday">Fri</label>
            </div>
            <div class="day-checkbox">
              <input type="checkbox" id="saturday" value="Saturday">
              <label for="saturday">Sat</label>
            </div>
            <div class="day-checkbox">
              <input type="checkbox" id="sunday" value="Sunday">
              <label for="sunday">Sun</label>
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label>Start Time:</label>
          <div class="time-input-group">
            <input type="number" id="startHour" class="time-input" min="1" max="12" value="9">
            <span>:</span>
            <input type="number" id="startMinute" class="time-input" min="0" max="59" value="00" step="5">
            <div class="am-pm">
              <button type="button" id="startAM" class="am-pm-btn active">AM</button>
              <button type="button" id="startPM" class="am-pm-btn">PM</button>
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label>End Time:</label>
          <div class="time-input-group">
            <input type="number" id="endHour" class="time-input" min="1" max="12" value="10">
            <span>:</span>
            <input type="number" id="endMinute" class="time-input" min="0" max="59" value="00" step="5">
            <div class="am-pm">
              <button type="button" id="endAM" class="am-pm-btn active">AM</button>
              <button type="button" id="endPM" class="am-pm-btn">PM</button>
            </div>
          </div>
        </div>
        
        <div class="action-buttons">
          <button id="addClass">Add Class</button>
          <button id="clearForm">Clear Form</button>
        </div>
      </div>
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      // Generate time slots - using 24-hour format
      const times = [
        "7:00-7:30 AM", "7:30-8:00 AM", "8:00-8:30 AM", "8:30-9:00 AM", "9:00-9:30 AM", 
        "9:30-10:00 AM", "10:00-10:30 AM", "10:30-11:00 AM", "11:00-11:30 AM", "11:30-12:00 PM",
        "12:00-12:30 PM", "12:30-1:00 PM", "13:00-13:30 PM", "13:30-14:00 PM", "14:00-14:30 PM", 
        "14:30-15:00 PM", "15:00-15:30 PM", "15:30-16:00 PM", "16:00-16:30 PM", "16:30-17:00 PM",
        "17:00-17:30 PM", "17:30-18:00 PM", "18:00-18:30 PM", "18:30-19:00 PM", "19:00-19:30 PM", 
        "19:30-20:00 PM", "20:00-20:30 PM", "20:30-21:00 PM"
      ];
      
      // Internal time format for calculations
      const internalTimes = [
        "07:00-07:30", "07:30-08:00", "08:00-08:30", "08:30-09:00", "09:00-09:30", 
        "09:30-10:00", "10:00-10:30", "10:30-11:00", "11:00-11:30", "11:30-12:00",
        "12:00-12:30", "12:30-13:00", "13:00-13:30", "13:30-14:00", "14:00-14:30", 
        "14:30-15:00", "15:00-15:30", "15:30-16:00", "16:00-16:30", "16:30-17:00",
        "17:00-17:30", "17:30-18:00", "18:00-18:30", "18:30-19:00", "19:00-19:30", 
        "19:30-20:00", "20:00-20:30", "20:30-21:00"
      ];
      
      const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const tbody = document.querySelector('#scheduleTable tbody');
      
      // Create rows for each time slot
      times.forEach((time, index) => {
        const tr = document.createElement('tr');
        const timeCell = document.createElement('td');
        timeCell.className = 'time-cell';
        timeCell.textContent = time;
        tr.appendChild(timeCell);
        
        // Create cells for each day
        days.forEach(day => {
          const td = document.createElement('td');
          td.dataset.time = internalTimes[index];
          td.dataset.displayTime = time;
          td.dataset.day = day;
          tr.appendChild(td);
        });
        
        tbody.appendChild(tr);
      });
      
      // Modal functionality
      const modal = document.getElementById('addClassModal');
      const openModalBtn = document.getElementById('openAddClassModal');
      const closeModalBtn = document.querySelector('.close-modal');
      
      openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
      });
      
      closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
      });
      
      window.addEventListener('click', function(event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
      
      // Tab functionality
      const courseTab = document.getElementById('courseTab');
      const eventTab = document.getElementById('eventTab');
      const courseForm = document.getElementById('courseForm');
      
      courseTab.addEventListener('click', function() {
        courseTab.classList.add('active');
        eventTab.classList.remove('active');
        courseForm.style.display = 'block';
      });
      
      eventTab.addEventListener('click', function() {
        eventTab.classList.add('active');
        courseTab.classList.remove('active');
        courseForm.style.display = 'block'; // For now, same form for events
      });
      
      // AM/PM toggles
      function setupAmPmToggle(amBtn, pmBtn) {
        amBtn.addEventListener('click', function() {
          amBtn.classList.add('active');
          pmBtn.classList.remove('active');
        });
        
        pmBtn.addEventListener('click', function() {
          pmBtn.classList.add('active');
          amBtn.classList.remove('active');
        });
      }
      
      setupAmPmToggle(document.getElementById('startAM'), document.getElementById('startPM'));
      setupAmPmToggle(document.getElementById('endAM'), document.getElementById('endPM'));
      
      // Color picker functionality
      const colorPicker = document.getElementById('classColor');
      const colorCode = document.getElementById('colorCode');
      
      colorPicker.addEventListener('input', function() {
        colorCode.textContent = colorPicker.value;
      });
      
      // Helper function to convert 12-hour time to 24-hour time
      function convertTo24Hour(hour, minute, isPM) {
        let hour24 = parseInt(hour);
        
        if (isPM && hour24 < 12) {
          hour24 += 12;
        } else if (!isPM && hour24 === 12) {
          hour24 = 0;
        }
        
        // Ensure 2 digits
        hour24 = hour24.toString().padStart(2, '0');
        minute = minute.toString().padStart(2, '0');
        
        return `${hour24}:${minute}`;
      }
      
      // Add class button click handler
      document.getElementById('addClass').addEventListener('click', function() {
        // Get form values
        const courseTitle = document.getElementById('courseTitle').value.trim();
        const instructor = document.getElementById('instructor').value.trim();
        const location = document.getElementById('location').value.trim();
        const classColor = document.getElementById('classColor').value;
        
        // Get time values
        const startHour = document.getElementById('startHour').value;
        const startMinute = document.getElementById('startMinute').value;
        const startIsPM = document.getElementById('startPM').classList.contains('active');
        
        const endHour = document.getElementById('endHour').value;
        const endMinute = document.getElementById('endMinute').value;
        const endIsPM = document.getElementById('endPM').classList.contains('active');
        
        // Convert to 24-hour format for internal use
        const startTime = convertTo24Hour(startHour, startMinute, startIsPM);
        const endTime = convertTo24Hour(endHour, endMinute, endIsPM);
        
        // Get selected days
        const selectedDays = [];
        days.forEach(day => {
          const checkbox = document.getElementById(day.toLowerCase());
          if (checkbox && checkbox.checked) {
            selectedDays.push(day);
          }
        });
        
        // Validation
        if (!courseTitle) {
          alert('Please enter a course title');
          return;
        }
        
        if (selectedDays.length === 0) {
          alert('Please select at least one day');
          return;
        }
        
        if (startTime >= endTime) {
          alert('End time must be after start time');
          return;
        }
        
        // Add class to schedule for each selected day
        selectedDays.forEach(day => {
          addClassToSchedule(day, startTime, endTime, courseTitle, instructor, location, classColor);
        });
        
        // Close modal
        modal.style.display = 'none';
        
        // Save to local storage
        saveScheduleToStorage();
      });
      
      // Function to add class to schedule
      function addClassToSchedule(day, startTime, endTime, courseTitle, instructor, location, classColor) {
        // Find all time slots between start and end times
        const timeSlots = [];
        let found = false;
        
        for (const time of internalTimes) {
          const [slotStart, slotEnd] = time.split('-');
          
          if (slotStart === startTime) {
            found = true;
          }
          
          if (found) {
            timeSlots.push(time);
          }
          
          if (slotEnd === endTime) {
            found = false;
            break;
          }
        }
        
        if (timeSlots.length === 0) {
          alert('Invalid time range');
          return;
        }
        
        // Check for conflicts
        for (const time of timeSlots) {
          const cell = document.querySelector(`td[data-day="${day}"][data-time="${time}"]`);
          if (cell.innerHTML.trim() !== '' && cell.style.display !== 'none') {
            alert(`Time conflict on ${day} at ${time}`);
            return;
          }
        }
        
        // Find first and last cells for the time range
        const firstCell = document.querySelector(`td[data-day="${day}"][data-time="${timeSlots[0]}"]`);
        const lastCell = document.querySelector(`td[data-day="${day}"][data-time="${timeSlots[timeSlots.length - 1]}"]`);
        
        if (!firstCell || !lastCell) {
          alert('Could not find cells for the selected time range');
          return;
        }
        
        // Create class block
        const classBlock = document.createElement('div');
        classBlock.className = 'class-block';
        classBlock.style.backgroundColor = classColor;
        classBlock.dataset.timeSlots = JSON.stringify(timeSlots);
        classBlock.dataset.day = day;
        classBlock.innerHTML = `
          <button class="delete-button" title="Remove this class">×</button>
          <div class="class-title">${courseTitle}</div>
          ${location ? `<div class="class-location">${location}</div>` : ''}
          ${instructor ? `<div class="class-instructor">${instructor}</div>` : ''}
        `;
        
        // Add delete button functionality
        const deleteButton = classBlock.querySelector('.delete-button');
        deleteButton.addEventListener('click', function(e) {
          e.stopPropagation();
          if (confirm('Remove this class from schedule?')) {
            removeClassFromSchedule(classBlock);
          }
        });
        
        // Add to first cell and set rowspan
        firstCell.appendChild(classBlock);
        if (timeSlots.length > 1) {
          firstCell.rowSpan = timeSlots.length;
          
          // Hide other cells
          for (let i = 1; i < timeSlots.length; i++) {
            const cell = document.querySelector(`td[data-day="${day}"][data-time="${timeSlots[i]}"]`);
            cell.style.display = 'none';
          }
        }
      }
      
      // Function to remove a class from schedule
      function removeClassFromSchedule(classBlock) {
        const day = classBlock.dataset.day;
        const timeSlots = JSON.parse(classBlock.dataset.timeSlots);
        
        // Get the containing cell
        const cell = classBlock.closest('td');
        
        // Remove class block
        cell.removeChild(classBlock);
        cell.rowSpan = 1;
        
        // Show all hidden cells
        for (let i = 1; i < timeSlots.length; i++) {
          const hiddenCell = document.querySelector(`td[data-day="${day}"][data-time="${timeSlots[i]}"]`);
          hiddenCell.style.display = '';
        }
        
        // Save changes
        saveScheduleToStorage();
      }
      
      // Clear form button
      document.getElementById('clearForm').addEventListener('click', function() {
        document.getElementById('courseTitle').value = '';
        document.getElementById('instructor').value = '';
        document.getElementById('location').value = '';
        document.getElementById('classColor').value = '#8ED1A4';
        document.getElementById('colorCode').textContent = '#8ED1A4';
        
        // Reset time inputs
        document.getElementById('startHour').value = '9';
        document.getElementById('startMinute').value = '00';
        document.getElementById('startAM').classList.add('active');
        document.getElementById('startPM').classList.remove('active');
        
        document.getElementById('endHour').value = '10';
        document.getElementById('endMinute').value = '00';
        document.getElementById('endAM').classList.add('active');
        document.getElementById('endPM').classList.remove('active');
        
        // Uncheck all day checkboxes
        days.forEach(day => {
          const checkbox = document.getElementById(day.toLowerCase());
          if (checkbox) checkbox.checked = false;
        });
      });
      
      // Clear all button
      document.getElementById('clearAll').addEventListener('click', function() {
        if (confirm('Are you sure you want to clear the entire schedule?')) {
          clearAllClasses();
          
          // Clear local storage
          localStorage.removeItem('classSchedule');
        }
      });
      
      // Function to clear all classes
      function clearAllClasses() {
        // Get all cells
        const cells = document.querySelectorAll('#scheduleTable td:not(.time-cell)');
        
        // Reset all cells
        cells.forEach(cell => {
          cell.innerHTML = '';
          cell.style.display = '';
          cell.rowSpan = 1;
        });
      }
      
      // Save schedule button
      document.getElementById('saveSchedule').addEventListener('click', function() {
        saveScheduleToStorage();
        alert('Schedule saved successfully!');
      });
      
      // Function to save schedule to localStorage
      function saveScheduleToStorage() {
        const schedule = [];
        
        // Find all class blocks
        const classBlocks = document.querySelectorAll('.class-block');
        classBlocks.forEach(block => {
          const cell = block.closest('td');
          const day = cell.dataset.day;
          const time = cell.dataset.time;
          const [startTime] = time.split('-');
          
          // Get time slots from dataset
          const timeSlots = JSON.parse(block.dataset.timeSlots);
          const lastTimeSlot = timeSlots[timeSlots.length - 1];
          const endTime = lastTimeSlot.split('-')[1];
          
          const courseTitle = block.querySelector('.class-title').textContent;
          const locationElement = block.querySelector('.class-location');
          const instructorElement = block.querySelector('.class-instructor');
          const backgroundColor = block.style.backgroundColor;
          
          const classData = {
            day,
            startTime,
            endTime,
            courseTitle,
            location: locationElement ? locationElement.textContent : '',
            instructor: instructorElement ? instructorElement.textContent : '',
            color: backgroundColor,
            timeSlots
          };
          
          schedule.push(classData);
        });
        
        localStorage.setItem('classSchedule', JSON.stringify(schedule));
      }
      
      // Function to load schedule from localStorage
      function loadScheduleFromStorage() {
        const saved = localStorage.getItem('classSchedule');
        if (!saved) return;
        
        try {
          const schedule = JSON.parse(saved);
          
          // Clear existing schedule
          clearAllClasses();
          
          // Add classes from saved schedule
          schedule.forEach(classData => {
            const { day, startTime, endTime, courseTitle, instructor, location, color } = classData;
            
            // Calculate time slots if not provided in older data
            let timeSlots = classData.timeSlots;
            if (!timeSlots) {
              // Calculate time slots based on start and end time
              timeSlots = [];
              let found = false;
              
              for (const time of internalTimes) {
                const [slotStart, slotEnd] = time.split('-');
                
                if (slotStart === startTime) {
                  found = true;
                }
                
                if (found) {
                  timeSlots.push(time);
                }
                
                if (slotEnd === endTime) {
                  found = false;
                  break;
                }
              }
            }
            
            // Find first cell for start time
            const firstCell = document.querySelector(`td[data-day="${day}"][data-time="${timeSlots[0]}"]`);
            if (!firstCell) return;
            
            // Create class block
            const classBlock = document.createElement('div');
            classBlock.className = 'class-block';
            classBlock.style.backgroundColor = color || '#8ED1A4';
            classBlock.dataset.timeSlots = JSON.stringify(timeSlots);
            classBlock.dataset.day = day;
            classBlock.innerHTML = `
              <button class="delete-button" title="Remove this class">×</button>
              <div class="class-title">${courseTitle}</div>
              ${location ? `<div class="class-location">${location}</div>` : ''}
              ${instructor ? `<div class="class-instructor">${instructor}</div>` : ''}
            `;
            
            // Add delete button functionality
            const deleteButton = classBlock.querySelector('.delete-button');
            deleteButton.addEventListener('click', function(e) {
              e.stopPropagation();
              if (confirm('Remove this class from schedule?')) {
                removeClassFromSchedule(classBlock);
              }
            });
            
            // Add to first cell and set rowspan
            firstCell.appendChild(classBlock);
            if (timeSlots.length > 1) {
              firstCell.rowSpan = timeSlots.length;
              
              // Hide other cells
              for (let i = 1; i < timeSlots.length; i++) {
                const cell = document.querySelector(`td[data-day="${day}"][data-time="${timeSlots[i]}"]`);
                if (cell) cell.style.display = 'none';
              }
            }
          });
          
        } catch (e) {
          console.error('Error loading schedule:', e);
        }
      }
      
      // Load saved schedule on page load
      loadScheduleFromStorage();
      
      // Input validation for time inputs
      function setupTimeInputValidation(inputId, min, max) {
        const input = document.getElementById(inputId);
        input.addEventListener('input', function() {
          let value = parseInt(this.value);
          
          if (isNaN(value)) {
            value = min;
          } else if (value < min) {
            value = min;
          } else if (value > max) {
            value = max;
          }
          
          this.value = value;
        });
      }
      
      setupTimeInputValidation('startHour', 1, 12);
      setupTimeInputValidation('startMinute', 0, 59);
      setupTimeInputValidation('endHour', 1, 12);
      setupTimeInputValidation('endMinute', 0, 59);
      
      // Ensure minute values are formatted with leading zeros
      function formatMinutes(inputId) {
        const input = document.getElementById(inputId);
        input.addEventListener('blur', function() {
          const value = parseInt(this.value);
          if (!isNaN(value)) {
            this.value = value.toString().padStart(2, '0');
          }
        });
      }
      
      formatMinutes('startMinute');
      formatMinutes('endMinute');
      
      // Export schedule functionality
      function exportSchedule() {
        const schedule = JSON.parse(localStorage.getItem('classSchedule') || '[]');
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(schedule, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "class_schedule.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
      }
      
      // Add export button
      const exportButton = document.createElement('button');
      exportButton.className = 'sidebar-button';
      exportButton.innerHTML = '<i>📤</i> Export Schedule';
      exportButton.addEventListener('click', exportSchedule);
      document.querySelector('.controls').appendChild(exportButton);
      
      // Import schedule functionality
      function importSchedule() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = e => {
          const file = e.target.files[0];
          if (!file) return;
          
          const reader = new FileReader();
          reader.onload = function(event) {
            try {
              const importedSchedule = JSON.parse(event.target.result);
              
              // Basic validation
              if (!Array.isArray(importedSchedule)) {
                throw new Error('Invalid schedule format');
              }
              
              // Save to localStorage
              localStorage.setItem('classSchedule', JSON.stringify(importedSchedule));
              
              // Reload the schedule
              clearAllClasses();
              loadScheduleFromStorage();
              
              alert('Schedule imported successfully!');
            } catch (error) {
              alert('Error importing schedule: ' + error.message);
            }
          };
          
          reader.readAsText(file);
        };
        
        input.click();
      }
      
      // Add import button
      const importButton = document.createElement('button');
      importButton.className = 'sidebar-button';
      importButton.innerHTML = '<i>📥</i> Import Schedule';
      importButton.addEventListener('click', importSchedule);
      document.querySelector('.controls').appendChild(importButton);
      
      // Print functionality
      function printSchedule() {
        window.print();
      }
      
      // Add print button
      const printButton = document.createElement('button');
      printButton.className = 'sidebar-button';
      printButton.innerHTML = '<i>🖨️</i> Print Schedule';
      printButton.addEventListener('click', printSchedule);
      document.querySelector('.controls').appendChild(printButton);
      
      // Add styles for printing
      const printStyles = document.createElement('style');
      printStyles.textContent = `
        @media print {
          .controls, .action-buttons, button, #formContainer, .delete-button {
            display: none !important;
          }
          
          body, .container {
            margin: 0;
            padding: 0;
            background-color: white;
            box-shadow: none;
          }
          
          h1 {
            margin-top: 0;
          }
          
          table {
            page-break-inside: avoid;
          }
          
          .class-block {
            box-shadow: none;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `;
      document.head.appendChild(printStyles);
      
      // Add keyboard shortcuts
      document.addEventListener('keydown', function(e) {
        // Ctrl+S or Cmd+S to save
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
          e.preventDefault();
          saveScheduleToStorage();
          alert('Schedule saved successfully!');
        }
        
        // Escape key to close modal
        if (e.key === 'Escape' && modal.style.display === 'block') {
          modal.style.display = 'none';
        }
      });
      
      // Add drag and drop functionality for rearranging classes
      let draggedElement = null;
      
      // Function to make class blocks draggable
      function makeDraggable(element) {
        element.setAttribute('draggable', 'true');
        
        element.addEventListener('dragstart', function(e) {
          draggedElement = this;
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('text/html', this.outerHTML);
          this.style.opacity = '0.4';
        });
        
        element.addEventListener('dragend', function() {
          this.style.opacity = '1';
          draggedElement = null;
        });
      }
      
      // Make all class blocks draggable
      document.querySelectorAll('.class-block').forEach(block => {
        makeDraggable(block);
      });
      
      // Enable cells to accept drops
      const cells = document.querySelectorAll('#scheduleTable td:not(.time-cell)');
      cells.forEach(cell => {
        cell.addEventListener('dragover', function(e) {
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';
        });
        
        cell.addEventListener('dragenter', function(e) {
          e.preventDefault();
          this.style.backgroundColor = '#f0f0f0';
        });
        
        cell.addEventListener('dragleave', function() {
          this.style.backgroundColor = '';
        });
        
        cell.addEventListener('drop', function(e) {
          e.preventDefault();
          this.style.backgroundColor = '';
          
          if (draggedElement) {
            // Implementation for rearranging classes would go here
            // For now, we'll just prevent dropping as it requires more complex logic
            // to properly handle timeslots and conflicts
            alert('Drag and drop rearrangement is coming in a future update!');
          }
        });
      });
    });
  </script>
</body>
</html>
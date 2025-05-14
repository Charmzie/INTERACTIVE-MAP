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
      width: 1000px
    }
    h1 {
      text-align: center;
      color: #333;
      margin-top: 0;
    }
    h2 {
      text-align: center;
      color: #333;
      margin-top: 0;
    }
    img {
      display: block;
      margin: 0 auto; /* Centers the image horizontally */
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
      width: 100%; /* Make the table span the full width of the container */
      border-collapse: collapse;
      margin-top: 10px;
      table-layout: fixed; /* Distributes columns evenly across the table */
    }

    .schedule-table td {
      border: 1px solid #ddd;
      padding: 0; /* Remove padding */
      text-align: center;
      vertical-align: top;
      height: 100px; /* Set a fixed height for consistency */
      position: relative; /* For absolute positioning of subject-item */
    }

    .schedule-table th, .schedule-table td {
      border: 1px solid #ddd;
      padding: 10px; /* Adjust for better spacing */
      text-align: center;
      vertical-align: top;
    }

    .schedule-table th {
      background-color: #f2f2f2;
      font-weight: bold;
    }

    .time-cell {
      width: 120px; /* Fixed width for time column */
      font-weight: bold;
      background-color: #f2f2f2;
    }
    .subject-item {
      background-color: #a8e6a8;
      padding: 8px;
      text-align: center;
      position: absolute; /* Change to absolute positioning */
      top: 0;
      left: 0;
      right: 0;
      bottom: 0; /* Make it fill the entire cell */
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 0; /* Remove border radius for full coverage */
    }
    .subject-name {
      font-weight: bold;
      margin-bottom: 3px;
    }
    .section {
      font-size: 14px;
      margin-bottom: 5px;
    }
    .max-students-input{
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
    
    /* Modal Styles */
    .modal {
      display: none;
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      overflow-y: auto; /* Ensures the modal container scrolls if content overflows */
      padding: 20px; /* Adds space around the modal when scrolling */
    }

    .modal-content {
      background-color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 20px;
      border-radius: 8px;
      width: 80%;
      max-width: 500px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      max-height: 90vh; /* Limits height to 90% of the viewport */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      overflow-y: auto; /* Makes the modal itself scrollable if content is too long */
    }
    
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ddd;
    }
    
    .modal-header h3 {
      margin: 0;
      color: #333;
    }
    
    .close-modal {
      font-size: 24px;
      font-weight: bold;
      cursor: pointer;
      color: #777;
    }
    
    .close-modal:hover {
      color: #333;
    }
    
    .form-group {
      margin-bottom: 15px;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #555;
    }
    
    .form-group input,
    .form-group select {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
    }
    
    .day-checkboxes {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 5px;
    }
    
    .day-checkbox-label {
      display: flex;
      align-items: center;
      background-color: #f0f0f0;
      border-radius: 4px;
      padding: 5px 10px;
      cursor: pointer;
    }
    
    .day-checkbox-label input {
      margin-right: 5px;
      width: auto;
    }
    
    .modal-footer {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
    
    .modal-footer button {
      padding: 8px 16px;
    }
    
    .cancel-btn {
      background-color: #f44336;
    }
    
    .cancel-btn:hover {
      background-color: #d32f2f;
    }

        .meeting-time-section {
      border: 1px solid #ddd;
      padding: 15px;
      margin: 15px 0;
      border-radius: 4px;
      background-color: #f9f9f9;
    }

    .meeting-time-section .cancel-btn {
      padding: 5px 10px;
      font-size: 14px;
    }
    
    .time-inputs {
      display: flex;
      gap: 10px;
    }
    
    .time-inputs select {
      flex: 1;
    }
    
    .add-new-button {
      background-color: #2196F3;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      margin-top: 5px;
    }
    
    .add-new-button:hover {
      background-color: #0b7dda;
    }
    
    .color-picker {
      width: 50px;
      height: 50px;
      padding: 0;
      border: 10px solid #ddd;
      border-radius: 4px;
    }
    
    /* Manage Subject/Professor Modal */
    .manage-list {
      max-height: 200px;
      overflow-y: auto;
      margin-bottom: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 10px;
    }
    
    .list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px;
      border-bottom: 1px solid #eee;
    }
    
    .list-item:last-child {
      border-bottom: none;
    }
    
    .list-item-delete {
      color: red;
      cursor: pointer;
      font-weight: bold;
    }
    
    @media (max-width: 768px) {
      .schedule-table {
        font-size: 14px;
      }
      .time-cell {
        width: 60px;
      }
      .schedule-table th, .schedule-table td {
        padding: 5px;
      }
      .modal-content {
        width: 95%;
        margin: 5% auto;
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
      .controls, .add-class-btn {
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
      .modal {
        display: none !important;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <img src="/api/placeholder/100/100" alt="CDM Logo" width="100" height="100">
    <h1>COLEGIO DE MUNTINLUPA</h1>
    <h2>Schedule Maker: Editable</h2>
    
    <div class="controls">
      <button id="add-class-btn" class="add-class-btn">Add Class</button>
      <button id="manage-subjects-btn">Manage Subjects</button>
      <button id="manage-professors-btn">Manage Professors</button>
      <button id="clear-schedule">Clear Schedule</button>
      <button id="print-schedule">Print Schedule</button>
      <button id="save-schedule">Save Schedule</button>
    </div>
    
    <div id="schedule-container">
      <table class="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody id="schedule-body">
          <!-- Time slots will be generated here -->
        </tbody>
      </table>
    </div>
  </div>
  
  <!-- Add Class Modal -->
    <form action = "saved_schedule.php" method="POST">
      <div id="add-class-modal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <h3>Add Class</h3>
            <span class="close-modal">&times;</span>
          </div>

          <div class="form-group">
            <label for="subject-select">Subject</label>
            <select id="subject-select" required>
              <option value="" disabled selected>Select a subject</option>
            </select>
            <button id="add-new-subject-btn" class="add-new-button">Add New Subject</button>
          </div>

          <div class="form-group">
            <label for="professor-select">Professor</label>
            <select id="professor-select" required>
              <option value="" disabled selected>Select a professor</option>
            </select>
            <button id="add-new-professor-btn" class="add-new-button">Add New Professor</button>
          </div>

          <div class="form-group">
            <label for="section-input">Section</label>
            <input type="text" id="section-input" placeholder="e.g., CE3B" required>
          </div>

          <div class="form-group">
            <label>Days</label>
            <div class="day-checkboxes">
              <label class="day-checkbox-label"><input type="checkbox" value="Monday">Mon</label>
              <label class="day-checkbox-label"><input type="checkbox" value="Tuesday">Tue</label>
              <label class="day-checkbox-label"><input type="checkbox" value="Wednesday">Wed</label>
              <label class="day-checkbox-label"><input type="checkbox" value="Thursday">Thu</label>
              <label class="day-checkbox-label"><input type="checkbox" value="Friday">Fri</label>
              <label class="day-checkbox-label"><input type="checkbox" value="Saturday">Sat</label>
            </div>
          </div>

          <div class="form-group">
            <label for="max-students-input">Maximum Students: </label>
            <input type="number" id="maximum_students" placeholder="40" required max="45">
          </div>

          <div class="form-group">
            <label>Start Time</label>
            <div class="time-inputs">
              <select id="start-hour" required>
                <option value="" disabled selected>Hour</option>
              </select>
              <select id="start-minute" required>
                <option value="" disabled selected>Minute</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label>End Time</label>
            <div class="time-inputs">
              <select id="end-hour" required>
                <option value="" disabled selected>Hour</option>
              </select>
              <select id="end-minute" required>
                <option value="" disabled selected>Minute</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="subject-color">Color</label>
            <input type="color" id="subject-color" class="color-picker" value="#a8e6a8">
          </div>

          <div class="form-room">
            <label for="room-select">Room</label>
            <select id="room-select" required>
                <option value="" disabled selected>Select a Room</option>
                <option value="">Select Room ID</option>
                <option value="410">410</option>
                <option value="411">411</option>
                <option value="412">412</option>
                <option value="413">413</option>
                <option value="510">510</option>
                <option value="511">511</option>
                <option value="512">512</option>
                <option value="513">513</option>
                <option value="610">610</option>
                <option value="611">611</option>
                <option value="612">612</option>
                <option value="613">613</option>
                <option value="CE1">CE1</option>
                <option value="CE2">CE2</option>
                <option value="CPE1">CPE1</option>
                <option value="DRAWING ROOM">DRAWING ROOM</option>
                <option value="ECE1">ECE1</option>
                <option value="ECE2">ECE2</option>
                <option value="EE2">EE2</option>
                <option value="ME1">ME1</option>
                <option value="ME2">ME2</option>
                <option value="MULTI-PURPOSE HALL">MULTI-PURPOSE HALL</option>
                <option value="ONLINE">ONLINE</option>
                <option value="TBA">TBA</option>
                <option value="AVR">AVR</option>
                <option value="SEMINAR ROOM">SEMINAR ROOM</option>
                <option value="CE Laboratory">CE Laboratory</option>
                <option value="Chemistry Laboratory">Chemistry Laboratory</option>
                <option value="Computer Laboratory 1">Computer Laboratory 1</option>
                <option value="Computer Laboratory 2">Computer Laboratory 2</option>
                <option value="CPE Laboratory">CPE Laboratory</option>
                <option value="EE Laboratory">EE Laboratory</option>
                <option value="ECE Laboratory">ECE Laboratory</option>
                <option value="ME Laboratory">ME Laboratory</option>
                <option value="Physics Laboratory">Physics Laboratory</option>
            </select>
          </div>

          <div class="modal-footer">
            <button id="cancel-add-class" class="cancel-btn">Cancel</button>
            <button id="submit-add-class">Add Class</button>
          </div>
        </div>
      </div>
      
      <!-- Add Subject Modal -->
      <div id="add-subject-modal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <h3>Add New Subject</h3>
            <span class="close-modal">&times;</span>
          </div>
          <div class="form-group">
            <label for="new-subject-name">Subject Name</label>
            <input type="text" id="new-subject-name" placeholder="e.g., Structural Theory" required>
          </div>
          <div class="form-group">
            <label for="subject-code">Subject Code</label>
            <input type="text" id="subject-code" placeholder="e.g., STRC101" required>
          </div>
          <div class="modal-footer">
            <button id="cancel-add-subject" class="cancel-btn">Cancel</button>
            <button id="submit-add-subject">Add Subject</button>
          </div>
        </div>
      </div>
      
      <!-- Add Professor Modal -->
      <div id="add-professor-modal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <h3>Add New Professor</h3>
            <span class="close-modal">&times;</span>
          </div>
          <div class="form-group">
            <label for="new-professor-name">Professor Name</label>
            <input type="text" id="new-professor-name" placeholder="e.g., John Smith" required>
          </div>
          <div class="form-group">
            <label for="professor-title">Title (Optional)</label>
            <input type="text" id="professor-title" placeholder="e.g., Dr., Engr., Prof.">
          </div>
          <div class="modal-footer">
            <button id="cancel-add-professor" class="cancel-btn">Cancel</button>
            <button id="submit-add-professor">Add Professor</button>
          </div>
        </div>
      </div>
  </form>  
      <!-- Manage Subjects Modal -->
      <div id="manage-subjects-modal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <h3>Manage Subjects</h3>
            <span class="close-modal">&times;</span>
          </div>
          <div class="manage-list" id="subjects-list">
            <!-- Subject list items will be added here -->
          </div>
          <button id="add-subject-from-manage" class="add-new-button">Add New Subject</button>
          <div class="modal-footer">
            <button id="close-manage-subjects" class="cancel-btn">Close</button>
          </div>
        </div>
      </div>
      
      <!-- Manage Professors Modal -->
      <div id="manage-professors-modal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <h3>Manage Professors</h3>
            <span class="close-modal">&times;</span>
          </div>
          <div class="manage-list" id="professors-list">
            <!-- Professor list items will be added here -->
          </div>
          <button id="add-professor-from-manage" class="add-new-button">Add New Professor</button>
          <div class="modal-footer">
            <button id="close-manage-professors" class="cancel-btn">Close</button>
          </div>
        </div>
      </div>
  
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      // Initialize data structures
      let subjects = [
        { id: 1, name: 'Mathematics ', code: 'MATH101' },
        { id: 2, name: 'Physics', code: 'PHYS101' },
        { id: 3, name: 'Programming', code: 'CS101' }
      ];
      
      let professors = [
        { id: 1, name: 'John Smith', title: 'Dr.' },
        { id: 2, name: 'Maria Garcia', title: 'Prof.' },
        { id: 3, name: 'Robert Johnson', title: 'Engr.' }
      ];

      // DOM Element references
      const scheduleBody = document.getElementById('schedule-body');
      const subjectSelect = document.getElementById('subject-select');
      const professorSelect = document.getElementById('professor-select');
      const startHourSelect = document.getElementById('start-hour');
      const startMinuteSelect = document.getElementById('start-minute');
      const endHourSelect = document.getElementById('end-hour');
      const endMinuteSelect = document.getElementById('end-minute');
      
      // Modal elements
      const addClassModal = document.getElementById('add-class-modal');
      const addSubjectModal = document.getElementById('add-subject-modal');
      const addProfessorModal = document.getElementById('add-professor-modal');
      const manageSubjectsModal = document.getElementById('manage-subjects-modal');
      const manageProfessorsModal = document.getElementById('manage-professors-modal');
      
      // Initialize time dropdowns (24-hour format)
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
      
      // Initialize subject and professor dropdowns
      function populateSubjectDropdown() {
        subjectSelect.innerHTML = '<option value="" disabled selected>Select a subject</option>';
        subjects.forEach(subject => {
          const option = document.createElement('option');
          option.value = subject.id;
          option.textContent = subject.code ? `${subject.name} (${subject.code})` : subject.name;
          subjectSelect.appendChild(option);
        });
      }
      
      function populateProfessorDropdown() {
        professorSelect.innerHTML = '<option value="" disabled selected>Select a professor</option>';
        professors.forEach(professor => {
          const option = document.createElement('option');
          option.value = professor.id;
          option.textContent = professor.title ? `${professor.title} ${professor.name}` : professor.name;
          professorSelect.appendChild(option);
        });
      }
      
      // Generate time slots for the schedule
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
      
      // Function to add a class to the schedule
        function addClass() {
      const subjectId = subjectSelect.value;
      const professorId = professorSelect.value;
      const section = document.getElementById('section-input').value.trim();
      const subjectColor = document.getElementById('subject-color').value;
      const maxStudents = document.getElementById('maximum_students').value;
      const roomId = document.getElementById('room-select').value;

      // Validate basic inputs
      if (!subjectId || !professorId || !section || !roomId || !maxStudents) {
          alert('Please fill in all required fields.');
          return;
      }

      // Get subject and professor details
      const subject = subjects.find(s => s.id == subjectId);
      const professor = professors.find(p => p.id == professorId);

      if (!subject || !professor) {
          alert('Invalid subject or professor selection.');
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
        document.querySelectorAll('#add-class-modal .day-checkboxes input:checked').forEach(checkbox => {
          selectedDays.push(checkbox.value);
        });
        
        if (selectedDays.length === 0) {
          alert('Please select at least one day.');
          return;
        }
        
        // Get subject and professor details
        const subject = subjects.find(s => s.id == subjectId);
        const professor = professors.find(p => p.id == professorId);
        
        if (!subject || !professor) {
          alert('Invalid subject or professor selection.');
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
            if (dayCell && dayCell.dataset.occupied === 'true') {
              conflict = true;
            }
          });
          
          if (conflict) {
            if (!confirm(`There's already a class scheduled on ${day} during this time. Would you like to replace it?`)) {
              return;
            }
            
            // Remove existing subjects in this time range for this day
            rows.forEach(row => {
              const dayCell = row.querySelector(`td[data-day="${day}"]`);
              if (dayCell) {
                dayCell.innerHTML = '';
                dayCell.dataset.occupied = 'false';
                dayCell.rowSpan = 1;
              }
            });
          }
          
          // Create subject item and add it to the first row
          const firstRow = rows[0];
          const firstDayCell = firstRow.querySelector(`td[data-day="${day}"]`);
          
          if (!firstDayCell) return; // Skip if cell not found
          
          // Create subject item
          const subjectItem = document.createElement('div');
          subjectItem.className = 'subject-item';
          subjectItem.style.backgroundColor = subjectColor;
          
          const subjectNameElem = document.createElement('div');
          subjectNameElem.className = 'subject-name';
          subjectNameElem.textContent = subject.name;
          subjectItem.appendChild(subjectNameElem);
          
          const sectionElem = document.createElement('div');
          sectionElem.className = 'section';
          sectionElem.textContent = section;
          subjectItem.appendChild(sectionElem);
          
          const profName = professor.title ? `${professor.title} ${professor.name}` : professor.name;
          const profElem = document.createElement('div');
          profElem.className = 'professor-info';
          profElem.textContent = profName;
          subjectItem.appendChild(profElem);
          
          // Add delete button
          const deleteBtn = document.createElement('span');
          deleteBtn.className = 'delete-btn';
          deleteBtn.textContent = '×';
          deleteBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (confirm('Remove this class from the schedule?')) {
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
        
        // Close the modal after adding
        closeModal(addClassModal);
        
        // Reset form fields
        document.getElementById('section-input').value = '';
        subjectSelect.selectedIndex = 0;
        professorSelect.selectedIndex = 0;
        startHourSelect.selectedIndex = 0;
        startMinuteSelect.selectedIndex = 0;
        endHourSelect.selectedIndex = 0;
        endMinuteSelect.selectedIndex = 0;
        document.querySelectorAll('#add-class-modal .day-checkboxes input:checked').forEach(checkbox => {
          checkbox.checked = false;
        });
      }
      
      // Function to add a new subject
      function addSubject() {
        const subjectName = document.getElementById('new-subject-name').value.trim();
        const subjectCode = document.getElementById('subject-code').value.trim();
        
        if (!subjectName) {
          alert('Please enter a subject name.');
          return;
        }
        
        // Generate a new ID (just increment the highest current ID)
        const newId = subjects.length > 0 ? Math.max(...subjects.map(s => s.id)) + 1 : 1;
        
        // Add the new subject
        subjects.push({
          id: newId,
          name: subjectName,
          code: subjectCode || null
        });
        
        // Update the dropdown
        populateSubjectDropdown();
        
        // Reset the form and close the modal
        document.getElementById('new-subject-name').value = '';
        document.getElementById('subject-code').value = '';
        closeModal(addSubjectModal);
        
        // Select the newly added subject in the dropdown
        subjectSelect.value = newId;
      }
      
      // Function to add a new professor
      function addProfessor() {
        const professorName = document.getElementById('new-professor-name').value.trim();
        const professorTitle = document.getElementById('professor-title').value.trim();
        
        if (!professorName) {
          alert('Please enter a professor name.');
          return;
        }
        
        // Generate a new ID
        const newId = professors.length > 0 ? Math.max(...professors.map(p => p.id)) + 1 : 1;
        
        // Add the new professor
        professors.push({
          id: newId,
          name: professorName,
          title: professorTitle || null
        });
        
        // Update the dropdown
        populateProfessorDropdown();
        
        // Reset the form and close the modal
        document.getElementById('new-professor-name').value = '';
        document.getElementById('professor-title').value = '';
        closeModal(addProfessorModal);
        
        // Select the newly added professor in the dropdown
        professorSelect.value = newId;
      }
      
      // Function to update the subjects list in the manage subjects modal
      function updateSubjectsList() {
        const subjectsList = document.getElementById('subjects-list');
        subjectsList.innerHTML = '';
        
        subjects.forEach(subject => {
          const listItem = document.createElement('div');
          listItem.className = 'list-item';
          
          const subjectText = document.createElement('span');
          subjectText.textContent = subject.code ? `${subject.name} (${subject.code})` : subject.name;
          listItem.appendChild(subjectText);
          
          const deleteBtn = document.createElement('span');
          deleteBtn.className = 'list-item-delete';
          deleteBtn.textContent = '×';
          deleteBtn.addEventListener('click', () => {
            if (confirm(`Are you sure you want to delete the subject: ${subject.name}?`)) {
              // Remove the subject
              subjects = subjects.filter(s => s.id !== subject.id);
              // Update the dropdown and list
              populateSubjectDropdown();
              updateSubjectsList();
            }
          });
          listItem.appendChild(deleteBtn);
          
          subjectsList.appendChild(listItem);
        });
      }
      
      // Function to update the professors list in the manage professors modal
      function updateProfessorsList() {
        const professorsList = document.getElementById('professors-list');
        professorsList.innerHTML = '';
        
        professors.forEach(professor => {
          const listItem = document.createElement('div');
          listItem.className = 'list-item';
          
          const professorText = document.createElement('span');
          professorText.textContent = professor.title ? `${professor.title} ${professor.name}` : professor.name;
          listItem.appendChild(professorText);
          
          const deleteBtn = document.createElement('span');
          deleteBtn.className = 'list-item-delete';
          deleteBtn.textContent = '×';
          deleteBtn.addEventListener('click', () => {
            if (confirm(`Are you sure you want to delete the professor: ${professor.name}?`)) {
              // Remove the professor
              professors = professors.filter(p => p.id !== professor.id);
              // Update the dropdown and list
              populateProfessorDropdown();
              updateProfessorsList();
            }
          });
          listItem.appendChild(deleteBtn);
          
          professorsList.appendChild(listItem);
        });
      }
      
      // Function to open a modal
      function openModal(modal) {
        modal.style.display = 'block';
      }
      
      // Function to close a modal
      function closeModal(modal) {
        modal.style.display = 'none';
      }
      
      // Function to clear the entire schedule
      function clearSchedule() {
        if (confirm('Are you sure you want to clear the entire schedule?')) {
          // Regenerate the time slots to reset everything
          generateTimeSlots();
        }
      }
      
      // Function to save the schedule (localStorage implementation)
      function saveSchedule() {
        try {
          // Create a data structure to save
          const scheduleData = {
            subjects: subjects,
            professors: professors,
            classes: [] // We would collect all classes here
          };
          
          // In a real implementation, we would iterate through the schedule and save all classes
          // For now, just show a message
          localStorage.setItem('scheduleData', JSON.stringify(scheduleData));
          alert('Schedule saved successfully!');
        } catch (error) {
          alert('Error saving schedule: ' + error.message);
        }
      }
      
      // Function to print the schedule
      function printSchedule() {
        window.print();
      }
      
      // Initialize the page
      function init() {
        // Generate time slots
        generateTimeSlots();
        
        // Populate dropdowns
        populateSubjectDropdown();
        populateProfessorDropdown();
        
        // Set up event listeners for modals
        document.getElementById('add-class-btn').addEventListener('click', () => openModal(addClassModal));
        document.getElementById('manage-subjects-btn').addEventListener('click', () => {
          updateSubjectsList();
          openModal(manageSubjectsModal);
        });
        document.getElementById('manage-professors-btn').addEventListener('click', () => {
          updateProfessorsList();
          openModal(manageProfessorsModal);
        });
        
        // Close modal buttons
        document.querySelectorAll('.close-modal').forEach(button => {
          button.addEventListener('click', () => {
            closeModal(button.closest('.modal'));
          });
        });
        
        // Close modal when clicking outside the modal content
        window.addEventListener('click', (event) => {
          if (event.target.classList.contains('modal')) {
            closeModal(event.target);
          }
        });
        
        // Form submissions
        document.getElementById('submit-add-class').addEventListener('click', addClass);
        document.getElementById('submit-add-subject').addEventListener('click', addSubject);
        document.getElementById('submit-add-professor').addEventListener('click', addProfessor);
        
        // Cancel buttons
        document.getElementById('cancel-add-class').addEventListener('click', () => closeModal(addClassModal));
        document.getElementById('cancel-add-subject').addEventListener('click', () => closeModal(addSubjectModal));
        document.getElementById('cancel-add-professor').addEventListener('click', () => closeModal(addProfessorModal));
        document.getElementById('close-manage-subjects').addEventListener('click', () => closeModal(manageSubjectsModal));
        document.getElementById('close-manage-professors').addEventListener('click', () => closeModal(manageProfessorsModal));
        
        // Add new buttons in modals
        document.getElementById('add-new-subject-btn').addEventListener('click', () => {
          closeModal(addClassModal);
          openModal(addSubjectModal);
        });
        document.getElementById('add-new-professor-btn').addEventListener('click', () => {
          closeModal(addClassModal);
          openModal(addProfessorModal);
        });
        document.getElementById('add-subject-from-manage').addEventListener('click', () => {
          closeModal(manageSubjectsModal);
          openModal(addSubjectModal);
        });
        document.getElementById('add-professor-from-manage').addEventListener('click', () => {
          closeModal(manageProfessorsModal);
          openModal(addProfessorModal);
        });
        
        // Other buttons
        document.getElementById('clear-schedule').addEventListener('click', clearSchedule);
        document.getElementById('save-schedule').addEventListener('click', saveSchedule);
        document.getElementById('print-schedule').addEventListener('click', printSchedule);
        
        // Add keyboard shortcut for printing (Ctrl+P)
        document.addEventListener('keydown', function(e) {
          if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            printSchedule();
          }
        });
        
        // Try to load saved schedule data
        try {
          const savedData = localStorage.getItem('scheduleData');
          if (savedData) {
            const parsedData = JSON.parse(savedData);
            if (parsedData.subjects && Array.isArray(parsedData.subjects)) {
              subjects = parsedData.subjects;
            }
            if (parsedData.professors && Array.isArray(parsedData.professors)) {
              professors = parsedData.professors;
            }
            // Would also restore classes here
            
            // Update dropdowns
            populateSubjectDropdown();
            populateProfessorDropdown();
          }
        } catch (error) {
          console.error('Error loading saved schedule:', error);
        }
      }
      
      // Initialize everything when the DOM is loaded
      init();

     // Add meeting time button functionality
document.getElementById('add-meeting-time-btn').addEventListener('click', function(e) {
  e.preventDefault();
  
  const meetingTimeSection = document.createElement('div');
  meetingTimeSection.className = 'meeting-time-section';
  
  meetingTimeSection.innerHTML = `
    <button type="button" class="cancel-btn" style="margin-left: auto; margin-bottom: 10px;">Remove</button>
    <div class="form-group">
      <label>Days</label>
      <div class="day-checkboxes">
        <label class="day-checkbox-label"><input type="checkbox" value="Monday">Mon</label>
        <label class="day-checkbox-label"><input type="checkbox" value="Tuesday">Tue</label>
        <label class="day-checkbox-label"><input type="checkbox" value="Wednesday">Wed</label>
        <label class="day-checkbox-label"><input type="checkbox" value="Thursday">Thu</label>
        <label class="day-checkbox-label"><input type="checkbox" value="Friday">Fri</label>
        <label class="day-checkbox-label"><input type="checkbox" value="Saturday">Sat</label>
      </div>
    </div>
    <div class="form-group">
      <label>Start Time</label>
      <div class="time-inputs">
        <select class="start-hour" required>
          <option value="" disabled selected>Hour</option>
        </select>
        <select class="start-minute" required>
          <option value="" disabled selected>Minute</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label>End Time</label>
      <div class="time-inputs">
        <select class="end-hour" required>
          <option value="" disabled selected>Hour</option>
        </select>
        <select class="end-minute" required>
          <option value="" disabled selected>Minute</option>
        </select>
      </div>
    </div>
    <hr style="margin: 20px 0;">
  `;

  // Add event listener for remove button
  const removeBtn = meetingTimeSection.querySelector('.cancel-btn');
  removeBtn.addEventListener('click', function() {
    meetingTimeSection.remove();
  });

  // Get all time selects in this section
  const startHourSelect = meetingTimeSection.querySelector('.start-hour');
  const startMinuteSelect = meetingTimeSection.querySelector('.start-minute');
  const endHourSelect = meetingTimeSection.querySelector('.end-hour');
  const endMinuteSelect = meetingTimeSection.querySelector('.end-minute');

  // Populate hours (7:00 - 20:00)
  for (let i = 7; i < 21; i++) {
    const hourValue = i.toString().padStart(2, '0');
    startHourSelect.add(new Option(hourValue, hourValue));
    endHourSelect.add(new Option(hourValue, hourValue));
  }

  // Populate minutes (00, 15, 30, 45)
  ['00', '15', '30', '45'].forEach(minute => {
    startMinuteSelect.add(new Option(minute, minute));
    endMinuteSelect.add(new Option(minute, minute));
  });

  // Insert the new section before the Add Meeting Time button
  const addButton = document.getElementById('add-meeting-time-btn');
  addButton.parentNode.insertBefore(meetingTimeSection, addButton);
});

// Helper function to create subject item
function createSubjectItem(subject, professor, section, subjectColor, maxStudents, roomId) {
    const subjectItem = document.createElement('div');
    subjectItem.className = 'subject-item';
    subjectItem.style.backgroundColor = subjectColor;

    const subjectName = document.createElement('div');
    subjectName.className = 'subject-name';
    subjectName.textContent = subject.name;
    subjectItem.appendChild(subjectName);

    const sectionInfo = document.createElement('div');
    sectionInfo.className = 'section';
    sectionInfo.textContent = section; // Use the section parameter directly
    subjectItem.appendChild(sectionInfo);

    const professorInfo = document.createElement('div');
    professorInfo.className = 'professor-info';
    professorInfo.textContent = `${professor.title} ${professor.name}`;
    subjectItem.appendChild(professorInfo);

    const roomInfo = document.createElement('div');
    roomInfo.className = 'room-info';
    roomInfo.textContent = `Room: ${roomId} | Max: ${maxStudents}`;
    subjectItem.appendChild(roomInfo);

    const deleteBtn = document.createElement('span');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '×';
    deleteBtn.onclick = function() {
        if (confirm('Are you sure you want to delete this class?')) {
            const cell = subjectItem.parentElement;
            cell.innerHTML = '';
            cell.dataset.occupied = 'false';
            cell.rowSpan = 1;
        }
    };
    subjectItem.appendChild(deleteBtn);

    return subjectItem;
}

// Helper function to reset the add class form
function resetAddClassForm() {
    document.getElementById('section-input').value = '';
    document.getElementById('maximum_students').value = '';
    document.getElementById('room-select').selectedIndex = 0;
    subjectSelect.selectedIndex = 0;
    professorSelect.selectedIndex = 0;
    startHourSelect.selectedIndex = 0;
    startMinuteSelect.selectedIndex = 0;
    endHourSelect.selectedIndex = 0;
    endMinuteSelect.selectedIndex = 0;
    document.getElementById('subject-color').value = '#a8e6a8';
    
    // Reset all day checkboxes
    document.querySelectorAll('#add-class-modal .day-checkboxes input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Remove all additional meeting time sections
    document.querySelectorAll('.meeting-time-section').forEach(section => section.remove());
}
    });
  </script>
</body>
</html>
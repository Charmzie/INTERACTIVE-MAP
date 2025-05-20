
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Schedule Maker</title>
  <link rel="icon" type="image/x-icon" href="../resources/CDM-Logo.png">
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

   .schedule-nav {
      display: flex;  
      align-items: center;
      margin-bottom: 20px;
      border-bottom: 1px solid #ddd;
      background: #f8f8f8;
      padding: 8px 8px 0 8px;
      border-radius: 8px 8px 0 0;
    }

    .schedule-nav-tabs {
      display: flex;
      flex-grow: 1;
      gap: 4px;
      overflow-x: auto;
      padding-bottom: 1px;
    }

    .schedule-nav-tab {
      padding: 8px 20px;
      background: #fff;
      border: 1px solid #ddd;
      border-bottom: none;
      border-radius: 8px 8px 0 0;
      cursor: pointer;
      position: relative;
      bottom: -1px;
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .schedule-nav-tab.active {
      background: #fff;
      border-bottom: 1px solid #fff;
      font-weight: bold;
    }

    .schedule-nav-tab .close-tab {
      width: 16px;
      height: 16px;
      line-height: 16px;
      text-align: center;
      border-radius: 50%;
      background: #eee;
      color: #666;
      font-size: 12px;
      cursor: pointer;
    }

    .schedule-nav-tab .close-tab:hover {
      background: #ddd;
      color: #333;
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
      justify-content: center;
      gap: 20px;
      margin-top: 20px;
      margin-bottom: 40px; /* Increased margin-bottom for more space */
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
      border: none;
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

  #menuToggle {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 100;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    background-color: #000080;
    color: white;
    border: none;
    border-radius: 5px;
}
 
  #tripleMenu {
    position: absolute;
    top: 50px;
    left: 10px;
    display: none; /* Initially hidden */
    flex-direction: column;
    background-color: #2996ab;
    padding: 10px;
    border-radius: 10px;
    z-index: 99;
}
 
  #menu-section {
    padding-top: 20px;
    margin-bottom: 10px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
}
 
  #menu-section:last-child {
    border-bottom: none;
}
 
  #menu-section:hover {
    background-color: #49aabc;
}

  
  </style>
</head>
<body>

<button id ="menuToggle">☰ Menu</button>
 
<!-- Hidden Menu -->
<div id ="tripleMenu">
    <a href="../views/Interactive_Map.php" id="menu-section">Main Interactive Map</a>
    <a href="../views/main.php" id="menu-section">Main Page</a>
</div>

  <div class="container">
    <img src="../resources/CDM-Logo.png" alt="CDM Logo" width="100" height="100">
    <h1>COLEGIO DE MUNTINLUPA</h1>
    <h2>Schedule Maker: Editable</h2>
    
    <div class="controls">
      <button id="add-class-btn" class="add-class-btn">Add Class</button>
      <button id="manage-subjects-btn">Manage Subjects</button>
      <button id="manage-professors-btn">Manage Professors</button>
    </div>

        
    <div class="schedule-nav">
      <div class="schedule-nav-tabs" id="schedule-tabs">
        <!-- Initial tab removed -->
      </div>
      <button class="add-schedule-bttn" id="add-schedule-bttn">+</button>
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
  
  <div class="controls">      
    <button id="clear-schedule">Clear Schedule</button>
    <button id="print-schedule">Print Schedule</button>
    <button id="save-schedule">Save Schedule</button>
  </div>

  <!-- Add Class Modal -->
  <div id="add-class-modal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h3>Add Class</h3>
        <span class="close-modal">&times;</span>
      </div>

        <form name="add_class" action="add_class.php" method="POST">
          <div class="form-group">
            <label for="subject-input">Subject</label>
            <input type="text" id="subject-input" name="subject" placeholder="Enter subject name" required>
          </div>

          <div class="form-group">
            <label for="subject-code-input">Subject Code (Optional)</label>
            <input type="text" id="subject-code-input" name="subjectCode" placeholder="e.g., CS101">
          </div>

          <div class="form-group">
            <label for="professor-input">Professor</label>
            <input type="text" id="professor-input" name="professor" placeholder="Enter professor name" required>
          </div>

          <div class="form-group">
            <label for="professor-title-input">Professor Title (Optional)</label>
            <input type="text" id="professor-title-input" name="professorTitle" placeholder="e.g., Dr., Prof.">
          </div>

          <div class="form-group">
            <label for="section-input">Section</label>
            <input type="text" id="section-input" name="section" placeholder="e.g., CE3B" required>
          </div>

          <div class="form-group">
            <label>Days</label>
            <div class="day-checkboxes">
              <label class="day-checkbox-label"><input type="checkbox" name="days[]" value="Monday">Mon</label>
              <label class="day-checkbox-label"><input type="checkbox" name="days[]" value="Tuesday">Tue</label>
              <label class="day-checkbox-label"><input type="checkbox" name="days[]" value="Wednesday">Wed</label>
              <label class="day-checkbox-label"><input type="checkbox" name="days[]" value="Thursday">Thu</label>
              <label class="day-checkbox-label"><input type="checkbox" name="days[]" value="Friday">Fri</label>
              <label class="day-checkbox-label"><input type="checkbox" name="days[]" value="Saturday">Sat</label>
            </div>
          </div>

          <div class="form-group">
            <label for="maximum_students">Maximum Students:</label>
            <input type="number" id="maximum_students" name="max_students" placeholder="40" required max="45">
          </div>

          <div class="form-group">
            <label>Start Time</label>
            <div class="time-inputs">
              <select id="start-hour" name='start_hour' required>
                <option value="" disabled selected>Hour</option>
                <!-- Hours will be added dynamically -->
              </select>
              <select id="start-minute" name='start_minute' required>
                <option value="" disabled selected>Minute</option>
                <!-- Minutes will be added dynamically -->
              </select>
            </div>
          </div>

          <div class="form-group">
            <label>End Time</label>
            <div class="time-inputs">
              <select id="end-hour" name='end_hour' required>
                <option value="" disabled selected>Hour</option>
                <!-- Hours will be added dynamically -->
              </select>
              <select id="end-minute" name='end_minute' required>
                <option value="" disabled selected>Minute</option>
                <!-- Minutes will be added dynamically -->
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="subject-color">Color</label>
            <input type="color" id="subject-color" name="color" class="color-picker" value="#a8e6a8">
          </div>

          <div class="form-group">
            <label for="room-select">Room</label>
            <select id="room-select" name="room" required>
              <option value="" disabled selected>Select a Room</option>
              <option value="Library">Library</option>
              <option value="Seminar">Seminar Room</option>
              <option value="AVR">Audio Visual Room</option>
              <option value="ComLab">Computer Laboratory 2</option>
              <option value="ME1">ME1</option>
              <option value="ME2">ME2</option>
              <option value="ECE1">ECE1</option>
              <option value="ECE2">ECE2</option>
              <option value="CE1">CE1</option>
              <option value="CE2">CE2</option>
              <option value="EE2">EE2</option>
              <option value="CPE1">CPE1</option>
              <option value="AR">Architecture Room</option>
              <option value="Complab1">Computer Laboratory 1</option>
              <option value="PhyLab">Physics Laboratory</option>
              <option value="ChemLab">Chemistry Laboratory</option>
              <option value="CELab">Civil Engineering Laboratory</option>
              <option value="MELab">Mechanical Engineering Laboratory</option>
              <option value="EELab">Electrical Engineering Laboratory</option>
              <option value="ECELab">Electronics Engineering Laboratory</option>
              <option value="CPELab">Computer Engineering Laboratory</option>
              <option value="Research">Research Room </option>
              <!-- <option value="F-Faculty">Full-Time Faculty Room</option>
              <option value="Audit">Audit Room</option>
              <option value="Robotics">Robotics Room</option>
              <option value="PT-Faculty">Part-Time Faculty Room</option> -->
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
              <option value="613">612</option>
              <!-- Add other room options here -->
            </select>
          </div>

          <div class="form-group">
            <button id="add-meeting-time-btn" class="add-new-button">Add Additional Meeting Time</button>
          </div>

          <div id="additional-meeting-times-container">
            <!-- Additional meeting times will be added here -->
          </div>

          <div class="modal-footer">
            <button id="cancel-add-class" class="cancel-btn">Cancel</button>
            <button id="submit-add-class" type="submit" name="submit">Add Class</button>
          </div>
        </form>
        </div>
      </div>

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
      <div class="form-group">
        <input type="text" id="new-subject-name" name='new-subject-name' placeholder="Enter subject name">
        <input type="text" id="subject-code" placeholder="Subject code (optional)" style="margin-top: 10px;">
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
      <div class="form-group">
        <input type="text" id="new-professor-name" placeholder="Enter professor name">
        <input type="text" id="professor-title" placeholder="Title (optional)" style="margin-top: 10px;">
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
      let subjects = [];
      let professors = [];

      // Room scheduling state management
      const scheduleState = {
        rooms: {},
        currentRoom: null,
        addRoom(roomName) {
          if (!this.rooms[roomName]) {
            this.rooms[roomName] = {
              schedule: '',
              isActive: false
            };
          }
        },
        setCurrentRoom(roomName) {
          if (this.currentRoom) {
            this.rooms[this.currentRoom].schedule = document.getElementById('schedule-body').innerHTML;
            this.rooms[this.currentRoom].isActive = false;
          }
          this.currentRoom = roomName;
          if (this.rooms[roomName]) {
            this.rooms[roomName].isActive = true;
          }
        },
        getSchedule(roomName) {
          return this.rooms[roomName]?.schedule || '';
        }
      };

      // Tab management functions
      function createTab(roomName) {
        const tab = document.createElement('div');
        tab.className = 'schedule-nav-tab';
        tab.innerHTML = `
          ${roomName}
          <span class="close-tab">×</span>
        `;

        const closeBtn = tab.querySelector('.close-tab');
        closeBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          const tabs = document.querySelectorAll('.schedule-nav-tab');
          if (tabs.length > 1) {
            if (scheduleState.currentRoom === roomName) {
              const nextTab = tab.nextElementSibling || tab.previousElementSibling;
              nextTab.click();
            }
            delete scheduleState.rooms[roomName];
            tab.remove();
          }
        });

        tab.addEventListener('click', function() {
          document.querySelectorAll('.schedule-nav-tab').forEach(t => 
            t.classList.remove('active')
          );
          tab.classList.add('active');
          
          scheduleState.setCurrentRoom(roomName);
          const savedSchedule = scheduleState.getSchedule(roomName);
          if (savedSchedule) {
            document.getElementById('schedule-body').innerHTML = savedSchedule;
          } else {
            generateTimeSlots(); // Reset to empty schedule
          }
        });

        return tab;
      }

      // Create room selection modal
      const roomModal = document.createElement('div');
      roomModal.className = 'modal';
      roomModal.innerHTML = `
        <div class="modal-content" style="max-width: 400px;">
          <div class="modal-header">
            <h3>Select Room</h3>
            <span class="close-modal">&times;</span>
          </div>
          <div class="form-group">
            <label for="room-name-select">Room</label>
            <select id="room-name-select" required>
              <option value="" disabled selected>Select Room ID</option>
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
            </select>
          </div>
          <div class="modal-footer">
            <button id="cancel-room-select" class="cancel-btn">Cancel</button>
            <button id="confirm-room-select">Add Room</button>
          </div>
        </div>
      `;
      document.body.appendChild(roomModal);

      // Add room button functionality
      document.getElementById('add-schedule-bttn').addEventListener('click', function() {
        roomModal.style.display = 'block';
      });

      // Room selection modal functionality
      document.getElementById('confirm-room-select').addEventListener('click', function() {
        const select = document.getElementById('room-name-select');
        const roomName = select.value;
        
        if (!roomName) return;
        
        if (scheduleState.rooms[roomName]) {
          alert('Room already exists!');
          return;
        }

        scheduleState.addRoom(roomName);
        const tab = createTab(roomName);
        document.getElementById('schedule-tabs').appendChild(tab);
        tab.click();
        
        // Reset and close modal
        select.selectedIndex = 0;
        roomModal.style.display = 'none';
      });

      // Close modal functionality
      document.getElementById('cancel-room-select').addEventListener('click', function() {
        document.getElementById('room-name-select').selectedIndex = 0;
        roomModal.style.display = 'none';
      });

      roomModal.querySelector('.close-modal').addEventListener('click', function() {
        document.getElementById('room-name-select').selectedIndex = 0;
        roomModal.style.display = 'none';
      });

      // Save all schedules before unloading
      window.addEventListener('beforeunload', function() {
        if (scheduleState.currentRoom) {
          scheduleState.rooms[scheduleState.currentRoom].schedule = 
            document.getElementById('schedule-body').innerHTML;
        }
        localStorage.setItem('roomSchedules', JSON.stringify(scheduleState.rooms));
        localStorage.setItem('subjects', JSON.stringify(subjects));
        localStorage.setItem('professors', JSON.stringify(professors));
      });

      // Load saved schedules
      try {
        const savedSchedules = localStorage.getItem('roomSchedules');
        if (savedSchedules) {
          const schedules = JSON.parse(savedSchedules);
          Object.keys(schedules).forEach(roomName => {
            scheduleState.rooms[roomName] = schedules[roomName];
            const tab = createTab(roomName);
            document.getElementById('schedule-tabs').appendChild(tab);
          });
          
          // Activate the first tab if exists
          const firstTab = document.querySelector('.schedule-nav-tab');
          if (firstTab) {
            firstTab.click();
          }
        }

        // Load saved subjects and professors
        const savedSubjects = localStorage.getItem('subjects');
        if (savedSubjects) {
          subjects = JSON.parse(savedSubjects);
        }

        const savedProfessors = localStorage.getItem('professors');
        if (savedProfessors) {
          professors = JSON.parse(savedProfessors);
        }
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
          
      // DOM Element references
      const scheduleBody = document.getElementById('schedule-body');
      const subjectInput = document.getElementById('subject-input');
      const subjectCodeInput = document.getElementById('subject-code-input');
      const professorInput = document.getElementById('professor-input');
      const professorTitleInput = document.getElementById('professor-title-input');
      const sectionInput = document.getElementById('section-input');
      const startHourSelect = document.getElementById('start-hour');
      const startMinuteSelect = document.getElementById('start-minute');
      const endHourSelect = document.getElementById('end-hour');
      const endMinuteSelect = document.getElementById('end-minute');
      const maximumStudentsInput = document.getElementById('maximum_students');
      const additionalMeetingTimesContainer = document.getElementById('additional-meeting-times-container');
      
      // Modal elements
      const addClassModal = document.getElementById('add-class-modal');
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
      
      // Generate time slots from 7:00 to 20:30 in 30-minute increments with range format
      function generateTimeSlots() {
        scheduleBody.innerHTML = '';
        
        for (let hour = 7; hour < 21; hour++) {
          for (let minute = 0; minute < 60; minute += 30) {
            // Create the time range string (e.g., "7:00-7:30")
            const startHour = hour.toString().padStart(2, '0');
            const startMinute = minute.toString().padStart(2, '0');
            
            const endHour = (minute === 30) 
              ? (hour + 1).toString().padStart(2, '0') 
              : hour.toString().padStart(2, '0');
            const endMinute = (minute === 30) ? '00' : '30';
            
            const timeString = `${startHour}:${startMinute}-${endHour}:${endMinute}`;
            
 
            // Create a new row
            const row = document.createElement('tr');
            
            // Add time cell
            const timeCell = document.createElement('td');
            timeCell.classList.add('time-cell');
            timeCell.textContent = timeString;
            row.appendChild(timeCell);
            
            // Add day cells
            for (let day = 0; day < 6; day++) {
              const dayCell = document.createElement('td');
              dayCell.dataset.time = timeString;
              dayCell.dataset.day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
              row.appendChild(dayCell);
            }
            
            scheduleBody.appendChild(row);
          }
        }
      }
      
      // Function to create a class item in the schedule
      function createClassItem(classData, cell) {
        const classItem = document.createElement('div');
        classItem.classList.add('subject-item');
        classItem.style.backgroundColor = classData.color || '#a8e6a8';
        
        // Calculate height based on duration (30 minutes = 1 row height)
        const startTime = parseTime(classData.startTime);
        const endTime = parseTime(classData.endTime);
        const durationInMinutes = (endTime.hour * 60 + endTime.minute) - (startTime.hour * 60 + startTime.minute);
        const rowsSpanned = durationInMinutes / 30;
        
        classItem.style.height = `${rowsSpanned * 100}%`;
        
        // Add class details
        classItem.innerHTML = `
          <div class="subject-name">${classData.subject}${classData.subjectCode ? ` (${classData.subjectCode})` : ''}</div>
          <div class="section">${classData.section}</div>
          <div class="max-students-input">Max: ${classData.maxStudents}</div>
          <div class="professor-info">${classData.professorTitle ? `${classData.professorTitle} ` : ''}${classData.professor}</div>
          <div>Room: ${classData.room}</div>
          <span class="delete-btn">×</span>
        `;
        
        // Add delete functionality
        const deleteBtn = classItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function(event) {
          event.stopPropagation();
          if (confirm('Are you sure you want to delete this class?')) {
            cell.innerHTML = '';
          }
        });
        
        return classItem;
      }
      
      // Helper function to parse time string (format: "HH:MM")
      function parseTime(timeString) {
        const [hour, minute] = timeString.split(':').map(part => parseInt(part, 10));
        return { hour, minute };
      }
      
      // Function to find cells for a specific time range and days
      function findCells(startTime, endTime, days) {
        const cells = [];
        
        const startHour = parseInt(startTime.split(':')[0], 10);
        const startMinute = parseInt(startTime.split(':')[1], 10);
        const endHour = parseInt(endTime.split(':')[0], 10);
        const endMinute = parseInt(endTime.split(':')[1], 10);
        
        // Check each cell to see if it falls within the time range
        const allCells = document.querySelectorAll('#schedule-body td:not(.time-cell)');
        allCells.forEach(cell => {
          if (!days.includes(cell.dataset.day)) return;
          
          const cellTimeRange = cell.dataset.time;
          const cellStartTime = cellTimeRange.split('-')[0];
          const cellStartHour = parseInt(cellStartTime.split(':')[0], 10);
          const cellStartMinute = parseInt(cellStartTime.split(':')[1], 10);
          
          // Check if cell start time is within the range
          if (
            (cellStartHour > startHour || (cellStartHour === startHour && cellStartMinute >= startMinute)) &&
            (cellStartHour < endHour || (cellStartHour === endHour && cellStartMinute < endMinute))
          ) {
            cells.push(cell);
          }
        });
        
        return cells;
      }
      
      // Add Class Button Click Event
      document.getElementById('add-class-btn').addEventListener('click', function() {
        // Clear previous inputs
        document.getElementById('add-class-modal').querySelectorAll('input, select').forEach(input => {
          if (input.type === 'checkbox') {
            input.checked = false;
          } else if (input.type === 'color') {
            input.value = '#a8e6a8';
          } else {
            input.value = '';
          }
        });
        
        // Clear additional meeting times
        additionalMeetingTimesContainer.innerHTML = '';
        
        // Populate subject and professor dropdowns with existing values
        if (subjects.length > 0) {
          const datalist = document.createElement('datalist');
          datalist.id = 'subjects-datalist';
          subjects.forEach(subject => {
            const option = document.createElement('option');
            option.value = subject.name;
            option.dataset.code = subject.code || '';
            datalist.appendChild(option);
          });
          document.body.appendChild(datalist);
          subjectInput.setAttribute('list', 'subjects-datalist');
          
          // Auto-fill subject code when subject is selected
          subjectInput.addEventListener('change', function() {
            const selectedOption = [...datalist.options].find(option => option.value === subjectInput.value);
            if (selectedOption && selectedOption.dataset.code) {
              subjectCodeInput.value = selectedOption.dataset.code;
            }
          });
        }
        
        if (professors.length > 0) {
          const datalist = document.createElement('datalist');
          datalist.id = 'professors-datalist';
          professors.forEach(professor => {
            const option = document.createElement('option');
            option.value = professor.name;
            option.dataset.title = professor.title || '';
            datalist.appendChild(option);
          });
          document.body.appendChild(datalist);
          professorInput.setAttribute('list', 'professors-datalist');
          
          // Auto-fill professor title when professor is selected
          professorInput.addEventListener('change', function() {
            const selectedOption = [...datalist.options].find(option => option.value === professorInput.value);
            if (selectedOption && selectedOption.dataset.title) {
              professorTitleInput.value = selectedOption.dataset.title;
            }
          });
        }
        
        // Show modal
        addClassModal.style.display = 'block';
      });
      
      // Close Modal Events
      document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
          addClassModal.style.display = 'none';
          manageSubjectsModal.style.display = 'none';
          manageProfessorsModal.style.display = 'none';
          roomModal.style.display = 'none';
          
          // Remove temporary datalists
          const subjectsDatalist = document.getElementById('subjects-datalist');
          const professorsDatalist = document.getElementById('professors-datalist');
          if (subjectsDatalist) subjectsDatalist.remove();
          if (professorsDatalist) professorsDatalist.remove();
        });
      });
      
      // Cancel Add Class Event
      document.getElementById('cancel-add-class').addEventListener('click', function() {
        addClassModal.style.display = 'none';
        
        // Remove temporary datalists
        const subjectsDatalist = document.getElementById('subjects-datalist');
        const professorsDatalist = document.getElementById('professors-datalist');
        if (subjectsDatalist) subjectsDatalist.remove();
        if (professorsDatalist) professorsDatalist.remove();
      });
      
      // Add Meeting Time Button Click Event
      document.getElementById('add-meeting-time-btn').addEventListener('click', function() {
        const meetingTimeSection = document.createElement('div');
        meetingTimeSection.classList.add('meeting-time-section');
        
        // Create a unique ID for this meeting time section
        const meetingTimeId = 'meeting-time-' + Date.now();
        meetingTimeSection.id = meetingTimeId;
        
        meetingTimeSection.innerHTML = `
          <div class="form-group">
            <label>Days</label>
            <div class="day-checkboxes">
              <label class="day-checkbox-label"><input type="checkbox" name="additional-days-${meetingTimeId}[]" value="Monday">Mon</label>
              <label class="day-checkbox-label"><input type="checkbox" name="additional-days-${meetingTimeId}[]" value="Tuesday">Tue</label>
              <label class="day-checkbox-label"><input type="checkbox" name="additional-days-${meetingTimeId}[]" value="Wednesday">Wed</label>
              <label class="day-checkbox-label"><input type="checkbox" name="additional-days-${meetingTimeId}[]" value="Thursday">Thu</label>
              <label class="day-checkbox-label"><input type="checkbox" name="additional-days-${meetingTimeId}[]" value="Friday">Fri</label>
              <label class="day-checkbox-label"><input type="checkbox" name="additional-days-${meetingTimeId}[]" value="Saturday">Sat</label>
            </div>
          </div>
          
          <div class="form-group">
            <label>Start Time</label>
            <div class="time-inputs">
              <select class="additional-start-hour" required>
                <option value="" disabled selected>Hour</option>
                ${Array.from({length: 14}, (_, i) => i + 7).map(hour => 
                  `<option value="${hour.toString().padStart(2, '0')}">${hour.toString().padStart(2, '0')}</option>`
                ).join('')}
              </select>
              <select class="additional-start-minute" required>
                <option value="" disabled selected>Minute</option>
                ${['00', '15', '30', '45'].map(minute => 
                  `<option value="${minute}">${minute}</option>`
                ).join('')}
              </select>
            </div>
          </div>
          
          <div class="form-group">
            <label>End Time</label>
            <div class="time-inputs">
              <select class="additional-end-hour" required>
                <option value="" disabled selected>Hour</option>
                ${Array.from({length: 14}, (_, i) => i + 7).map(hour => 
                  `<option value="${hour.toString().padStart(2, '0')}">${hour.toString().padStart(2, '0')}</option>`
                ).join('')}
              </select>
              <select class="additional-end-minute" required>
                <option value="" disabled selected>Minute</option>
                ${['00', '15', '30', '45'].map(minute => 
                  `<option value="${minute}">${minute}</option>`
                ).join('')}
              </select>
            </div>
          </div>
          
          <button class="cancel-btn remove-meeting-time">Remove</button>
        `;
        
        additionalMeetingTimesContainer.appendChild(meetingTimeSection);
        
        // Add event listener for the remove button
        meetingTimeSection.querySelector('.remove-meeting-time').addEventListener('click', function() {
          meetingTimeSection.remove();
        });
      });
      
      // Submit Add Class Event
      document.getElementById('submit-add-class').addEventListener('click', function() {
        const ac_form = document.forms['add_class'];
        console.log(ac_form);
        const subject = subjectInput.value.trim();
        const subjectCode = subjectCodeInput.value.trim();
        const professor = professorInput.value.trim();
        const professorTitle = professorTitleInput.value.trim();
        const section = sectionInput.value.trim();
        const maxStudents = maximumStudentsInput.value.trim() || 40;
        const color = document.getElementById('subject-color').value;
        const room = document.getElementById('room-select').value;
        
        // Get selected days
        const days = Array.from(document.querySelectorAll('input[name="days[]"]:checked')).map(checkbox => checkbox.value);
        
        // Get start and end times
        const startTime = `${startHourSelect.value}:${startMinuteSelect.value}`;
        const endTime = `${endHourSelect.value}:${endMinuteSelect.value}`;
        
        // Validate inputs
        if (!subject || !professor || !section || days.length === 0 || !startTime || !endTime || !room) {
          alert('Please fill out all required fields.');
          return;
        }
        
        // Validate time range
        const startTimeObj = parseTime(startTime);
        const endTimeObj = parseTime(endTime);
        if (
          (endTimeObj.hour < startTimeObj.hour) || 
          (endTimeObj.hour === startTimeObj.hour && endTimeObj.minute <= startTimeObj.minute)
        ) {
          alert('End time must be after start time.');
          return;
        }
        
        // Create class data object
        const classData = {
          subject,
          subjectCode,
          professor,
          professorTitle,
          section,
          maxStudents,
          color,
          startTime,
          endTime,
          room
        };
        
        // Add the primary meeting time
        const cells = findCells(startTime, endTime, days);
        if (cells.length === 0) {
          alert('No valid time slots found for the selected time range and days.');
          return;
        }
        
        // Check if cells are already occupied
        let isOccupied = false;
        cells.forEach(cell => {
          if (cell.innerHTML.trim() !== '') {
            isOccupied = true;
          }
        });
        
        if (isOccupied) {
          alert('One or more selected time slots are already occupied.');
          return;
        }
        
        // Add class to the schedule
        cells.forEach(cell => {
          if (cell.dataset.time.split('-')[0] === startTime) {
            cell.appendChild(createClassItem(classData, cell));
            
            // Save subject and professor if new
            if (!subjects.find(s => s.name === subject)) {
              subjects.push({ name: subject, code: subjectCode });
            }
            
            if (!professors.find(p => p.name === professor)) {
              professors.push({ name: professor, title: professorTitle });
            }
          }
        });
        
        // Add additional meeting times
        const additionalMeetingSections = document.querySelectorAll('.meeting-time-section');
        additionalMeetingSections.forEach(section => {
          const additionalDays = Array.from(section.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
          
          const additionalStartHour = section.querySelector('.additional-start-hour').value;
          const additionalStartMinute = section.querySelector('.additional-start-minute').value;
          const additionalEndHour = section.querySelector('.additional-end-hour').value;
          const additionalEndMinute = section.querySelector('.additional-end-minute').value;
          
          const additionalStartTime = `${additionalStartHour}:${additionalStartMinute}`;
          const additionalEndTime = `${additionalEndHour}:${additionalEndMinute}`;
          
          // Validate additional time range
          const additionalStartTimeObj = parseTime(additionalStartTime);
          const additionalEndTimeObj = parseTime(additionalEndTime);
          if (
            (additionalEndTimeObj.hour < additionalStartTimeObj.hour) || 
            (additionalEndTimeObj.hour === additionalStartTimeObj.hour && additionalEndTimeObj.minute <= additionalStartTimeObj.minute)
          ) {
            alert('Additional meeting time: End time must be after start time.');
            return;
          }
          
          // Create additional class data
          const additionalClassData = {
            ...classData,
            startTime: additionalStartTime,
            endTime: additionalEndTime
          };
          
          // Find cells for additional meeting time
          const additionalCells = findCells(additionalStartTime, additionalEndTime, additionalDays);
          
          // Check if additional cells are already occupied
          let additionalIsOccupied = false;
          additionalCells.forEach(cell => {
            if (cell.innerHTML.trim() !== '') {
              additionalIsOccupied = true;
            }
          });
          
          if (additionalIsOccupied) {
            alert('One or more additional time slots are already occupied.');
            return;
          }
          
          // Add additional class to the schedule
          additionalCells.forEach(cell => {
            if (cell.dataset.time.split('-')[0] === additionalStartTime) {
              cell.appendChild(createClassItem(additionalClassData, cell));
            }
          });
        });
        
        // Close modal and clean up
        addClassModal.style.display = 'none';
        
        // Remove temporary datalists
        const subjectsDatalist = document.getElementById('subjects-datalist');
        const professorsDatalist = document.getElementById('professors-datalist');
        if (subjectsDatalist) subjectsDatalist.remove();
        if (professorsDatalist) professorsDatalist.remove();

        // Save current room's schedule
        if (scheduleState.currentRoom) {
          scheduleState.rooms[scheduleState.currentRoom].schedule = scheduleBody.innerHTML;
        }
      });
      // Clear Schedule Button
      document.getElementById('clear-schedule').addEventListener('click', function() {
        if (confirm('Are you sure you want to clear the entire schedule? This cannot be undone.')) {
          generateTimeSlots();
          
          // Update current room's schedule
          if (scheduleState.currentRoom) {
            scheduleState.rooms[scheduleState.currentRoom].schedule = scheduleBody.innerHTML;
          }
        }
      });
      
      // Print Schedule Button
      document.getElementById('print-schedule').addEventListener('click', function() {
        window.print();
      });
      
      // Save Schedule Button
      document.getElementById('save-schedule').addEventListener('click', function() {
        // Save current view to room schedule
        if (scheduleState.currentRoom) {
          scheduleState.rooms[scheduleState.currentRoom].schedule = scheduleBody.innerHTML;
        }
        
        // Save to localStorage
        localStorage.setItem('roomSchedules', JSON.stringify(scheduleState.rooms));
        localStorage.setItem('subjects', JSON.stringify(subjects));
        localStorage.setItem('professors', JSON.stringify(professors));
        
        alert('Schedule saved successfully!');
      });
      
      // Manage Subjects Button
      document.getElementById('manage-subjects-btn').addEventListener('click', function() {
        const subjectsList = document.getElementById('subjects-list');
        subjectsList.innerHTML = '';
        
        // Populate subjects list
        subjects.forEach((subject, index) => {
          const listItem = document.createElement('div');
          listItem.classList.add('list-item');
          listItem.innerHTML = `
            <div>${subject.name}${subject.code ? ` (${subject.code})` : ''}</div>
            <div class="list-item-delete" data-index="${index}">×</div>
          `;
          subjectsList.appendChild(listItem);
        });
        
        // Add event listeners to delete buttons
        subjectsList.querySelectorAll('.list-item-delete').forEach(deleteBtn => {
          deleteBtn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index, 10);
            if (confirm(`Are you sure you want to delete ${subjects[index].name}?`)) {
              subjects.splice(index, 1);
              this.closest('.list-item').remove();
              
              // Renumber remaining items
              subjectsList.querySelectorAll('.list-item-delete').forEach((btn, i) => {
                btn.dataset.index = i;
              });
            }
          });
        });
        
        manageSubjectsModal.style.display = 'block';
      });
      
      // Add Subject from Manage Modal
      document.getElementById('add-subject-from-manage').addEventListener('click', function() {
        const newSubjectName = document.getElementById('new-subject-name').value.trim();
        const subjectCode = document.getElementById('subject-code').value.trim();
        
        if (!newSubjectName) {
          alert('Please enter a subject name.');
          return;
        }
        
        if (subjects.some(subject => subject.name === newSubjectName)) {
          alert('This subject already exists.');
          return;
        }
        
        // Add new subject
        subjects.push({ name: newSubjectName, code: subjectCode });
        
        // Update list
        const subjectsList = document.getElementById('subjects-list');
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');
        listItem.innerHTML = `
          <div>${newSubjectName}${subjectCode ? ` (${subjectCode})` : ''}</div>
          <div class="list-item-delete" data-index="${subjects.length - 1}">×</div>
        `;
        subjectsList.appendChild(listItem);
        
        // Add event listener to delete button
        listItem.querySelector('.list-item-delete').addEventListener('click', function() {
          const index = parseInt(this.dataset.index, 10);
          if (confirm(`Are you sure you want to delete ${subjects[index].name}?`)) {
            subjects.splice(index, 1);
            this.closest('.list-item').remove();
            
            // Renumber remaining items
            subjectsList.querySelectorAll('.list-item-delete').forEach((btn, i) => {
              btn.dataset.index = i;
            });
          }
        });
        
        // Clear input fields
        document.getElementById('new-subject-name').value = '';
        document.getElementById('subject-code').value = '';
      });
      
      // Close Manage Subjects Modal
      document.getElementById('close-manage-subjects').addEventListener('click', function() {
        manageSubjectsModal.style.display = 'none';
      });
      
      // Manage Professors Button
      document.getElementById('manage-professors-btn').addEventListener('click', function() {
        const professorsList = document.getElementById('professors-list');
        professorsList.innerHTML = '';
        
        // Populate professors list
        professors.forEach((professor, index) => {
          const listItem = document.createElement('div');
          listItem.classList.add('list-item');
          listItem.innerHTML = `
            <div>${professor.title ? `${professor.title} ` : ''}${professor.name}</div>
            <div class="list-item-delete" data-index="${index}">×</div>
          `;
          professorsList.appendChild(listItem);
        });
        
        // Add event listeners to delete buttons
        professorsList.querySelectorAll('.list-item-delete').forEach(deleteBtn => {
          deleteBtn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index, 10);
            if (confirm(`Are you sure you want to delete ${professors[index].name}?`)) {
              professors.splice(index, 1);
              this.closest('.list-item').remove();
              
              // Renumber remaining items
              professorsList.querySelectorAll('.list-item-delete').forEach((btn, i) => {
                btn.dataset.index = i;
              });
            }
          });
        });
        
        manageProfessorsModal.style.display = 'block';
      });
      
      // Add Professor from Manage Modal
      document.getElementById('add-professor-from-manage').addEventListener('click', function() {
        const newProfessorName = document.getElementById('new-professor-name').value.trim();
        const professorTitle = document.getElementById('professor-title').value.trim();
        
        if (!newProfessorName) {
          alert('Please enter a professor name.');
          return;
        }
        
        if (professors.some(professor => professor.name === newProfessorName)) {
          alert('This professor already exists.');
          return;
        }
        
        // Add new professor
        professors.push({ name: newProfessorName, title: professorTitle });
        
        // Update list
        const professorsList = document.getElementById('professors-list');
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');
        listItem.innerHTML = `
          <div>${professorTitle ? `${professorTitle} ` : ''}${newProfessorName}</div>
          <div class="list-item-delete" data-index="${professors.length - 1}">×</div>
        `;
        professorsList.appendChild(listItem);
        
        // Add event listener to delete button
        listItem.querySelector('.list-item-delete').addEventListener('click', function() {
          const index = parseInt(this.dataset.index, 10);
          if (confirm(`Are you sure you want to delete ${professors[index].name}?`)) {
            professors.splice(index, 1);
            this.closest('.list-item').remove();
            
            // Renumber remaining items
            professorsList.querySelectorAll('.list-item-delete').forEach((btn, i) => {
              btn.dataset.index = i;
            });
          }
        });
        
        // Clear input fields
        document.getElementById('new-professor-name').value = '';
        document.getElementById('professor-title').value = '';
      });
      
      // Close Manage Professors Modal
      document.getElementById('close-manage-professors').addEventListener('click', function() {
        manageProfessorsModal.style.display = 'none';
      });
      
      // Check if there's at least one tab, if not create a default
      if (document.querySelectorAll('.schedule-nav-tab').length === 0) {
        const defaultRoom = '410';
        scheduleState.addRoom(defaultRoom);
        const tab = createTab(defaultRoom);
        document.getElementById('schedule-tabs').appendChild(tab);
        
        // Activate the first tab
        tab.click();
      } else {
        // Activate first tab if none is active
        const activeTab = document.querySelector('.schedule-nav-tab.active');
        if (!activeTab) {
          document.querySelector('.schedule-nav-tab').click();
        }
      }
      
      // Initialize time slots
      if (!scheduleState.currentRoom || !scheduleState.getSchedule(scheduleState.currentRoom)) {
        generateTimeSlots();
      }
      
      // Add conflict detection system
      function checkScheduleConflicts() {
        // Store all classes by room
        const roomClasses = {};
        
        // Collect all classes in the current schedule
        document.querySelectorAll('.subject-item').forEach(item => {
          const cell = item.closest('td');
          const day = cell.dataset.day;
          const timeRange = cell.dataset.time;
          const room = item.querySelector('div:last-child').textContent.replace('Room: ', '').trim();
          
          if (!roomClasses[room]) {
            roomClasses[room] = [];
          }
          
          const subject = item.querySelector('.subject-name').textContent;
          const section = item.querySelector('.section').textContent;
          
          roomClasses[room].push({
            subject,
            section,
            day,
            timeRange,
            element: item
          });
        });
        
        // Check for conflicts in each room
        Object.keys(roomClasses).forEach(room => {
          const classes = roomClasses[room];
          
          // Compare each class with every other class in the same room
          for (let i = 0; i < classes.length; i++) {
            for (let j = i + 1; j < classes.length; j++) {
              const class1 = classes[i];
              const class2 = classes[j];
              
              // Check if same day and overlapping time ranges
              if (class1.day === class2.day && class1.timeRange === class2.timeRange) {
                // Mark both classes with conflict
                class1.element.style.border = '2px solid red';
                class2.element.style.border = '2px solid red';
              }
            }
          }
        });
      }
      
      // Add export to CSV function
      function exportToCSV() {
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Room,Day,Time,Subject,Subject Code,Section,Professor,Max Students\n";
        
        // Go through all rooms
        Object.keys(scheduleState.rooms).forEach(roomName => {
          // Save current schedule
          if (scheduleState.currentRoom) {
            scheduleState.rooms[scheduleState.currentRoom].schedule = document.getElementById('schedule-body').innerHTML;
          }
          
          // Set temporary container to hold room's schedule
          const tempContainer = document.createElement('div');
          tempContainer.innerHTML = scheduleState.getSchedule(roomName);
          
          // Extract class data
          const subjectItems = tempContainer.querySelectorAll('.subject-item');
          subjectItems.forEach(item => {
            const cell = item.closest('td');
            const day = cell.dataset.day;
            const timeRange = cell.dataset.time;
            
            const subject = item.querySelector('.subject-name').textContent.split('(')[0].trim();
            const subjectCode = item.querySelector('.subject-name').textContent.includes('(') ? 
              item.querySelector('.subject-name').textContent.split('(')[1].replace(')', '').trim() : '';
            const section = item.querySelector('.section').textContent;
            const professor = item.querySelector('.professor-info').textContent;
            const maxStudents = item.querySelector('.max-students-input').textContent.replace('Max: ', '').trim();
            
            // Add to CSV
            csvContent += `"${roomName}","${day}","${timeRange}","${subject}","${subjectCode}","${section}","${professor}","${maxStudents}"\n`;
          });
        });
        
        // Create download link
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "schedule_export.csv");
        document.body.appendChild(link);
        
        // Trigger download
        link.click();
        
        // Clean up
        document.body.removeChild(link);
        
        // Restore current schedule display
        if (scheduleState.currentRoom) {
          document.getElementById('schedule-body').innerHTML = scheduleState.getSchedule(scheduleState.currentRoom);
        }
      }
      
      // Add import from CSV function
      function importFromCSV(csvText) {
        try {
          // Parse CSV
          const rows = csvText.split('\n');
          const headers = rows[0].split(',').map(header => header.trim().toLowerCase());
          
          // Clear existing schedules
          scheduleState.rooms = {};
          
          // Process each row
          for (let i = 1; i < rows.length; i++) {
            if (rows[i].trim() === '') continue;
            
            const values = parseCSVRow(rows[i]);
            const rowData = {};
            
            // Map CSV columns to data object
            headers.forEach((header, index) => {
              rowData[header] = values[index];
            });
            
            // Ensure room exists
            const roomName = rowData.room;
            if (!scheduleState.rooms[roomName]) {
              scheduleState.addRoom(roomName);
            }
            
            // Create schedule for this room if it doesn't exist
            if (!scheduleState.getSchedule(roomName)) {
              // Set current room temporarily
              const currentRoom = scheduleState.currentRoom;
              scheduleState.setCurrentRoom(roomName);
              
              // Generate empty schedule
              generateTimeSlots();
              
              // Save generated schedule
              scheduleState.rooms[roomName].schedule = document.getElementById('schedule-body').innerHTML;
              
              // Restore previous room
              if (currentRoom) {
                scheduleState.setCurrentRoom(currentRoom);
                document.getElementById('schedule-body').innerHTML = scheduleState.getSchedule(currentRoom);
              }
            }
            
            // Add class to the schedule
            addClassFromImport(rowData);
          }
          
          // Refresh tabs
          refreshTabs();
          
          // Select first room
          const firstRoom = Object.keys(scheduleState.rooms)[0];
          if (firstRoom) {
            document.querySelector(`.schedule-nav-tab[data-room="${firstRoom}"]`).click();
          }
          
          alert('Schedule imported successfully!');
        } catch (error) {
          console.error('Error importing CSV:', error);
          alert('Error importing CSV. Please check the file format.');
        }
      }
      
      function parseCSVRow(row) {
        const values = [];
        let currentValue = '';
        let inQuotes = false;
        
        for (let i = 0; i < row.length; i++) {
          const char = row[i];
          
          if (char === '"') {
            inQuotes = !inQuotes;
          } else if (char === ',' && !inQuotes) {
            values.push(currentValue.trim());
            currentValue = '';
          } else {
            currentValue += char;
          }
        }
        
        // Add the last value
        values.push(currentValue.trim());
        
        return values;
      }
      
      function addClassFromImport(rowData) {
        // Extract data from CSV row
        const room = rowData.room;
        const day = rowData.day;
        const timeRange = rowData.time;
        const subject = rowData.subject;
        const subjectCode = rowData.subject_code || rowData['subject code'] || '';
        const section = rowData.section;
        const professor = rowData.professor;
        const maxStudents = rowData.max_students || rowData['max students'] || 40;
        
        // Parse time range
        const [startTime, endTime] = timeRange.split('-');
        
        // Create temporary container with the room's schedule
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = scheduleState.getSchedule(room);
        
        // Find the correct cell
        const cell = tempContainer.querySelector(`td[data-day="${day}"][data-time^="${startTime}"]`);
        if (!cell) return;
        
        // Create class data
        const classData = {
          subject,
          subjectCode,
          professor,
          professorTitle: '',
          section,
          maxStudents,
          color: '#a8e6a8',
          startTime,
          endTime,
          room
        };
        
        // Create class item
        const classItem = document.createElement('div');
        classItem.classList.add('subject-item');
        classItem.style.backgroundColor = classData.color;
        
        // Calculate height based on duration
        const startTimeObj = parseTime(startTime);
        const endTimeObj = parseTime(endTime);
        const durationInMinutes = (endTimeObj.hour * 60 + endTimeObj.minute) - (startTimeObj.hour * 60 + startTimeObj.minute);
        const rowsSpanned = durationInMinutes / 30;
        
        classItem.style.height = `${rowsSpanned * 100}%`;
        
        // Add class details
        classItem.innerHTML = `
          <div class="subject-name">${classData.subject}${classData.subjectCode ? ` (${classData.subjectCode})` : ''}</div>
          <div class="section">${classData.section}</div>
          <div class="max-students-input">Max: ${classData.maxStudents}</div>
          <div class="professor-info">${classData.professorTitle ? `${classData.professorTitle} ` : ''}${classData.professor}</div>
          <div>Room: ${classData.room}</div>
          <span class="delete-btn">×</span>
        `;
        
        // Add to cell
        cell.appendChild(classItem);
        
        // Update the schedule in the state
        scheduleState.rooms[room].schedule = tempContainer.innerHTML;
        
        // Update subjects and professors lists
        if (!subjects.find(s => s.name === subject)) {
          subjects.push({ name: subject, code: subjectCode });
        }
        
        if (!professors.find(p => p.name === professor)) {
          professors.push({ name: professor, title: '' });
        }
      }
      
      function refreshTabs() {
        const tabsContainer = document.getElementById('schedule-tabs');
        tabsContainer.innerHTML = '';
        
        Object.keys(scheduleState.rooms).forEach(roomName => {
          const tab = createTab(roomName);
          tab.dataset.room = roomName;
          tabsContainer.appendChild(tab);
        });
      }
      
      // Add import/export buttons
      const exportButton = document.createElement('button');
      exportButton.textContent = 'Export to CSV';
      exportButton.addEventListener('click', exportToCSV);
      document.querySelector('.controls').appendChild(exportButton);
      
      const importButton = document.createElement('button');
      importButton.textContent = 'Import from CSV';
      importButton.addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.csv';
        
        input.addEventListener('change', function() {
          const file = this.files[0];
          if (!file) return;
          
          const reader = new FileReader();
          reader.onload = function(e) {
            importFromCSV(e.target.result);
          };
          reader.readAsText(file);
        });
        
        input.click();
      });
      document.querySelector('.controls').appendChild(importButton);
    });


    const toggleButton = document.getElementById("menuToggle");
    const tripleMenu = document.getElementById("tripleMenu");
 
    toggleButton.addEventListener("click", () => {
        const isVisible = tripleMenu.style.display === "flex";
        tripleMenu.style.display = isVisible ? "none" : "flex";
    });
 
    // Optional: Hide menu when a section is clicked
    document.querySelectorAll(".menu-section").forEach(section => {
        section.addEventListener("click", () => {
            tripleMenu.style.display = "none";
        });
    });
  </script>
</body>
</html>
<div class="Table-Container">
    <table class="Main_Table">
        <thead>
            <tr>
                <th>Program Description</th>
                <th>Program ID</th>
                <th>Number of Students</th>
                <th>Academic Year</th>
            </tr>
        </thead>
        <tbody>
            <?php
                // Connect to MySQL database
                $conn = new mysqli("localhost", "", "", "Number_of_Students");

                // Check connection
                if ($conn->connect_error) {
                    die("Connection Failed: " . $conn->connect_error);
                }

                // Corrected SQL query (use backticks for column names with spaces)
                $sql = "SELECT `Program Description`, `Program ID`, `Number of Students`, `Academic Year` FROM `Student_Info_2024_2025`";
                $result = $conn->query($sql); // Assign the query result to $result

                // Check if query returned rows
                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        echo "<tr>
                                <td>" . $row["Program Description"] . "</td>
                                <td>" . $row["Program ID"] . "</td>
                                <td>" . $row["Number of Students"] . "</td>
                                <td>" . $row["Academic Year"] . "</td>
                              </tr>";
                    }
                } else {
                    echo "<tr><td colspan='4'>No results found</td></tr>";
                }

                // Close connection
                $conn->close();
            ?>
        </tbody>
    </table>
</div>

<?php
$mysqli = new mysqli("localhost", "root", "", "room_schedule_editable");

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

$query = "SELECT * FROM add_class WHERE room = 'Seminar'";
$result = $mysqli->query($query);

$schedules = [];
$dayMap = [
    'Mon' => 'Monday',
    'Tue' => 'Tuesday',
    'Wed' => 'Wednesday',
    'Thu' => 'Thursday',
    'Fri' => 'Friday',
    'Sat' => 'Saturday',
];

while ($row = $result->fetch_assoc()) {
    $days = array_map('trim', explode(',', $row['days']));
    foreach ($days as $dayAbbr) {
        // Map abbreviation to full day name
        $day = $dayMap[$dayAbbr] ?? $dayAbbr;

        $start = strtotime($row['start_time']);
        $end = strtotime($row['end_time']);
        for ($t = $start; $t < $end; $t += 900) { // 900 sec = 15 mins
            $timeKey = date('H:i', $t);
            $schedules[$timeKey][$day] = [
                'subject' => $row['subject'],
                'subjectCode' => $row['subjectCode'],
                'professor' => $row['professor'],
                'professorTitle' => $row['professorTitle'],
                'section' => $row['section'],
                'color' => $row['color'] ?: '#add8e6' // default light blue
            ];
        }
    }
}


$days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function generateTimeSlots($start, $end, $interval = 15) {
    $slots = [];
    $current = strtotime($start);
    $endTime = strtotime($end);
    while ($current <= $endTime) {
        $slots[] = date('H:i', $current);
        $current += $interval * 60;
    }
    return $slots;
}

$timeSlots = generateTimeSlots('07:00', '22:00');
?>

<!DOCTYPE html>
<html>
<head>
    <title>Seminar Room Schedule</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
            font-size: 12px;
        }
        th, td {
            border: 1px solid #aaa;
            text-align: center;
            padding: 4px;
            min-width: 100px;
        }
        th.time {
            width: 80px;
            background: #f0f0f0;
        }
    </style>
</head>
<body>
<h2>Schedule for Seminar Room</h2>
<table>
    <tr>
        <th class="time">Time</th>
        <?php foreach ($days as $day): ?>
            <th><?= $day ?></th>
        <?php endforeach; ?>
    </tr>
    <?php foreach ($timeSlots as $time): ?>
        <tr>
            <td class="time"><?= date('g:i A', strtotime($time)) ?></td>
            <?php foreach ($days as $day): ?>
                <?php if (isset($schedules[$time][$day])): 
                    $entry = $schedules[$time][$day]; ?>
                    <td style="background-color: <?= htmlspecialchars($entry['color']) ?>;">
                        <?= htmlspecialchars($entry['subject']) ?><br>
                        <?= htmlspecialchars($entry['subjectCode']) ?><br>
                        <?= htmlspecialchars($entry['professorTitle']) . ' ' . htmlspecialchars($entry['professor']) ?><br>
                        <?= htmlspecialchars($entry['section']) ?>
                    </td>
                <?php else: ?>
                    <td></td>
                <?php endif; ?>
            <?php endforeach; ?>
        </tr>
    <?php endforeach; ?>
</table>
</body>
</html>

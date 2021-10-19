<?php 

$conn = mysqli_connect('localhost', 'domundan_domundang', 'pzN7h#.p$CWb', 'domundan_undangah__db');


if(!$conn){
    echo 'Koneksi gagal woy!!'.die(mysqli_error($conn));
}


if(isset($_POST['name']) && isset($_POST['message'])){
    $name = htmlspecialchars($_POST['name']);
    $message = htmlspecialchars($_POST['message']);
    $query = "INSERT INTO tb__message (name, message) VALUES('$name', '$message')";

$result = mysqli_query($conn, $query);


if($result) {
    $rows = [];
    $html = '';

    $myresult = mysqli_query($conn, 'SELECT * FROM tb__message');
    while($row = mysqli_fetch_assoc($myresult)){
        $rows[] = $row;
    }

    // reverse array to first position 
    $rows = array_reverse($rows);

    foreach($rows as $row) {
        $replaceToString = explode(' ', $row['time'])[0]; // 2021-10-13
    $replaceToString = explode('-', $replaceToString); // [2021, 10, 13]
    $years = (int)$replaceToString[0]; // 2021
    $month = (int)$replaceToString[1]; // 10
    $days = (int)$replaceToString[2]; // 13

    $mk_time = mktime(0,0,0, $month, $days, $years); // 2021-Oct-13
    $time = date('Y-M-d', $mk_time);

    $replaceToString = explode('-', $time); // [2021, Oct, 13]
    switch(strtolower($replaceToString[1])) {
        case 'jan':
            $replaceToString[1] = 'Januari';
            break;
        case 'feb':
            $replaceToString[1] = 'Februari';
            break;
            case 'mar':
            $replaceToString[1] = 'Maret';
            break;
        case 'apr':
            $replaceToString[1] = 'April';
            break;
        case 'may':
            $replaceToString[1] = 'Mei';
            break;
        case 'jun':
            $replaceToString[1] = 'Jun';
            break;
        case 'jul':
            $replaceToString[1] = 'Juli';
            break;
        case 'aug':
            $replaceToString[1] = 'Agustus';
            break;
        case 'sep':
            $replaceToString[1] = 'September';
            break;
        case 'oct':
            $replaceToString[1] = 'Oktober';
            break;
        case 'nov':
            $replaceToString[1] = 'November';
            break;
        case 'des':
            $replaceToString[1] = 'Desember';
            break;
        default:
            $replaceToString[1] = $replaceToString[1];

    }
    $replaceToString = array_reverse($replaceToString);
    $result = join(' ', $replaceToString); // 2021 Oct 13


        $html .= '<div class="guest-book__result__media"><div class="guest-book__result__img"><img class="guest-book__result__img__el" src="assets/img/dummy/user.png" alt="User" /></div><div class="guest-book__result__comment"><span>'.$result.'</span><h6>'.$row['name'].'</h6><p>'.$row['message']   .'</p></div></div>';
    }

    echo $html;

}   else {
        echo 'Data Gagal ditambahkan!!';
    }
}


?>
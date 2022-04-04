<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login</title>
    <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

</script>
</head>


<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
    body{
        font-family: 'Kanit', sans-serif;
    }
</style>
<body>
   <p align=center>
    <img src="./img/login.png" width="100" height="100">
<div id="not-login">
<from class="container">
  <h2 align=center>ล็อกอินเข้าสู่ระบบ</h2>
  <table align=center border="0" cellspacing="0" cellpadding="5" style="width: 300px">
    <tbody>
      <tr>
      <!-- <form action="./do_login.php"  method="post" autocomplete="off">  -->
                <form onsubmit="login(event)"> 

        <td> E-mail</td>
        <td>
                <input name="email" type="text" id="email" >
        </td>
      </tr>
      <tr>
        <td> รหัสผ่าน</td>
        <td>
                <input name="password" type="text" id="password">
        </td>
      </tr>
      <tr>
        <td> </td>
        <td>  
                <input type="submit" name="btnSubmit" value="เข้าสู่ระบบ">
        </td>
      </tr>
      <tr>
        <td> </td>
        <td>  
                <input type="submit" name="btnSubmit" value="สมัครสมาชิก">
        </td>
    </form>  </tr>
    </tbody>
  </table>
  </from> 
</div>

<div id="login">
<h3>Admin login!!!</h3>
<button onclick="logout()"></button>
</div>

 
    </p> 





   
<script type="text/javascript" src="./js/app.js"></script>
</body>
</html>
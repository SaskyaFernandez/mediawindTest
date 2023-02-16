users = []

$.ajax(" https://modules.greenplayer.com/webservices/sandbox/users.php", {
        headers: {
            "APIKEY": "ed54re8b4e186gv41ez86g4rz816b41r8bgqr41gb8"
        }
    })
    .done(function (response) {
        response.json
    })
    .done(function (responseUser) {


        $.ajax(" https://modules.greenplayer.com/webservices/sandbox/informations.php", {
                headers: {
                    "APIKEY": "ed54re8b4e186gv41ez86g4rz816b41r8bgqr41gb8"
                }
            })
            .done(function (response) {
                response.json
            })
            .done(function (responseinfo) {

                for (let i = 0; i < responseUser.length; i++) {
                    for (let j = 0; j < responseinfo.length; j++) {
                        if (responseUser[i].id == responseinfo[j].id) {
                            user = {
                                picture: responseinfo[j].picture,
                                id: responseUser[i].id,
                                firstname: responseUser[i].firstname,
                                lastname: responseUser[i].lastname,
                                job: responseinfo[j].job,
                                phone: responseinfo[j].phone,
                                email: responseinfo[j].email
                            }
                            users.push(user)
                        }
                    }
                }
                let htmlContent = "";
                for (let i = 0; i < users.length; i++) {
                    htmlContent += "<div class='col-5 d-flex'>";
                    htmlContent += "<div class='userPicture'>";
                    htmlContent += "<img src='" + users[i].picture + "'></img>";
                    htmlContent += "</div>";
                    htmlContent += "<div class='userInfo' >";
                    htmlContent += "<h4>" + users[i].firstname + " " + users[i].lastname + "</h4>";
                    htmlContent += "<p>Job : " + users[i].job + "</p>";
                    htmlContent += "<p>Phone : " + users[i].phone + "</p>";
                    htmlContent += "<p>Email : " + users[i].email + "</p>";
                    htmlContent += "<p>ID : " + users[i].id + "</p>";
                    htmlContent += "</div>";
                    htmlContent += "</div>";

                }
                $(".row").append(htmlContent)

            })
    })

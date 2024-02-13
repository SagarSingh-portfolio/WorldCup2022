
    //function heaImg (n) {
    let slideNo = 1;

    showingSlide (slideNo);
    
    function heaImg(n) {
        showingSlide (slideNo = n);
    }
    
    // changes image display depending on user input
    function showingSlide(n) {
        let i;
        let headerImages = document.getElementsByClassName("headerimages");
        let headerImgNo = document.getElementsByClassName("headerimgno");
        
        if (n > headerImages.length){
            slideNo = 1
        }
    
        if ( n < 1) {
            slideNo = headerImages.length
        }
    
        for ( i=0; i < headerImages.length; i++) {
            headerImages[i].style.display = "none";
    
        }
    
        for ( i=0; i < headerImgNo.length; i++) {
            headerImgNo[i].className = headerImgNo[i].className.replace(" activebtn", "");
        }
    
        headerImages[slideNo-1].style.display = "block";
    
        headerImgNo[slideNo-1].className += " activebtn";
    }
    
    // Drop down list toggle from button
    function drop() {
        let i = document.getElementById("countryButton").value;

        if (i=="OFF") {
            document.getElementById("countryButton").value="ON";
            document.getElementById("countryButton").style.borderRadius="1.5em 1.5em 0em 0em";
            document.querySelector(".dropList").style.height="calc(20px + 6vw)";
            document.querySelector(".dropList").style.transitionDelay="0.3s";
            document.getElementById("countryButton").style.transitionDelay="0s";
            document.getElementById("countryButton").style.transitionProperty="border-radius";
        }
        else {
            document.getElementById("countryButton").value="OFF";
            document.getElementById("countryButton").style.borderRadius="5em";
            document.querySelector(".dropList").style.height="0vw";
            document.querySelector(".dropList").style.transitionDelay="0s";
            document.getElementById("countryButton").style.transitionDelay="0.45s";
            document.getElementById("countryButton").style.transitionProperty="border-radius";
        }
       
    }

    // Changes country in display
    function country(n) {        
        const countrySrc = [
            "../Images/flags/010-argentina.png",
            "../Images/flags/016-australia.png",
            "../Images/flags/021-belgium.png",
            "../Images/flags/025-brazil.png",
            "../Images/flags/026-cameroon.png",
            "../Images/flags/022-canada.png",
            "../Images/flags/020-costa-rica.png",
            "../Images/flags/014-denmark.png",
            "../Images/flags/007-ecuador.png",
            "../Images/flags/008-england.png",
            "../Images/flags/013-France.png",
            "../Images/flags/018-germany.png",
            "../Images/flags/030-ghana.png",
            "../Images/flags/003-iran.png",
            "../Images/flags/019-japan.png",
            "../Images/flags/011-mexico.png",
            "../Images/flags/023-morocco.png",
            "../Images/flags/024-croatia.png",
            "../Images/flags/004-netherlands.png", 
            "../Images/flags/012-poland.png",
            "../Images/flags/029-portugal.png",
            "../Images/flags/006-qatar.png",
            "../Images/flags/032-south-korea.png",
            "../Images/flags/001-saudi-arabia.png",
            "../Images/flags/005-senegal.png",
            "../Images/flags/027-serbia.png",
            "../Images/flags/017-spain.png",
            "../Images/flags/028-switzerland.png",
            "../Images/flags/015-tunisia.png",
            "../Images/flags/031-uruguay.png",
            "../Images/flags/009-united-states-of-america.png",
            "../Images/flags/002-wales.png",];

        const countryName = ["Argentina", "Australia", "Belgium", "Brazil", "Cameroon", "Canada", "Costa Rica", "Denmark", "Ecuador", "England", "France", "Germany", "Ghana", "Iran", "Japan", "Mexico", "Morocco", "Croatia", "Netherlands", "Poland", "Portugal", "Qatar", "Republic of Korea", "Saudi Arabia", "Senegal", "Serbia", "Spain", "Switzerland", "Tunisia", "Uruguay", "USA", "Wales"];
        
        const countryForm = ["../Images/formarg.png", "../Images/formaus.png", "../Images/formbel.png", "../Images/formbra.png", "../Images/formcam.png", "../Images/formcan.png", "../Images/formcos.png", "../Images/formden.png", "../Images/formecu.png", "../Images/formeng.png", "../Images/formfrance.png", "../Images/formger.png", "../Images/formgha.png", "../Images/formira.png", "../Images/formjap.png", "../Images/formmex.png", "../Images/formmor.png", "../Images/formcro.png", "../Images/formnet.png", "../Images/formpol.png", "../Images/formpor.png", "../Images/formqat.png", "../Images/formrep.png", "../Images/formsau.png", "../Images/formsen.png", "../Images/formser.png", "../Images/formspa.png", "../Images/formswi.png", "../Images/formtun.png", "../Images/formuru.png", "../Images/formusa.png", "../Images/formwal.png"];
       
        const countryManager = [" Lionel Scaloni", " Graham Arnold", " Roberto Martinez", " Tite", " Rigobert Song", " John Herdman", " Luis Frenandez Suarez", " Kasper Hjulmand", " Gustavo Alfaro", " Gareth Southgate", " Didier Claude Deschamps", " Hansi Flick", " Otto Addo", " Queiroz", " Hajime Moriyasu", " Gerardo Martino", " Walid Regragui", " Zlatko Dalic", " Louis van Gaal", " Czeslaw Michniewicz", " Fernando Santos", " Felix Sanchez Bas"," Paulo Bento",  " Herve Renard", " Aliou Cisse", " Dragan Stojkovic", " Luis Enrique", " Murat Yakin", " Jalel Kadri", " Diego Alonso", " Gregg Barhalter", " Robert Page"];

        const countryList = ["../Images/listarg.png", "../Images/listaus.png", "../Images/listbel.png", "../Images/listbra.png", "../Images/listcam.png", "../Images/listcan.png", "../Images/listcos.png", "../Images/listden.png", "../Images/listecu.png", "../Images/listeng.png", "../Images/listfra.png", "../Images/listger.png", "../Images/listgha.png", "../Images/listira.png", "../Images/listjap.png", "../Images/listmex.png", "../Images/listmor.png", "../Images/listcro.png", "../Images/listnet.png", "../Images/listpol.png", "../Images/listpor.png", "../Images/listqat.png", "../Images/listrep.png", "../Images/listsau.png", "../Images/listsen.png", "../Images/listser.png", "../Images/listspa.png", "../Images/listswi.png", "../Images/listtun.png", "../Images/listuru.png", "../Images/listusa.png", "../Images/listwal.png"];

        document.getElementById("selectImg").src=countrySrc[n];
        document.getElementById("selectName").innerText=countryName[n];
        document.getElementById("teamName").innerText=countryName[n];
        document.getElementById("teamForm").src=countryForm[n];
        document.getElementById("tableCountry").innerText=countryName[n];
        document.getElementById("manager").innerText=countryManager[n];
        document.getElementById("teamList").src=countryList[n];
        
        document.getElementById("bgName1").innerText=countryName[n];
        document.getElementById("bgName2").innerText=countryName[n];
        document.getElementById("bgName3").innerText=countryName[n];
        document.getElementById("bgName11").innerText=countryName[n];
        document.getElementById("bgName22").innerText=countryName[n];
        document.getElementById("bgName33").innerText=countryName[n];

        let win = Math.floor(Math.random() * 4);
        let draw = Math.floor(Math.random()* 3);
        let loss = 3;
        loss = loss - win - draw;
        let GP = 3;
        let for1 = Math.floor(Math.random() * 5);
        let against = loss + Math.floor(Math.random() * 3);
        let diff = 0;
        diff = for1 - against;

        document.getElementById("win").innerText=win;
        document.getElementById("draw").innerText=draw;
        document.getElementById("loss").innerText=loss;
        document.getElementById("GP").innerText=GP;
        document.getElementById("for").innerText=for1;
        document.getElementById("against").innerText=against;
        document.getElementById("diff").innerText=diff;
    }
    
    // moves background country name onscroll faster than actual scroll
    function moveY() {
        let y = document.documentElement.scrollTop;
        let x = y*-0.3
        document.getElementById("bgCountry").style.transform=`translateY(${x}px)`;

        /*console.log(y);*/
    }

    //.selectedcountry box animation
    function flagMove() {
        document.getElementById("selectImg").style.animationName="flagMove";
        document.getElementById("selectName").style.animationName="flagMove";
        document.getElementById("teamData").style.animationName="contentMove";
    }

    function flagReset() {
        setTimeout(()=>{flagReset1()}, 1400)    
    }

    function flagReset1() {
        document.getElementById("selectImg").style.animationName="flagMove1";
        document.getElementById("selectName").style.animationName="flagMove1";
        document.getElementById("teamData").style.animationName="contentMove1";
    }


    //Button show different rounds and knockouts
    function showR1() {
        document.querySelectorAll(".r1").forEach(a=>a.style.display = "flex");
        document.querySelectorAll(".r2").forEach(a=>a.style.display = "none");
        document.querySelectorAll(".r3").forEach(a=>a.style.display = "none");
        document.querySelectorAll(".knockout").forEach(a=>a.style.display = "none");
    }

    function showR2() {
        document.querySelectorAll(".r1").forEach(a=>a.style.display = "none");
        document.querySelectorAll(".r2").forEach(a=>a.style.display = "flex");
        document.querySelectorAll(".r3").forEach(a=>a.style.display = "none");
        document.querySelectorAll(".knockout").forEach(a=>a.style.display = "none");
    }

    function showR3() {
        document.querySelectorAll(".r1").forEach(a=>a.style.display = "none");
        document.querySelectorAll(".r2").forEach(a=>a.style.display = "none");
        document.querySelectorAll(".r3").forEach(a=>a.style.display = "flex");
        document.querySelectorAll(".knockout").forEach(a=>a.style.display = "none");
    }

    function showK() {
        document.querySelectorAll(".r1").forEach(a=>a.style.display = "none");
        document.querySelectorAll(".r2").forEach(a=>a.style.display = "none");
        document.querySelectorAll(".r3").forEach(a=>a.style.display = "none");
        document.querySelectorAll(".knockout").forEach(a=>a.style.display = "flex");
    }

    // change background color of contact form
    function color() {
        const color = ["red", "blue", "gold", "green", "purple", "yellow"];

        let x = Math.floor(Math.random()*6);

        document.getElementById("form1").style.backgroundColor=color[x];
    }

    // contact form validation
    function validateForm() {
        // validation for blank space
        let x = document.forms["form"]["name"].value;
        let y = document.forms["form"]["email"].value;
        if (x == "" || y =="" ) {
          alert("Name and email must be filled out");
          document.getElementById("submit").style.backgroundColor="red";
          return false;
        }else {
            document.getElementById("submit").style.backgroundColor="green";
        }

    }

    function chec() {
        // validation for character length
        let z = document.forms["form"]["questions"].value;
        let size = z.length;
        let text;
        if (size>250) {
            text = "input cannot be longer than 250 characters";
        } else {
            text = ":D"
        }
        document.getElementById("len").innerHTML = text;
    }

    function red() {
        // validates that the input is not England
        document.getElementById("c51").style.color = "red";
        document.getElementById("c5").checked = false;
        document.getElementById("eng").innerHTML = "WRONG";
    }
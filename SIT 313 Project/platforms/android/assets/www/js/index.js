//a listener to load a new page, and different load function will load different page, i will write the page inside the listener
document.addEventListener('init', function (event) {
    //catch error from pushEventPage
    try {
        if (event.target.id === 'eventPage') {
            /* original html
             <ons-list>
             <ons-list-header>Event Name</ons-list-header>
             <ons-list-item>
             <div class="list-item__left" style="width: 130px">
             <img src="image/calendar.png" style="width: 60px;height: 60px;align-self: auto">
             </div>
             <div class="center">
             <div class="header" style="padding: 5px;text-align: center;margin-left: 29px">
             <span>
             <b>
             8:00 7/7/2017
             </b>
             <b>
             Go to final exam
             </b>
             </span>
             </div>
             <div style="text-align: center;margin-left: 29px;padding: 5px">
             It is a very import day! Do not miss!
             </div>
             <ons-row class="left" style="text-align: center;padding:5px;width: 260px;height: 50px">
             <ons-col>
             <ons-button style="background-color: #FFFFFF;border-color: black">
             <ons-icon icon="ion-android-star" style="color: black" size="25px"></ons-icon>
             </ons-button>
             </ons-col>
             <ons-col>
             <ons-button style="background-color: #FFFFFF">
             <ons-icon icon="ion-android-alarm-clock" style="color: black" size="25px"></ons-icon>
             </ons-button>
             </ons-col>
             <ons-col>
             <ons-button style="background-color: #FFFFFF">
             <ons-icon icon="ion-android-notifications" style="color: black" size="25px"></ons-icon>
             </ons-button>
             </ons-col>
             </ons-row>
             </div>
             </ons-list-item>
             </ons-list>

             * */
            /* this is the nav bar */

            var idItem = event.target.data.idItem;
            var loadResult = ConnectNet.load("event"+idItem+"");

            var page=(ons._util.createElement('<ons-toolbar></ons-toolbar>'));
            page.appendChild(ons._util.createElement('<div class="left"><ons-back-button onclick="reload()">Back</ons-back-button></div>'));
            // console.log($("#eventPage").length);
            $("#eventPage .page__content").html(page);

            if(loadResult.isRing == 1){
                var password = ons._util.createElement('<p style="margin-top: 20px"><ons-input id="password2" style="width:250px"modifier="underbar" type="password" placeholder="Enter psw to view" float></ons-input><ons-button style="margin-top: 40px;margin-left: 5px;line-height: 28px" onclick="unlock('+idItem+')">OK</ons-button></p>');
                $("#eventPage .page__content").append(password);
                return;
            }
            /* this is the detail list */
            var list=ons._util.createElement('<ons-list style="margin-top:44px"></ons-list>');
            list.appendChild(ons._util.createElement('<ons-list-header>'+loadResult.name+'</ons-list-header>'));
            var item=ons._util.createElement('<ons-list-item></ons-list-item>');
            list.appendChild(item);
            var photoDiv=ons._util.createElement('<div class="left" style="width: 130px"></div>');
            item.appendChild(photoDiv);
            photoDiv.appendChild(ons._util.createElement('<img src="image/calendar.png" style="width: 60px;height: 60px;align-self: auto">'));
            var mainDiv=ons._util.createElement('<div class="center"></div>');
            item.appendChild(mainDiv);
            var timeDiv=ons._util.createElement('<div class="left" style="padding: 5px;text-align: left"></div>');
            mainDiv.appendChild(timeDiv);
            var idSection = event.target.data.idSection;

            timeDiv.appendChild(ons._util.createElement('<span><b>'+loadResult.day+'/'+loadResult.month+'/2017 </b></br><b>'+loadResult.name+'</b></span>'));
            mainDiv.appendChild(ons._util.createElement('<div style="text-align: left;padding: 5px;width:280px">'+loadResult.detail+'</div>'));

            var row=ons._util.createElement('<ons-row class="left" style="text-align: left;padding:5px;width: 260px;height: 50px"></ons-row>');
            mainDiv.appendChild(row);
            //button 1
            var col1=ons._util.createElement('<ons-col></ons-col>');
            row.appendChild(col1);
            var button1=ons._util.createElement('<ons-button style="background-color: #FFFFFF;border-color: black" onclick="starEvent('+idItem+')"></ons-button>');
            col1.appendChild(button1);
            button1.appendChild(ons._util.createElement('<ons-icon icon="ion-android-star" style="color: black" size="25px"></ons-icon>'));

            //button 2
            var col2=ons._util.createElement('<ons-col></ons-col>');
            row.appendChild(col2);
            var button2=ons._util.createElement('<ons-button style="background-color: #FFFFFF;border-color: black" onclick="alarmEvent('+idItem+')"></ons-button>');
            col2.appendChild(button2);
            button2.appendChild(ons._util.createElement('<ons-icon icon="ion-android-alarm-clock" style="color: black" size="25px"></ons-icon>'));

            //button 3
            var col3=ons._util.createElement('<ons-col></ons-col>');
            row.appendChild(col3);
            var button3=ons._util.createElement('<ons-button style="background-color: #FFFFFF;border-color: black" onclick="ringEvent('+idItem+')"></ons-button>');
            col3.appendChild(button3);
            button3.appendChild(ons._util.createElement('<ons-icon icon="ion-locked" style="color: black" size="25px"></ons-icon>'));

            var deleteButtonDiv = (ons._util.createElement('<div class="block" style="height: 0%;padding:10px"></div>'));
            // submitButton.appendChild(okButtonDiv);
            deleteButtonDiv.appendChild(ons._util.createElement('<ons-button style="width:230px;background-color:red" onclick="deleteControl(2,'+idItem+')">Delete</ons-button>'));


            $("#eventPage .page__content").append(list);

            $("#eventPage .page__content").append(deleteButtonDiv);
        }
    }catch (err){
        errorArray.push(err);
    }

    //catch error from pushLoginPage
    try {
        if (event.target.id === 'loginPage') {
            var outDiv=ons._util.createElement('<div class="block"></div>');
            var p1=ons._util.createElement('<p></p>');
            outDiv.appendChild(p1);
            // p1.appendChild(ons._util.createElement('<div class="center"><ons-icon size="50px" style="color:#62b0ff" icon="ion-android-happy" class="list-item__icon"></ons-icon></div>'));
            p1.appendChild(ons._util.createElement('<div class="center"><ons-icon icon="ion-ios-calendar-outline" style="color:#00ade5" size="70px"></ons-icon></div>'));
            p1.appendChild(ons._util.createElement('<div class="center"><ons-input id="username" style="width:250px" modifier="underbar" maxlenth="30" placeholder="Username" float></ons-input></div>'));
            outDiv.appendChild(ons._util.createElement('<p><ons-input id="password" style="width:250px"modifier="underbar" type="password" placeholder="Password" float></ons-input></p>'));
            outDiv.appendChild(ons._util.createElement('<p class="center" style="margin-top: 20px"><ons-button style="width:280px" onclick="login()">Sign in</ons-button></p>'));
            outDiv.appendChild(ons._util.createElement('<p><ons-button modifier="quiet">Forget password?</ons-button><ons-button modifier="quiet" style="margin-top: 1px">Register</ons-button></p>'));
            $("#loginPage .page__content").append(outDiv);
        }
    }catch (err){
        errorArray.push(err);
    }

    //catch error from pushNewEvent
    try {
        if (event.target.id === 'newEvent') {
            /* original html code
             * <ons-list>
             <ons-list-header>Event input</ons-list-header>
             <ons-list-item class="input-items">
             <div class="left">
             <ons-icon icon="ion-android-create" class="list-item__icon"></ons-icon>
             </div>
             <label class="center">
             <ons-input id="name-input" float maxlength="30" placeholder="Event"></ons-input>
             </label>
             </ons-list-item>
             <ons-list-item>
             <label class="left">Select the month</label>
             <ons-select id="choose-sel" onchange="editSelects(event)">
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
             </ons-select>
             </ons-list-item>
             <ons-list-item>
             <label class="left">Select the day</label>
             <ons-select id="choose-sel" onchange="editSelects(event)">
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             </ons-select>
             </ons-list-item>
             </ons-list>
             <div style="text-align: center;padding: 8px;">
             <ons-button style="width:230px" onclick="clickText()">Create</ons-button>
             </div>
             */
            var outDiv=ons._util.createElement('<div></div>');
            var page=(ons._util.createElement('<ons-toolbar></ons-toolbar>'));
            outDiv.appendChild(page);
            page.appendChild(ons._util.createElement('<div class="center">New Event</div>'));
            page.appendChild(ons._util.createElement('<div class="left"><ons-back-button>Back</ons-back-button></div>'));

            var list=ons._util.createElement('<ons-list style="margin-top:44px"></ons-list>');
            outDiv.appendChild(list);
            var listHeader=ons._util.createElement('<ons-list-header>Event input</ons-list-header>');
            list.appendChild(listHeader);
            var eventName=ons._util.createElement('<ons-list-item class="input-items"></ons-list-item>');
            list.appendChild(eventName);
            eventName.appendChild(ons._util.createElement('<div class="left"><ons-icon icon="ion-android-create" class="list-item__icon"></ons-icon></div>'));
            eventName.appendChild(ons._util.createElement('<label class="center"><ons-input id="eventName" float maxlength="30" placeholder="Event Name (NOT NULL)"></ons-input></label>'));

            var eventDate=ons._util.createElement('<ons-list-item class="input-items"></ons-list-item>');
            list.appendChild(eventDate);
            eventDate.appendChild(ons._util.createElement('<div class="left"><ons-icon icon="ion-android-create" class="list-item__icon"></ons-icon></div>'));
            eventDate.appendChild(ons._util.createElement('<label class="center"><ons-input id="eventDetail" float maxlength="50" placeholder="Event Detail (NOT NULL)"></ons-input></label>'));

            list.appendChild(ons._util.createElement('<ons-list-header>Date select</ons-list-header>'));

            var eventMonth=ons._util.createElement('<ons-list-item></ons-list-item>');
            list.appendChild(eventMonth);
            eventMonth.appendChild(ons._util.createElement('<label class="left">Select the month</label>'));
            var monthSelectBox=ons._util.createElement('<ons-select id="monthSelect" onchange="editSelects1(event)"></ons-select>');
            eventMonth.appendChild(monthSelectBox);
            for(i1=1;i1<13;i1++){
                if(i1<10){
                    monthSelectBox.appendChild(ons._util.createElement('<option value=0'+i1+'>0'+i1+'</option>'));
                }else{
                    monthSelectBox.appendChild(ons._util.createElement('<option value="'+i1+'">'+i1+'</option>'));
                }
            }

            var eventDay=ons._util.createElement('<ons-list-item></ons-list-item>');
            list.appendChild(eventDay);
            eventDay.appendChild(ons._util.createElement('<label class="left">Select the day</label>'));
            var daySelectBox=ons._util.createElement('<ons-select id="daySelect" onchange="editSelects2(event)"></ons-select>');
            eventDay.appendChild(daySelectBox);
            for(i2=1;i2<32;i2++){
                if(i2<10){
                    daySelectBox.appendChild(ons._util.createElement('<option value=0'+i2+'>'+i2+'</option>'));
                }else{
                    daySelectBox.appendChild(ons._util.createElement('<option value="'+i2+'">'+i2+'</option>'));
                }
            }

            var okButton=ons._util.createElement('<div style="text-align: center;padding: 8px;"><ons-button style="width:230px" onclick="dialogControl(2)">Create</ons-button></div>');
            outDiv.appendChild(okButton);
            $("#newEvent .page__content").append(outDiv);
        }
    }catch (err){
        errorArray.push(err);
    }

    try{
        if(event.target.id === 'aEvent'){

            var event2 = {
                createNew:function (id,month,day,name,Alarm,Star,Ring,detail) {
                    var event = {};
                    event.id = id;
                    event.month = Number(month);
                    event.day = Number(day);
                    event.name = name;
                    event.isAlarm = Alarm;
                    event.isRing = Ring;
                    event.isStar = Star;
                    event.detail = detail;
                    return event;
                }
            };

            var dateValue = event.target.data.dateValue;
            var date = dateValue.split("/");
            if(date.length == 3){
                var loadUser = ConnectNet.load("userdata");
                var idCount = Number(loadUser.eventCount);
                var array = new Array();
                for(var i=1;i<idCount+1;i++){
                    var tempEvent = ConnectNet.load("event"+i+"");
                    if(tempEvent != null){
                        var temp = event2.createNew(i,tempEvent.month,tempEvent.day,tempEvent.name,tempEvent.isAlarm,tempEvent.isStar,tempEvent.isRing,tempEvent.detail);

                        if(temp.day == date[1] && temp.month == date[0]){
                            array.push(temp);
                        }
                    }
                }
            }


            var idItem = 1;
            var loadResult = ConnectNet.load("event"+idItem+"");

            var page=(ons._util.createElement('<ons-toolbar></ons-toolbar>'));
            page.appendChild(ons._util.createElement('<div class="left"><ons-back-button>Back</ons-back-button></div>'));
            // console.log($("#eventPage").length);
            $("#aevent .page__content").append(page);

            if(array.length>0){
                var list=ons._util.createElement('<ons-list style="margin-top:44px"></ons-list>');
                list.appendChild(ons._util.createElement('<ons-list-header>Search Result</ons-list-header>'));

                for(var j=0;j<array.length;j++){
                    /* this is the detail list */
                    var item=ons._util.createElement('<ons-list-item></ons-list-item>');
                    list.appendChild(item);
                    var photoDiv=ons._util.createElement('<div class="left" style="width: 130px"></div>');
                    item.appendChild(photoDiv);
                    photoDiv.appendChild(ons._util.createElement('<img src="image/calendar.png" style="width: 60px;height: 60px;align-self: auto">'));
                    var mainDiv=ons._util.createElement('<div class="center"></div>');
                    item.appendChild(mainDiv);
                    var timeDiv=ons._util.createElement('<div class="left" style="padding: 5px;text-align: left"></div>');
                    mainDiv.appendChild(timeDiv);

                    timeDiv.appendChild(ons._util.createElement('<span><b>'+array[j].day+'/'+array[j].month+'/2017 </b></br><b>'+array[j].name+'</b></span>'));
                    mainDiv.appendChild(ons._util.createElement('<div style="text-align: left;padding: 5px;width:280px">'+array[j].detail+'</div>'));

                    var row=ons._util.createElement('<ons-row class="left" style="text-align: left;padding:5px;width: 260px;height: 50px"></ons-row>');
                    mainDiv.appendChild(row);
                    //button 1
                    var col1=ons._util.createElement('<ons-col></ons-col>');
                    row.appendChild(col1);
                    var button1=ons._util.createElement('<ons-button style="background-color: #FFFFFF;border-color: black")"></ons-button>');
                    col1.appendChild(button1);
                    button1.appendChild(ons._util.createElement('<ons-icon icon="ion-android-star" style="color: black" size="25px"></ons-icon>'));

                    //button 2
                    var col2=ons._util.createElement('<ons-col></ons-col>');
                    row.appendChild(col2);
                    var button2=ons._util.createElement('<ons-button style="background-color: #FFFFFF;border-color: black"></ons-button>');
                    col2.appendChild(button2);
                    button2.appendChild(ons._util.createElement('<ons-icon icon="ion-android-alarm-clock" style="color: black" size="25px"></ons-icon>'));

                    //button 3
                    var col3=ons._util.createElement('<ons-col></ons-col>');
                    row.appendChild(col3);
                    var button3=ons._util.createElement('<ons-button style="background-color: #FFFFFF;border-color: black"></ons-button>');
                    col3.appendChild(button3);
                    button3.appendChild(ons._util.createElement('<ons-icon icon="ion-android-notifications" style="color: black" size="25px"></ons-icon>'));

                }
                $("#aEvent .page__content").append(list);
            }
            else{
                var list=ons._util.createElement('<ons-list style="margin-top:44px"></ons-list>');
                list.appendChild(ons._util.createElement('<ons-list-header>Search Result</ons-list-header>'));
                list.appendChild(ons._util.createElement('<p>Can not find anything</p>'))
                $("#aEvent .page__content").append(list);
            }

        }
    }catch (err){
        errorArray.push(err)
    }

    //catch error from pushError
    try {
        if (event.target.id === 'errorPage'){
            var outDiv=ons._util.createElement('<div></div>');
            var page=(ons._util.createElement('<ons-toolbar></ons-toolbar>'));
            outDiv.appendChild(page);
            page.appendChild(ons._util.createElement('<div class="center">Exception</div>'));
            page.appendChild(ons._util.createElement('<div class="left"><ons-back-button>Back</ons-back-button></div>'));
            console.log(errorArray.length);
            var errorDiv=ons._util.createElement('<div style="margin-top: 49px;margin-left: 8px"></div>');
            outDiv.appendChild(errorDiv);
            for(i=0;i<errorArray.length+1;i++){
                if(errorArray.length===0){
                    errorDiv.appendChild(ons._util.createElement('<p>No errors, prefect!</p>'));
                }else{
                    errorDiv.appendChild(ons._util.createElement('<p>'+errorArray[i]+'</p>'));
                }
            }
            $("#errorPage .page__content").append(outDiv);
        }
    }catch (err){
        errorArray.push(err);
    }
});

// log in
function login() {
    var password = $("#password").val();
    var username = $("#username").val();
    if(username == "jason" && password == "123abc234"){
        ons.notification.alert('Hi,Jason');
        homeNavigator.popPage();
    }else{
        ons.notification.alert('Wrong password or username!');
    }
}

function unlock(id) {
    if($("#password2").val() == "123abc234"){
        var idItem = id;
        var loadResult = ConnectNet.load("event"+idItem+"");

        var page=(ons._util.createElement('<ons-toolbar></ons-toolbar>'));
        page.appendChild(ons._util.createElement('<div class="left"><ons-back-button onclick="reload()">Back</ons-back-button></div>'));
        // console.log($("#eventPage").length);
        $("#eventPage .page__content").html(page);
        var list=ons._util.createElement('<ons-list style="margin-top:44px"></ons-list>');
        list.appendChild(ons._util.createElement('<ons-list-header>'+loadResult.name+'</ons-list-header>'));
        var item=ons._util.createElement('<ons-list-item></ons-list-item>');
        list.appendChild(item);
        var photoDiv=ons._util.createElement('<div class="left" style="width: 130px"></div>');
        item.appendChild(photoDiv);
        photoDiv.appendChild(ons._util.createElement('<img src="image/calendar.png" style="width: 60px;height: 60px;align-self: auto">'));
        var mainDiv=ons._util.createElement('<div class="center"></div>');
        item.appendChild(mainDiv);
        var timeDiv=ons._util.createElement('<div class="left" style="padding: 5px;text-align: left"></div>');
        mainDiv.appendChild(timeDiv);

        timeDiv.appendChild(ons._util.createElement('<span><b>'+loadResult.day+'/'+loadResult.month+'/2017 </b></br><b>'+loadResult.name+'</b></span>'));
        mainDiv.appendChild(ons._util.createElement('<div style="text-align: left;padding: 5px;width:280px">'+loadResult.detail+'</div>'));

        var row=ons._util.createElement('<ons-row class="left" style="text-align: left;padding:5px;width: 260px;height: 50px"></ons-row>');
        mainDiv.appendChild(row);
        //button 1
        var col1=ons._util.createElement('<ons-col></ons-col>');
        row.appendChild(col1);
        var button1=ons._util.createElement('<ons-button style="background-color: #FFFFFF;border-color: black" onclick="starEvent('+idItem+')"></ons-button>');
        col1.appendChild(button1);
        button1.appendChild(ons._util.createElement('<ons-icon icon="ion-android-star" style="color: black" size="25px"></ons-icon>'));

        //button 2
        var col2=ons._util.createElement('<ons-col></ons-col>');
        row.appendChild(col2);
        var button2=ons._util.createElement('<ons-button style="background-color: #FFFFFF;border-color: black" onclick="alarmEvent('+idItem+')"></ons-button>');
        col2.appendChild(button2);
        button2.appendChild(ons._util.createElement('<ons-icon icon="ion-android-alarm-clock" style="color: black" size="25px"></ons-icon>'));

        //button 3
        var col3=ons._util.createElement('<ons-col></ons-col>');
        row.appendChild(col3);
        var button3=ons._util.createElement('<ons-button style="background-color: #FFFFFF;border-color: black" onclick="ringEvent('+idItem+')"></ons-button>');
        col3.appendChild(button3);
        button3.appendChild(ons._util.createElement('<ons-icon icon="ion-locked" style="color: black" size="25px"></ons-icon>'));

        var deleteButtonDiv = (ons._util.createElement('<div class="block" style="height: 0%;padding:10px"></div>'));
        // submitButton.appendChild(okButtonDiv);
        deleteButtonDiv.appendChild(ons._util.createElement('<ons-button style="width:230px;background-color:red" onclick="deleteControl(2,'+idItem+')">Delete</ons-button>'));


        $("#eventPage .page__content").append(list);

        $("#eventPage .page__content").append(deleteButtonDiv);
    }else{
        ons.notification.alert('Wrong password !');
    }
}

// reload
function reload() {
    homePageTranslate();
    calendarTranslate();
}


function homePageTranslate(){
    //set the page defalt display

    var event = {
        createNew:function (id,month,day,name,Alarm,Star,Ring) {
            var event = {};
            event.id = id;
            event.month = month;
            event.day = day;
            event.name = name;
            event.isAlarm = Alarm;
            event.isRing = Ring;
            event.isStar = Star;
            return event;
        }
    };

    var loadResult = ConnectNet.load("userdata");
    var count = Number(loadResult.eventCount);
    //console.log(count);

    var Array1 = new Array();
    var Array2 = new Array();
    var Array3 = new Array();
    var Array4 = new Array();
    var Array5 = new Array();
    var Array6 = new Array();
    var Array7 = new Array();
    var Array8 = new Array();
    var Array9 = new Array();
    var Array10 = new Array();
    var Array11 = new Array();
    var Array12 = new Array();
    for(var ii=1;ii<count+1;ii++){
        var tempEvent = ConnectNet.load("event"+ii+"");
        if(tempEvent != null){
            //console.log(tempEvent);
            var temp = event.createNew(ii,tempEvent.month,tempEvent.day,tempEvent.name,tempEvent.isAlarm,tempEvent.isStar,tempEvent.isRing);
            //console.log(temp);
            if(temp.month == 01){
                Array1.push(temp);
            }else if(temp.month == 02){
                Array2.push(temp)
            }else if(temp.month == 03){
                Array3.push(temp)
            }else if(temp.month == 04){
                Array4.push(temp)
            }else if(temp.month == 05){
                Array5.push(temp)
            }else if(temp.month == 06){
                Array6.push(temp)
            }else if(temp.month == 07){
                Array7.push(temp)
            }else if(temp.month == 08){
                Array8.push(temp)
            }else if(temp.month == 09){
                Array9.push(temp)
            }else if(temp.month == 10){
                Array10.push(temp)
            }else if(temp.month == 11){
                Array11.push(temp)
            }else if(temp.month == 12){
                Array12.push(temp)
            }
        }
    }

    //console.log(Array1,Array4);

    //here is a icon to add new event
    var page=(ons._util.createElement('<ons-toolbar-button onclick="newEvent()"><ons-icon size="30px" icon="ion-android-add"></ons-icon></ons-toolbar-button>'));
    $("#rightButton").html(page);

    //set a event list
    if(count > 0){
        var eventlist=(ons._util.createElement('<ons-list></ons-list>'));
        if(Array1.length>0){
            eventlist.appendChild(ons._util.createElement('<ons-list-header>January</ons-list-header>'));
            for(var i=0;i<Array1.length;i++){
                var listItem=ons._util.createElement('<ons-list-item tappable onclick="pushEventPage(1,'+Array1[i].id+')"><b>Event '+(i+1)+':  </b>'+Array1[i].name+' -->> '+Array1[i].day+'/'+Array1[i].month+'/2017</ons-list-item>');
                eventlist.appendChild(listItem);
                var iconDiv=ons._util.createElement('<div class="list-item__right"></div>');
                listItem.appendChild(iconDiv);
                var star=ons._util.createElement('<ons-icon size="25px" icon="ion-android-star"></ons-icon>');
                var write=ons._util.createElement('<ons-icon size="25px" icon="ion-android-alarm-clock" style="margin-left: 15px"></ons-icon>');
                var notification=ons._util.createElement('<ons-icon size="25px" icon="ion-locked" style="margin-left: 15px"></ons-icon>');

                if(Array1[i].isStar == 1) {
                    //console.log("star");
                    iconDiv.appendChild(star);
                }
                if(Array1[i].isRing == 1) {
                    iconDiv.appendChild(notification);
                }
                if(Array1[i].isAlarm == 1) {
                    //console.log("Alarm");
                    iconDiv.appendChild(write);
                }

                eventlist.appendChild(ons._util.createElement('<div class="right"></div>'));
            }
        }
        if(Array2.length>0){
            eventlist.appendChild(ons._util.createElement('<ons-list-header>February</ons-list-header>'));
            for(var i=0;i<Array2.length;i++){
                var listItem=ons._util.createElement('<ons-list-item tappable onclick="pushEventPage(1,'+Array2[i].id+')"><b>Event '+(i+1)+':  </b>'+Array2[i].name+' -->> '+Array2[i].day+'/'+Array2[i].month+'/2017</ons-list-item>');
                eventlist.appendChild(listItem);
                var iconDiv=ons._util.createElement('<div class="list-item__right"></div>');
                listItem.appendChild(iconDiv);
                var star=ons._util.createElement('<ons-icon size="25px" icon="ion-android-star"></ons-icon>');
                var write=ons._util.createElement('<ons-icon size="25px" icon="ion-android-alarm-clock" style="margin-left: 15px"></ons-icon>');
                var notification=ons._util.createElement('<ons-icon size="25px" icon="ion-locked" style="margin-left: 15px"></ons-icon>');

                if(Array2[i].isStar == 1) {
                    iconDiv.appendChild(star);
                }
                if(Array2[i].isRing == 1) {
                    iconDiv.appendChild(notification);
                }
                if(Array2[i].isAlarm == 1) {
                    iconDiv.appendChild(write);
                }

                eventlist.appendChild(ons._util.createElement('<div class="right"></div>'));
            }
        }
        if(Array3.length>0){
            eventlist.appendChild(ons._util.createElement('<ons-list-header>March</ons-list-header>'));
            for(var i=0;i<Array3.length;i++){
                var listItem=ons._util.createElement('<ons-list-item tappable onclick="pushEventPage(1,'+Array3[i].id+')"><b>Event '+(i+1)+':  </b>'+Array3[i].name+' -->> '+Array3[i].day+'/'+Array3[i].month+'/2017</ons-list-item>');
                eventlist.appendChild(listItem);
                var iconDiv=ons._util.createElement('<div class="list-item__right"></div>');
                listItem.appendChild(iconDiv);
                var star=ons._util.createElement('<ons-icon size="25px" icon="ion-android-star"></ons-icon>');
                var write=ons._util.createElement('<ons-icon size="25px" icon="ion-android-alarm-clock" style="margin-left: 15px"></ons-icon>');
                var notification=ons._util.createElement('<ons-icon size="25px" icon="ion-locked" style="margin-left: 15px"></ons-icon>');

                if(Array3[i].isStar == 1) {
                    iconDiv.appendChild(star);
                }
                if(Array3[i].isRing == 1) {
                    iconDiv.appendChild(notification);
                }
                if(Array3[i].isAlarm == 1) {
                    iconDiv.appendChild(write);
                }

                eventlist.appendChild(ons._util.createElement('<div class="right"></div>'));
            }
        }
        if(Array4.length>0){
            eventlist.appendChild(ons._util.createElement('<ons-list-header>April</ons-list-header>'));
            for(var i=0;i<Array4.length;i++){
                var listItem=ons._util.createElement('<ons-list-item tappable onclick="pushEventPage(1,'+Array4[i].id+')"><b>Event '+(i+1)+':  </b>'+Array4[i].name+' -->> '+Array4[i].day+'/'+Array4[i].month+'/2017</ons-list-item>');
                eventlist.appendChild(listItem);
                var iconDiv=ons._util.createElement('<div class="list-item__right"></div>');
                listItem.appendChild(iconDiv);
                var star=ons._util.createElement('<ons-icon size="25px" icon="ion-android-star"></ons-icon>');
                var write=ons._util.createElement('<ons-icon size="25px" icon="ion-android-alarm-clock"></ons-icon>');
                var notification=ons._util.createElement('<ons-icon size="25px" icon="ion-locked"></ons-icon>');

                if(Array1[i].isStar == 1) {
                    iconDiv.appendChild(star);
                }
                if(Array1[i].isRing == 1) {
                    iconDiv.appendChild(notification);
                }
                if(Array1[i].isAlarm == 1) {
                    iconDiv.appendChild(write);
                }

                eventlist.appendChild(ons._util.createElement('<div class="right"></div>'));
            }
        }
        if(Array5.length>0){
            eventlist.appendChild(ons._util.createElement('<ons-list-header>May</ons-list-header>'));
            for(var i=0;i<Array5.length;i++){
                var listItem=ons._util.createElement('<ons-list-item tappable onclick="pushEventPage(1,'+Array5[i].id+')"><b>Event '+(i+1)+':  </b>'+Array5[i].name+' -->> '+Array5[i].day+'/'+Array5[i].month+'/2017</ons-list-item>');
                eventlist.appendChild(listItem);
                var iconDiv=ons._util.createElement('<div class="list-item__right"></div>');
                listItem.appendChild(iconDiv);
                var star=ons._util.createElement('<ons-icon size="25px" icon="ion-android-star"></ons-icon>');
                var write=ons._util.createElement('<ons-icon size="25px" icon="ion-android-alarm-clock" style="margin-left: 15px"></ons-icon>');
                var notification=ons._util.createElement('<ons-icon size="25px" icon="ion-locked" style="margin-left: 15px"></ons-icon>');

                if(Array5[i].isStar == 1) {
                    iconDiv.appendChild(star);
                }
                if(Array5[i].isRing == 1) {
                    iconDiv.appendChild(notification);
                }
                if(Array5[i].isAlarm == 1) {
                    iconDiv.appendChild(write);
                }

                eventlist.appendChild(ons._util.createElement('<div class="right"></div>'));
            }
        }
        if(Array6.length>0){
            eventlist.appendChild(ons._util.createElement('<ons-list-header>June</ons-list-header>'));
            for(var i=0;i<Array6.length;i++){
                var listItem=ons._util.createElement('<ons-list-item tappable onclick="pushEventPage(1,'+Array6[i].id+')"><b>Event '+(i+1)+':  </b>'+Array6[i].name+' -->> '+Array6[i].day+'/'+Array6[i].month+'/2017</ons-list-item>');
                eventlist.appendChild(listItem);
                var iconDiv=ons._util.createElement('<div class="list-item__right"></div>');
                listItem.appendChild(iconDiv);
                var star=ons._util.createElement('<ons-icon size="25px" icon="ion-android-star"></ons-icon>');
                var write=ons._util.createElement('<ons-icon size="25px" icon="ion-android-alarm-clock" style="margin-left: 15px"></ons-icon>');
                var notification=ons._util.createElement('<ons-icon size="25px" icon="ion-locked" style="margin-left: 15px"></ons-icon>');

                if(Array6[i].isStar == 1) {
                    iconDiv.appendChild(star);
                }
                if(Array6[i].isRing == 1) {
                    iconDiv.appendChild(notification);
                }
                if(Array6[i].isAlarm == 1) {
                    iconDiv.appendChild(write);
                }

                eventlist.appendChild(ons._util.createElement('<div class="right"></div>'));
            }
        }
        if(Array7.length>0){
            eventlist.appendChild(ons._util.createElement('<ons-list-header>July</ons-list-header>'));
            for(var i=0;i<Array7.length;i++){
                var listItem=ons._util.createElement('<ons-list-item tappable onclick="pushEventPage(1,'+Array7[i].id+')"><b>Event '+(i+1)+':  </b>'+Array7[i].name+' -->> '+Array7[i].day+'/'+Array7[i].month+'/2017</ons-list-item>');
                eventlist.appendChild(listItem);
                var iconDiv=ons._util.createElement('<div class="list-item__right"></div>');
                listItem.appendChild(iconDiv);
                var star=ons._util.createElement('<ons-icon size="25px" icon="ion-android-star"></ons-icon>');
                var write=ons._util.createElement('<ons-icon size="25px" icon="ion-android-alarm-clock" style="margin-left: 15px"></ons-icon>');
                var notification=ons._util.createElement('<ons-icon size="25px" icon="ion-locked" style="margin-left: 15px"></ons-icon>');

                if(Array7[i].isStar == 1) {
                    iconDiv.appendChild(star);
                }
                if(Array7[i].isRing == 1) {
                    iconDiv.appendChild(notification);
                }
                if(Array7[i].isAlarm == 1) {
                    iconDiv.appendChild(write);
                }

                eventlist.appendChild(ons._util.createElement('<div class="right"></div>'));
            }
        }
        if(Array8.length>0){
            eventlist.appendChild(ons._util.createElement('<ons-list-header>August</ons-list-header>'));
            for(var i=0;i<Array8.length;i++){
                var listItem=ons._util.createElement('<ons-list-item tappable onclick="pushEventPage(1,'+Array8[i].id+')"><b>Event '+(i+1)+':  </b>'+Array8[i].name+' -->> '+Array8[i].day+'/'+Array8[i].month+'/2017</ons-list-item>');
                eventlist.appendChild(listItem);
                var iconDiv=ons._util.createElement('<div class="list-item__right"></div>');
                listItem.appendChild(iconDiv);
                var star=ons._util.createElement('<ons-icon size="25px" icon="ion-android-star"></ons-icon>');
                var write=ons._util.createElement('<ons-icon size="25px" icon="ion-android-alarm-clock" style="margin-left: 15px"></ons-icon>');
                var notification=ons._util.createElement('<ons-icon size="25px" icon="ion-locked" style="margin-left: 15px"></ons-icon>');

                if(Array8[i].isStar == 1) {
                    iconDiv.appendChild(star);
                }
                if(Array8[i].isRing == 1) {
                    iconDiv.appendChild(notification);
                }
                if(Array8[i].isAlarm == 1) {
                    iconDiv.appendChild(write);
                }

                eventlist.appendChild(ons._util.createElement('<div class="right"></div>'));
            }
        }
        if(Array9.length>0){
            eventlist.appendChild(ons._util.createElement('<ons-list-header>September</ons-list-header>'));
            for(var i=0;i<Array9.length;i++){
                var listItem=ons._util.createElement('<ons-list-item tappable onclick="pushEventPage(1,'+Array9[i].id+')"><b>Event '+(i+1)+':  </b>'+Array9[i].name+' -->> '+Array9[i].day+'/'+Array9[i].month+'/2017</ons-list-item>');
                eventlist.appendChild(listItem);
                var iconDiv=ons._util.createElement('<div class="list-item__right"></div>');
                listItem.appendChild(iconDiv);
                var star=ons._util.createElement('<ons-icon size="25px" icon="ion-android-star"></ons-icon>');
                var write=ons._util.createElement('<ons-icon size="25px" icon="ion-android-alarm-clock" style="margin-left: 15px"></ons-icon>');
                var notification=ons._util.createElement('<ons-icon size="25px" icon="ion-locked" style="margin-left: 15px"></ons-icon>');

                if(Array9[i].isStar == 1) {
                    iconDiv.appendChild(star);
                }
                if(Array9[i].isRing == 1) {
                    iconDiv.appendChild(notification);
                }
                if(Array9[i].isAlarm == 1) {
                    iconDiv.appendChild(write);
                }

                eventlist.appendChild(ons._util.createElement('<div class="right"></div>'));
            }
        }
        if(Array10.length>0){
            eventlist.appendChild(ons._util.createElement('<ons-list-header>October</ons-list-header>'));
            for(var i=0;i<Array10.length;i++){
                var listItem=ons._util.createElement('<ons-list-item tappable onclick="pushEventPage(1,'+Array10[i].id+')"><b>Event '+(i+1)+':  </b>'+Array10[i].name+' -->> '+Array10[i].day+'/'+Array10[i].month+'/2017</ons-list-item>');
                eventlist.appendChild(listItem);
                var iconDiv=ons._util.createElement('<div class="list-item__right"></div>');
                listItem.appendChild(iconDiv);
                var star=ons._util.createElement('<ons-icon size="25px" icon="ion-android-star"></ons-icon>');
                var write=ons._util.createElement('<ons-icon size="25px" icon="ion-android-alarm-clock" style="margin-left: 15px"></ons-icon>');
                var notification=ons._util.createElement('<ons-icon size="25px" icon="ion-locked" style="margin-left: 15px"></ons-icon>');

                if(Array10[i].isStar == 1) {
                    iconDiv.appendChild(star);
                }
                if(Array10[i].isRing == 1) {
                    iconDiv.appendChild(notification);
                }
                if(Array10[i].isAlarm == 1) {
                    iconDiv.appendChild(write);
                }

                eventlist.appendChild(ons._util.createElement('<div class="right"></div>'));
            }
        }
        if(Array11.length>0){
            eventlist.appendChild(ons._util.createElement('<ons-list-header>November</ons-list-header>'));
            for(var i=0;i<Array11.length;i++){
                var listItem=ons._util.createElement('<ons-list-item tappable onclick="pushEventPage(1,'+Array11[i].id+')"><b>Event '+(i+1)+':  </b>'+Array11[i].name+' -->> '+Array11[i].day+'/'+Array11[i].month+'/2017</ons-list-item>');
                eventlist.appendChild(listItem);
                var iconDiv=ons._util.createElement('<div class="list-item__right"></div>');
                listItem.appendChild(iconDiv);
                var star=ons._util.createElement('<ons-icon size="25px" icon="ion-android-star"></ons-icon>');
                var write=ons._util.createElement('<ons-icon size="25px" icon="ion-android-alarm-clock" style="margin-left: 15px"></ons-icon>');
                var notification=ons._util.createElement('<ons-icon size="25px" icon="ion-locked" style="margin-left: 15px"></ons-icon>');

                if(Array11[i].isStar == 1) {
                    iconDiv.appendChild(star);
                }
                if(Array11[i].isRing == 1) {
                    iconDiv.appendChild(notification);
                }
                if(Array11[i].isAlarm == 1) {
                    iconDiv.appendChild(write);
                }

                eventlist.appendChild(ons._util.createElement('<div class="right"></div>'));
            }
        }
        if(Array12.length>0){
            eventlist.appendChild(ons._util.createElement('<ons-list-header>December</ons-list-header>'));
            for(var i=0;i<Array12.length;i++){
                var listItem=ons._util.createElement('<ons-list-item tappable onclick="pushEventPage(1,'+Array12[i].id+')"><b>Event '+(i+1)+':  </b>'+Array12[i].name+' -->> '+Array12[i].day+'/'+Array12[i].month+'/2017</ons-list-item>');
                eventlist.appendChild(listItem);
                var iconDiv=ons._util.createElement('<div class="list-item__right"></div>');
                listItem.appendChild(iconDiv);
                var star=ons._util.createElement('<ons-icon size="25px" icon="ion-android-star"></ons-icon>');
                var write=ons._util.createElement('<ons-icon size="25px" icon="ion-android-alarm-clock" style="margin-left: 15px"></ons-icon>');
                var notification=ons._util.createElement('<ons-icon size="25px" icon="ion-locked" style="margin-left: 15px"></ons-icon>');

                if(Array12[i].isStar == 1) {
                    iconDiv.appendChild(star);
                }
                if(Array12[i].isRing == 1) {
                    iconDiv.appendChild(notification);
                }
                if(Array12[i].isAlarm == 1) {
                    iconDiv.appendChild(write);
                }

                eventlist.appendChild(ons._util.createElement('<div class="right"></div>'));
            }
        }

        $("#template1").html(eventlist);
        // for (var i=1;i<3;i++){
        //     eventlist.appendChild(ons._util.createElement('<ons-list-header>Title '+i+'</ons-list-header>'));
        //     for(var i2=1;i2<6;i2++){
        //         var listItem=ons._util.createElement('<ons-list-item tappable onclick="pushEventPage('+i+','+i2+')">Event '+i2+'</ons-list-item>');
        //         eventlist.appendChild(listItem);
        //         var iconDiv=ons._util.createElement('<div class="list-item__right"></div>');
        //         listItem.appendChild(iconDiv);
        //         var star=ons._util.createElement('<ons-icon size="25px" icon="ion-android-star"></ons-icon>');
        //         var write=ons._util.createElement('<ons-icon size="25px" icon="ion-android-alarm-clock" style="margin-left: 15px"></ons-icon>');
        //         if(i2===2 && i===1) {
        //             iconDiv.appendChild(star);
        //             iconDiv.appendChild(write);
        //         }
        //
        //         if(i2===5) {
        //             iconDiv.appendChild(star);
        //         }
        //
        //         if(i2===3 && i===2){
        //             iconDiv.appendChild(write);
        //         }
        //         // eventlist.appendChild(ons._util.createElement('<div class="right"></div>'));
        //     }
        // }
    }

}

//load calendar page
function calendarTranslate() {
    var page=ons._util.createElement('<ons-list></ons-list>');
    page.appendChild(ons._util.createElement('<ons-list-header>Star Event</ons-list-header>'));

    var loadUser = ConnectNet.load("userdata");
    var count = Number(loadUser.eventCount);
    // console.log(count);
    for(var i=1;i<count+1;i++){
        var loadEvent = ConnectNet.load("event"+i+"");
        // console.log(loadEvent);
        if(loadEvent != null && loadEvent != undefined){
            if (loadEvent.isStar == 1){
                var listItem=showEvent(1,i);
                page.appendChild(listItem);
            }
        }
    }

    page.appendChild(ons._util.createElement('<ons-list-header>Enter to view</ons-list-header>'));
    var eventName=ons._util.createElement('<ons-list-item class="input-items"></ons-list-item>');
    eventName.appendChild(ons._util.createElement('<div class="left"><ons-icon icon="ion-android-create" class="list-item__icon"></ons-icon></div>'));
    eventName.appendChild(ons._util.createElement('<label class="center"><input id="showClander1" float maxlength="30" placeholder="Enter a date" onchange="updateButton(this)"><button id="enterButton">Enter</button></label>'));
    page.appendChild(eventName);
    //var div = ons._util.createElement('<div><input type="text" placeholder="Enter a date" id="showClander1" onchange="updateButton(this)"><button id="enterButton">Enter</button></div>');

    $("#template2").html(page);
    $("#showClander1").datepicker();

}

// onchang update
function updateButton(object) {
    var value = object.value;
    $("#enterButton").click(enterEvent(value));
}

//load setting page
function settingTranslate() {
    // var page=(ons._util.createElement('<p style="text-align: center;">Setting Page</p>'));
    // $("#template3").append(page);

    //add switches and settings
    var settinglist=(ons._util.createElement('<ons-list></ons-list>'));
    var title=ons._util.createElement('<ons-list-header>Switch</ons-list-header>');
    settinglist.appendChild(title);

    //remind switch
    var remindSwitch=(ons._util.createElement('<ons-list-item></ons-list-item>'));
    settinglist.appendChild(remindSwitch);
    remindSwitch.appendChild(ons._util.createElement('<div class="center">Auto remind </div>'));
    remindSwitch.appendChild(ons._util.createElement('<div class="right"><ons-switch></ons-switch></div>'));

    //display switch
    var displaySwitch=(ons._util.createElement('<ons-list-item></ons-list-item>'));
    settinglist.appendChild(displaySwitch);
    displaySwitch.appendChild(ons._util.createElement('<div class="center">Enable meau display </div>'));
    displaySwitch.appendChild(ons._util.createElement('<div class="right"><ons-switch></ons-switch></div>'));
    $("#template3").append(settinglist);

    //checkbox title
    var checkbox=(ons._util.createElement('<ons-list></ons-list>'));
    var checkboxTitle=ons._util.createElement('<ons-list-header>Checkbox</ons-list-header>');
    checkbox.appendChild(checkboxTitle);

    //checkbox1
    var displayEmotin=(ons._util.createElement('<ons-list-item></ons-list-item>'));
    checkbox.appendChild(displayEmotin);
    displayEmotin.appendChild(ons._util.createElement('<label class="left"> <ons-checkbox input-id="check-1"></ons-checkbox> </label>'));
    displayEmotin.appendChild(ons._util.createElement('<label for="check-1" class="center">Remenber me</label>'));
    $("#template3").append(checkbox);

    //checkbox2
    var changeLanguage=(ons._util.createElement('<ons-list-item></ons-list-item>'));
    checkbox.appendChild(changeLanguage);
    changeLanguage.appendChild(ons._util.createElement('<label class="left"> <ons-checkbox input-id="check-2"></ons-checkbox> </label>'));
    changeLanguage.appendChild(ons._util.createElement('<label for="check-2" class="center">Hide lock event</label>'));
    $("#template3").append(checkbox);

    //submit button
    // var submitButton=(ons._util.createElement('<section style="padding: 8px"></section>'));
    var okButtonDiv = (ons._util.createElement('<div class="block" style="height: 0%;padding:10px"></div>'));
    // submitButton.appendChild(okButtonDiv);
    okButtonDiv.appendChild(ons._util.createElement('<ons-button style="width:230px" onclick="clickText()">OK</ons-button>'));
    $("#template3").append(okButtonDiv);
}

//function to load about me page
function trnasferAboutme(){
    /* orginal html code here
     <ons-list>
     <ons-list-header><div style="font-size: larger">About me Page</div></ons-list-header>

     <ons-list-item>SIT 313 project</ons-list-item>

     <ons-list-item>Project type: Calendar</ons-list-item>

     <ons-list-item>Name: Rongjuncheng Zhang</ons-list-item>

     <ons-list-item>Student ID: 216036505</ons-list-item>

     <ons-list-item>Email: zhangrp@deakin.com.au</ons-list-item>

     <ons-list-header><div style="font-size: larger">References</div></ons-list-header>

     <ons-list-item>UI from: Onsen UI <"https://onsen.io/"></ons-list-item>

     <ons-list-item>Icno from: Onsen Icon<"http://ionicons.com/"></ons-list-item>

     <ons-list-item>Calendar picture from: Easyicno<"http://www.easyicon.net/1208496-calendar_icon.html"></ons-list-item>

     <ons-list-header>Error Report</ons-list-header>

     <ons-list-item tappable onclick="pushError()">Error report</ons-list-item>
     </ons-list>
    */
    var list=ons._util.createElement('<ons-list></ons-list>');
    list.appendChild(ons._util.createElement('<ons-list-header><div style="font-size: larger">About me Page</div></ons-list-header>'));
    list.appendChild(ons._util.createElement('<ons-list-item>SIT 313 project</ons-list-item>'));
    list.appendChild(ons._util.createElement('<ons-list-item>Project type: Calendar</ons-list-item>'));
    list.appendChild(ons._util.createElement('<ons-list-item>Name: Rongjuncheng Zhang</ons-list-item>'));
    list.appendChild(ons._util.createElement('<ons-list-item>Student ID: 216036505</ons-list-item>'));
    list.appendChild(ons._util.createElement('<ons-list-item>Email: zhangrp@deakin.com.au</ons-list-item>'));
    list.appendChild(ons._util.createElement('<ons-list-header><div style="font-size: larger">References</div></ons-list-header>'));
    list.appendChild(ons._util.createElement('<ons-list-item>UI from: Onsen UI <"https://onsen.io/"></ons-list-item>'));
    list.appendChild(ons._util.createElement('<ons-list-item>Icno from: Onsen Icon<"http://ionicons.com/"></ons-list-item>'));
    list.appendChild(ons._util.createElement('<ons-list-item>Calendar picture from: Easyicno<"http://www.easyicon.net/1208496-calendar_icon.html"></ons-list-item>'));
    list.appendChild(ons._util.createElement('<ons-list-header>Error Report</ons-list-header>'));
    list.appendChild(ons._util.createElement('<ons-list-item tappable onclick="pushError()">Error report</ons-list-item>'));

    $("#template4").append(list);
}

// this function is to respend the click event and push a new page
function pushEventPage(idSection,idItem) {
    homeNavigator.pushPage('eventPage.html',{data:{idSection:idSection, idItem:idItem}});
}

//this function is a ensure change settings confirm
function clickText(){
    ons.notification.confirm('Are you sure to save the changes?');
}

//push the login page at first
function pushLoginPage(){
    homeNavigator.pushPage('loginPage.html',{animation:'none'});
}

//function to add a new event
function newEvent(){
    homeNavigator.pushPage('newEvent.html');
}

function enterEvent(value){
    homeNavigator.pushPage('aEvent.html', {data:{dateValue:value}});
}

//edit the selectbox
function editSelects1(event) {
    document.getElementById('monthSelect').removeAttribute('modifier');
    if (event.target.value == '1' || event.target.value == 'underbar') {
        document.getElementById('monthSelect').setAttribute('modifier', event.target.value);
    }
}

function editSelects2(event) {
    document.getElementById('daySelect').removeAttribute('modifier');
    if (event.target.value == '1' || event.target.value == 'underbar') {
        document.getElementById('daySelect').setAttribute('modifier', event.target.value);
    }
}

//function to create a dialog
// function createDialog(){
//     var dialog=$('<ons-alert-dialog id="dialog"></ons-alert-dialog>');
//     dialog.append($('<div class="alert-dialog-title">Notification</div>'));
//     dialog.append($('<div class="alert-dialog-content">Do you want create this new event?</div>'));
//     dialog.append($('<div class="alert-dialog-footer"><button class="alert-dialog-button" onclick="dialogControl(1)">OK</button><button class="alert-dialog-button" onclick="dialogControl(0)">Cancel</button></div>'));
//     $("#template4").append(dialog);
// }

//function to control a dialog
function dialogControl(id){
    if(id===1){
        var eventName = $("#eventName").val();
        var eventDetail = $("#eventDetail").val();
        if(eventName == null || eventName == "" || eventDetail == null || eventDetail == ""){
            $("#dialog").hide();
            ons.notification.alert('Fix your input!');
            return;
        }
        var month = $("#monthSelect").val();
        var day = $("#daySelect").val();
        //console.log(eventName,eventDetail,month,day);
        var loadResult = ConnectNet.load("userdata");
        homeNavigator.popPage();
        $("#dialog").hide();
        if(loadResult == null){
            ConnectNet.save("userdata","{\"eventCount\":\"1\"}");
            ConnectNet.save("event1","{\"name\":\""+eventName+"\",\"detail\":\""+eventDetail+"\",\"year\":\"2017\",\"month\":\""+month+"\",\"day\":\""+day+"\",\"isStar\":\"0\",\"isAlarm\":\"0\", \"isRing\":\"0\"}");
        }else{
            var count = Number(loadResult.eventCount);
            count++;
            // console.log("value:"+count);
            ConnectNet.save("userdata","{\"eventCount\":\""+count+"\"}");
            ConnectNet.save("event"+count+"","{\"name\":\""+eventName+"\",\"detail\":\""+eventDetail+"\",\"year\":\"2017\",\"month\":\""+month+"\",\"day\":\""+day+"\",\"isStar\":\"0\",\"isAlarm\":\"0\", \"isRing\":\"0\"}");
        }

        ons.notification.alert('You have created a new event!');
        homePageTranslate();
        calendarTranslate();


        // $.ajax({
        //         cache:false,
        //         url:"php/CreateEvent.php",
        //         async:false,
        //         type:'post',
        //         data:{eventName:eventName,month:month,day:day},
        //         success:function(isAdd){
        //
        //         }
        //     }
        // );

    }else if(id===2){
        $("#dialog").show();
    }else{
        $("#dialog").hide();
    }
}

function deleteControl(id,eventNum){
    if(id===1){
        ConnectNet.delete("event"+eventNum+"");
        ons.notification.alert('You have delete this event!');
        $("#dialog2").hide();
        homeNavigator.popPage();
        homePageTranslate();
        calendarTranslate();

    }else if(id===2){
        $("#deleteEvent").attr("onclick","deleteControl(1,"+eventNum+")");
        $("#dialog2").show();
    }else{
        $("#dialog2").hide();
    }
}

//function to get and show event
function showEvent(idSection,idItem){

    var loadResult = ConnectNet.load("event"+idItem+"");

    var item=ons._util.createElement('<ons-list-item></ons-list-item>');
    var photoDiv=ons._util.createElement('<div class="left" style="width: 130px"></div>');
    item.appendChild(photoDiv);
    photoDiv.appendChild(ons._util.createElement('<img src="image/calendar.png" style="width: 60px;height: 60px;align-self: auto">'));
    var mainDiv=ons._util.createElement('<div class="center"></div>');
    item.appendChild(mainDiv);
    var timeDiv=ons._util.createElement('<div class="left" style="padding: 5px;text-align: left;width:280px"></div>');
    mainDiv.appendChild(timeDiv);

    timeDiv.appendChild(ons._util.createElement('<span><b>'+loadResult.day+'/'+loadResult.month+'/2017 </b></br><b>'+loadResult.name+'</b></span></span>'));
    mainDiv.appendChild(ons._util.createElement('<div class="left" style="text-align: left;padding: 5px;width:280px">'+loadResult.detail+'</div>'));


    var row=ons._util.createElement('<div class="right"></div>');
    item.appendChild(row);
    //button 1
    row.appendChild(ons._util.createElement('<ons-icon icon="ion-android-star" style="color: black" size="25px"></ons-icon>'));


    //return a string so item should be append into <ons-list>
    return item;
}

// here is a var to save the errors
var errorArray = new Array();

//here is a error pushPage function
function pushError(){
    homeNavigator.pushPage('errorPage.html');
}

// here is a function to star event
function starEvent(id){
    var loadResult = ConnectNet.load("event"+id+"");
    if(loadResult.isStar == 0){
        loadResult.isStar = 1;
        ons.notification.alert('You have stared this event!');
    }else if(loadResult.isStar == 1){
        loadResult.isStar = 0;
        ons.notification.alert('You have unstared this event!');
    }

    ConnectNet.save("event"+id+"","{\"name\":\""+loadResult.name+"\",\"detail\":\""+loadResult.detail+"\",\"year\":\"2017\",\"month\":\""+loadResult.month+"\",\"day\":\""+loadResult.day+"\",\"isStar\":\""+loadResult.isStar+"\",\"isAlarm\":\""+loadResult.isAlarm+"\", \"isRing\":\""+loadResult.isRing+"\"}");

}

// here is function to notice event
function ringEvent(id){
    var loadResult = ConnectNet.load("event"+id+"");
    if(loadResult.isRing == 0){
        loadResult.isRing = 1;
        ons.notification.alert('You have locked this event!');
    }else if(loadResult.isRing == 1){
        loadResult.isRing = 0;
        ons.notification.alert('You have unlocked this event!');
    }

    ConnectNet.save("event"+id+"","{\"name\":\""+loadResult.name+"\",\"detail\":\""+loadResult.detail+"\",\"year\":\"2017\",\"month\":\""+loadResult.month+"\",\"day\":\""+loadResult.day+"\",\"isStar\":\""+loadResult.isStar+"\",\"isAlarm\":\""+loadResult.isAlarm+"\", \"isRing\":\""+loadResult.isRing+"\"}");

}

function alarmEvent(id){
    var loadResult = ConnectNet.load("event"+id+"");
    if(loadResult.isAlarm == 0){
        loadResult.isAlarm = 1;
        ons.notification.alert('You have alarm this event!');
    }else if(loadResult.isAlarm == 1){
        loadResult.isAlarm = 0;
        ons.notification.alert('You have unalarm this event!');
    }

    ConnectNet.save("event"+id+"","{\"name\":\""+loadResult.name+"\",\"detail\":\""+loadResult.detail+"\",\"year\":\"2017\",\"month\":\""+loadResult.month+"\",\"day\":\""+loadResult.day+"\",\"isStar\":\""+loadResult.isStar+"\",\"isAlarm\":\""+loadResult.isAlarm+"\", \"isRing\":\""+loadResult.isRing+"\"}");

}

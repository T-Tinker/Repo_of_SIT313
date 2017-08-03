//a listener to load a new page, and different load function will load different page, i will write the page inside the listener

document.addEventListener('init', function (event) {
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
        var page=(ons._util.createElement('<ons-toolbar></ons-toolbar>'));
        page.appendChild(ons._util.createElement('<div class="left"><ons-back-button>Back</ons-back-button></div>'));
        // console.log($("#eventPage").length);
        $("#eventPage .page__content").append(page);

        /* this is the detail list */
        var list=ons._util.createElement('<ons-list style="margin-top:44px"></ons-list>');
        list.appendChild(ons._util.createElement('<ons-list-header>Event Name</ons-list-header>'));
        var item=ons._util.createElement('<ons-list-item></ons-list-item>');
        list.appendChild(item);
        var photoDiv=ons._util.createElement('<div class="left" style="width: 130px"></div>');
        item.appendChild(photoDiv);
        photoDiv.appendChild(ons._util.createElement('<img src="image/calendar.png" style="width: 60px;height: 60px;align-self: auto">'));
        var mainDiv=ons._util.createElement('<div class="center"></div>');
        item.appendChild(mainDiv);
        var timeDiv=ons._util.createElement('<div class="header" style="padding: 5px;text-align: center;margin-left: 29px"></div>');
        mainDiv.appendChild(timeDiv);
        var idSection = event.target.data.idSection;
        var idItem = event.target.data.idItem;
        var time=10*event.target.data.idSection+event.target.data.idItem-1;
        if (idItem===2){
            timeDiv.appendChild(ons._util.createElement('<span><b>'+time+':00 '+event.target.data.idItem*3+'/'+event.target.data.idSection*4+'/2017 </b><b>Have a big date with Natasha</b></span>'));
            mainDiv.appendChild(ons._util.createElement('<div style="text-align: center;margin-left: 29px;padding: 5px">I must on time !</div>'));
        }//event 2
        else if(idSection===2&&idItem===4){
            timeDiv.appendChild(ons._util.createElement('<span><b>'+time+':00 '+event.target.data.idItem*3+'/'+event.target.data.idSection*4+'/2017 </b><b>Go to airport to pick Jason</b></span>'));
            mainDiv.appendChild(ons._util.createElement('<div style="text-align: center;margin-left: 29px;padding: 5px">I can late a little bit, so expensive park in airport.</div>'));
        }//event 3
        else{
            timeDiv.appendChild(ons._util.createElement('<span><b>'+time+':00 '+event.target.data.idItem*3+'/'+event.target.data.idSection*4+'/2017 </b><b>Go to final exam</b></span>'));
            mainDiv.appendChild(ons._util.createElement('<div style="text-align: center;margin-left: 29px;padding: 5px">It is a very import day! Do not miss!</div>'));
        }

        var row=ons._util.createElement('<ons-row class="left" style="text-align: center;padding:5px;width: 260px;height: 50px"></ons-row>');
        mainDiv.appendChild(row);
        //button 1
        var col1=ons._util.createElement('<ons-col></ons-col>');
        row.appendChild(col1);
        var button1=ons._util.createElement('<ons-button style="background-color: #FFFFFF;border-color: black"></ons-button>');
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

        $("#eventPage .page__content").append(list);
    }

    if (event.target.id === 'loginPage') {
        var outDiv=ons._util.createElement('<div class="block"></div>');
        var p1=ons._util.createElement('<p></p>');
        outDiv.appendChild(p1);
        // p1.appendChild(ons._util.createElement('<div class="center"><ons-icon size="50px" style="color:#62b0ff" icon="ion-android-happy" class="list-item__icon"></ons-icon></div>'));
        p1.appendChild(ons._util.createElement('<div class="center"><img src="../image/calendar.png"></div>'));
        p1.appendChild(ons._util.createElement('<div class="center"><ons-input id="username" style="width:250px" modifier="underbar" maxlenth="30" placeholder="Username" float></ons-input></div>'));
        outDiv.appendChild(ons._util.createElement('<p><ons-input id="password" style="width:250px"modifier="underbar" type="password" placeholder="Password" float></ons-input></p>'));
        outDiv.appendChild(ons._util.createElement('<p class="center" style="margin-top: 20px"><ons-button style="width:280px" onclick="homeNavigator.popPage()">Sign in</ons-button></p>'));
        outDiv.appendChild(ons._util.createElement('<p><ons-button modifier="quiet">Forget password?</ons-button><ons-button modifier="quiet" style="margin-top: 1px">Register</ons-button></p>'));
        $("#loginPage .page__content").append(outDiv);
    }

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
        eventName.appendChild(ons._util.createElement('<label class="center"><ons-input id="name-input" float maxlength="30" placeholder="Event"></ons-input></label>'));

        var eventMonth=ons._util.createElement('<ons-list-item></ons-list-item>');
        list.appendChild(eventMonth);
        eventMonth.appendChild(ons._util.createElement('<label class="left">Select the month</label>'));
        var selectBox=ons._util.createElement('<ons-select id="choose-sel" onchange="editSelects(event)"></ons-select>');
        eventMonth.appendChild(selectBox);
        for(i1=1;i1<13;i1++){
            selectBox.appendChild(ons._util.createElement('<option value="'+i1+'">'+i1+'</option>'));
        }

        var eventDay=ons._util.createElement('<ons-list-item></ons-list-item>');
        list.appendChild(eventDay);
        eventDay.appendChild(ons._util.createElement('<label class="left">Select the day</label>'));
        var daySelectBox=ons._util.createElement('<ons-select id="choose-sel" onchange="editSelects(event)"></ons-select>');
        eventDay.appendChild(daySelectBox);
        for(i2=1;i2<32;i2++){
            daySelectBox.appendChild(ons._util.createElement('<option value="'+i2+'">'+i2+'</option>'));
        }

        var okButton=ons._util.createElement('<div style="text-align: center;padding: 8px;"><ons-button style="width:230px" onclick="dialogControl(2)">Create</ons-button></div>');
        outDiv.appendChild(okButton);
        $("#newEvent .page__content").append(outDiv);

        if (event.target.id === 'dialog'){

        }
    }

});

function homePageTranslate(){
    //set the page defalt display

    //here is a icon to add new event
    var page=(ons._util.createElement('<ons-toolbar-button onclick="newEvent()"><ons-icon size="30px" icon="ion-android-add"></ons-icon></ons-toolbar-button>'));
    $("#rightButton").append(page);

    //set a event list
    var eventlist=(ons._util.createElement('<ons-list></ons-list>'));

    for (var i=1;i<3;i++){
        eventlist.appendChild(ons._util.createElement('<ons-list-header>Title '+i+'</ons-list-header>'));
        for(var i2=1;i2<6;i2++){
            var listItem=ons._util.createElement('<ons-list-item tappable onclick="pushEventPage('+i+','+i2+')">Event '+i2+'</ons-list-item>');
            eventlist.appendChild(listItem);
            var iconDiv=ons._util.createElement('<div class="list-item__right"></div>');
            listItem.appendChild(iconDiv);
            var star=ons._util.createElement('<ons-icon size="25px" icon="ion-android-star"></ons-icon>');
            var write=ons._util.createElement('<ons-icon size="25px" icon="ion-android-alarm-clock" style="margin-left: 15px"></ons-icon>');
            if(i2===2 && i===1) {
                iconDiv.appendChild(star);
                iconDiv.appendChild(write);
            }

            if(i2===5) {
                iconDiv.appendChild(star);
            }

            if(i2===3 && i===2){
                iconDiv.appendChild(write);
            }
            // eventlist.appendChild(ons._util.createElement('<div class="right"></div>'));
        }
    }
    $("#template1").append(eventlist);
}

//load calendar page
function calendarTranslate() {
    var page=ons._util.createElement('<ons-list></ons-list>');
    page.appendChild(ons._util.createElement('<ons-list-header>Newest Event</ons-list-header>'));
    //load 1 event
    var listItem1=showEvent(1,2);
    page.appendChild(listItem1);

    //load 2 event
    var listItem2=showEvent(2,4);
    page.appendChild(listItem2);

    //load 3 event
    var listItem3=showEvent(1,1);
    page.appendChild(listItem3);
    $("#template2").append(page);

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
    displayEmotin.appendChild(ons._util.createElement('<label for="check-1" class="center">Keep runing</label>'));
    $("#template3").append(checkbox);

    //checkbox2
    var changeLanguage=(ons._util.createElement('<ons-list-item></ons-list-item>'));
    checkbox.appendChild(changeLanguage);
    changeLanguage.appendChild(ons._util.createElement('<label class="left"> <ons-checkbox input-id="check-2"></ons-checkbox> </label>'));
    changeLanguage.appendChild(ons._util.createElement('<label for="check-2" class="center">Something</label>'));
    $("#template3").append(checkbox);

    //submit button
    // var submitButton=(ons._util.createElement('<section style="padding: 8px"></section>'));
    var okButtonDiv = (ons._util.createElement('<div class="block" style="height: 0%;padding:10px"></div>'));
    // submitButton.appendChild(okButtonDiv);
    okButtonDiv.appendChild(ons._util.createElement('<ons-button style="width:230px" onclick="clickText()">OK</ons-button>'));
    $("#template3").append(okButtonDiv);
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

//edit the selectbox
function editSelects(event) {
    document.getElementById('choose-sel').removeAttribute('modifier');
    if (event.target.value == '1' || event.target.value == 'underbar') {
        document.getElementById('choose-sel').setAttribute('modifier', event.target.value);
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
        homeNavigator.popPage();
        $("#dialog").hide();
        ons.notification.alert('You have created a new event!');
    }else if(id===2){
        $("#dialog").show();
    }else{
        $("#dialog").hide();
    }
}

//function to get and show event
function showEvent(idSection,idItem){
    var item=ons._util.createElement('<ons-list-item></ons-list-item>');
    var photoDiv=ons._util.createElement('<div class="left" style="width: 130px"></div>');
    item.appendChild(photoDiv);
    photoDiv.appendChild(ons._util.createElement('<img src="image/calendar.png" style="width: 60px;height: 60px;align-self: auto">'));
    var mainDiv=ons._util.createElement('<div class="center"></div>');
    item.appendChild(mainDiv);
    var timeDiv=ons._util.createElement('<div class="header" style="padding: 5px;text-align: center;margin-left: 29px"></div>');
    mainDiv.appendChild(timeDiv);
    var time=10 * idSection + idItem - 1;
    //event 1
    if (idItem===2){
        timeDiv.appendChild(ons._util.createElement('<span><b>'+time+':00 '+idItem*3+'/'+idSection*4+'/2017 </b><b>Have a big date with Natasha</b></span>'));
        mainDiv.appendChild(ons._util.createElement('<div style="text-align: center;margin-left: 29px;padding: 5px">I must on time !</div>'));
    }//event 2
    else if(idSection===2&&idItem===4){
        timeDiv.appendChild(ons._util.createElement('<span><b>'+time+':00 '+idItem*3+'/'+idSection*4+'/2017 </b><b>Go to airport to pick Jason</b></span>'));
        mainDiv.appendChild(ons._util.createElement('<div style="text-align: center;margin-left: 29px;padding: 5px">I can late a little bit, so expensive park in airport.</div>'));
    }//event 3
    else{
        timeDiv.appendChild(ons._util.createElement('<span><b>'+time+':00 '+idItem*3+'/'+idSection*4+'/2017 </b><b>Go to final exam</b></span>'));
        mainDiv.appendChild(ons._util.createElement('<div style="text-align: center;margin-left: 29px;padding: 5px">It is a very import day! Do not miss!</div>'));
    }

    var row=ons._util.createElement('<ons-row class="left" style="text-align: center;padding:5px;width: 260px;height: 50px"></ons-row>');
    mainDiv.appendChild(row);
    //button 1
    var col1=ons._util.createElement('<ons-col></ons-col>');
    row.appendChild(col1);
    var button1=ons._util.createElement('<ons-button style="background-color: #FFFFFF;border-color: black"></ons-button>');
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

    //return a string so item should be append into <ons-list>
    return item;
}

$(document).ready(function () {
    homePageTranslate();
   calendarTranslate();
   settingTranslate();
   pushLoginPage();
});


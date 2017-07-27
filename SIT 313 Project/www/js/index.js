function homePageTranslate(){
    //set the page defalt display
    var page=(ons._util.createElement('<p style="text-align: center;">Home Page</p>'));
    $("#template1").append(page);

    //set a event list
    var eventlist=(ons._util.createElement('<ons-list></ons-list>'));
    for (var i=1;i<3;i++){
        eventlist.appendChild(ons._util.createElement('<ons-list-header>Title '+i+'</ons-list-header>'));
        for(var i2=1;i2<6;i2++){
            eventlist.appendChild(ons._util.createElement('<ons-list-item tappable>Event '+i2+'</ons-list-item>'));
        }
    }
    $("#template1").append(eventlist);
}

//load calendar page
function calendarTranslate() {
    var page=(ons._util.createElement('<p style="text-align: center;">Time Page</p>'));
    $("#template2").append(page);

}

//load setting page
function settingTranslate() {
    var page=(ons._util.createElement('<p style="text-align: center;">Setting Page</p>'));
    $("#template3").append(page);

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
    var submitButton=ons._util.createElement('<div style="padding: 8px"></div>');
    var okButtonDiv = (ons._util.createElement('<div style="float:left;margin-left: 150px"></div>'));
    var cancelButtonDiv = (ons._util.createElement('<div style="float:right;margin-right: 150px"></div>'));
    submitButton.appendChild(okButtonDiv);
    submitButton.appendChild(cancelButtonDiv);
    okButtonDiv.appendChild(ons._util.createElement('<ons-button>OK</ons-button>'));
    cancelButtonDiv.appendChild(ons._util.createElement('<ons-button>Cancel</ons-button>'));
    $("#template3").append(submitButton);
}

$(document).ready(function () {
   homePageTranslate();
   calendarTranslate();
   settingTranslate();
});
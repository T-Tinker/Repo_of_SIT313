var ConnectNet = function (){};

ConnectNet.url='http://introtoapps.com/datastore.php';
ConnectNet.id='216036505';

ConnectNet.load = function(objectId){
    var result;
    $.ajax({
        url: ConnectNet.url,
        type: 'GET',
        dataType: 'json',
        data:{action:'load',objectid:objectId,appid:ConnectNet.id},
        timeout: 5000,  //set timeout
        cache: false,   //disable cache
        error: function(xml) {
            // console.log(xml);
            if(xml.status==200){
                result= xml.responseText;
                // console.log(result);
            }else{
                // console.log("Network error!");
            }
        },
        async : false,
        success: function(xml) {
            //console.log(xml);
            result= xml;
        }   //set success recalled function
    });
    return result;
};

ConnectNet.save = function(objectId,data){
    var result;
    $.ajax({
        url: ConnectNet.url,
        type: 'POST',
        dataType: 'json',
        data:{action:'save',objectid:objectId,data:data,appid:ConnectNet.id},
        timeout: 5000,  //set timeout
        cache: true,   //disable cache
        error: function(xml) {
            if(xml.responseText!='ok'){
                alert("save Network Wrong! Please retry!");
                ons.notification.alert('Network Wrong. Please try again.',{title:''});
            }
        },
        async : false,
        success: function(xml) {
            //console.log("1234");
            result= xml;
            //console.log(result);
        }   //set success recalled function
    });
    return result;
};

ConnectNet.list= function(){
    var result;
    $.ajax({
        url: ConnectNet.url,
        type: 'GET',
        dataType: 'json',
        data:{action:'list',appid:ConnectNet.id},
        timeout: 1000,  //set timeout
        cache: true,   //disable cache
        error: function(xml) {
            if(xml.status==200){
                result= xml.responseText;
                console.log(result);
            }else{
                console.log("Network error!");
                alert("list Network Wrong! Please retry!");
            }

        },
        async : false,
        success: function(xml) {
            // console.log("list=>",xml);
            result = xml;
        }
    });
    return result;
};

ConnectNet.delete = function(objectId){
    var result;
    $.ajax({
        url: ConnectNet.url,
        type: 'GET',
        dataType: 'json',
        data:{action:'delete',objectid:objectId,appid:ConnectNet.id},
        timeout: 1000,  //set timeout
        cache: true,   //disable cache
        error: function(xml) {
            if(xml.responseText!='ok'){
                alert("delete Network Wrong! Please retry!");

            }
        },
        async : false,
        success: function(xml) {
            // console.log(xml);
            result= xml;
        }   //set success recalled function
    });
    return result;
};


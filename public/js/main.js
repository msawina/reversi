/* functions for general use */
/* This function returns the value associated with 'whichParam' on the URL */
function getURLParameters(whichParam)
{
    $.urlParam = function(param){
    var results = new RegExp('[\?&]' + param + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}
    var pageURLVariables = pageURL.split('&');
    for(var i = 0; i < pageURLVariables.length; i++){
        var parameterName = pageURLVariables[i].split('=');
        if(parameterName[0] == whichParam){
            return parameterName[1];
        }
    }
}
var username = getURLParameters('username');
if('undefined' == typeof username || !username){
    username = 'Anonymous_'+Math.random();
}

$('#messages').append('<h4>' + username + '</h4>');
​var chat_room = 'One_Room';
​
​
​
/* Connect to the socket server */
​
var socket = io.connect();
​
socket.on('log',function(array){
    console.log.apply(console,array);
});

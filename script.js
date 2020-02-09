$(document).ready(function(){
 var drEvent = $(".dropify").dropify({
messages:{
'default': `<h5 class='lime-text text-darken-3' style="font-family: 'Courgette', cursive;">Drag and drop a file or click to upload a file</h5>Language supported: English, Telugu and Urdu.`,
'replace':"<h5 class='white-text'>Drag and drop or click to replace with new file</h5>",
'remove':  'Remove  file',
'error':   'Oops, something went wrong.'
}
});
drEvent.on('dropify.beforeClear', function(event, element){
    opt=confirm("Do you really want to delete \"" + element.filename + "\" ?");
if(opt)
{
log_data.innerHTML=`<h4 class='center lime-text text-darken-4' style="font-family: 'Neucha', cursive;">Progress</h4>`
}
else
{

}
});
});


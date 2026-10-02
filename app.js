(function(){
  const form=document.getElementById('rebusForm');
  const btn=document.getElementById('submitBtn');
  const frame=document.getElementById('submitFrame');
  const status=document.getElementById('status');
  let waiting=false,timer=null;

  function show(msg,cls){
    status.textContent=msg;
    status.className='status show '+cls;
  }

  form.addEventListener('submit',function(e){
    if(!form.reportValidity()){e.preventDefault();return;}
    if(waiting){e.preventDefault();return;}
    waiting=true;
    btn.disabled=true;
    btn.textContent='Submitting…';
    show('Sending your answers…','ok');

    timer=setTimeout(function(){
      if(waiting){
        waiting=false;
        btn.disabled=false;
        btn.textContent='Submit My Answers';
        show('Your answers were sent. Please avoid submitting again unless you need to correct something.','ok');
        form.reset();
      }
    },7000);
  });

  frame.addEventListener('load',function(){
    if(!waiting)return;
    clearTimeout(timer);
    waiting=false;
    btn.disabled=false;
    btn.textContent='Submit My Answers';
    show('Thank you! Your Rebus Puzzle answers have been submitted successfully. Good luck!','ok');
    form.reset();
  });
})();

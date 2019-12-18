$(function(){

  function buildHTML(message){
    if (message.image) {
      var html = `<div class="message">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${message.user}
                      </div>
                      <div class="upper-message__date">
                        ${message.date}
                      </div>
                    </div>
                    <div class="lower-message">
                    <p class="lower-message__content">
                      ${message.text}
                    </p>
                  <img src=${message.image} class="lower-message__image">
                      
                    </p>
                    </div>
                  </div>`
    } else {
      var html = `<div class="message">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${message.user}
                      </div>
                      <div class="upper-message__date">
                        ${message.date}
                      </div>
                    </div>
                    <div class="lower-message">
                    <p class="lower-message__content">
                      ${message.text}
                    </p>
                    
                    </div>
                  </div>`
    }


    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildHTML(message);
      $('.message-list').append(html)
      $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight});
      $('.send-btn').prop('disabled', false);
      $('.new_message')[0].reset();
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
  })
})
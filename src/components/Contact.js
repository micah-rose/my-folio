import React from 'react';

const Contact = () => {
    return (
        <>
            <div class="container">
            <h2 id="contact-me">Contact Me</h2>
  <p class="text-center"><em>I'd love to hear from you!</em></p>
  <div class="row test">
    <div class="col-md-4">
      <p><span class="glyphicon glyphicon-map-marker"></span> Utah, US</p>
      <p><span class="glyphicon glyphicon-phone"></span> Phone: +00 1515151515</p>
      <p><span class="glyphicon glyphicon-envelope"></span> Email: mail@mail.com</p>
    </div>
    <div class="col-md-8">
      <div class="row">
        <div class="col-sm-6 form-group">
          <input class="form-control" id="name" name="name" placeholder="Name" type="text" required />
        </div>
        <div class="col-sm-6 form-group">
          <input class="form-control" id="email" name="email" placeholder="Email" type="email" required />
        </div>
      </div>
      <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
      <div class="row">
        <div class="col-md-12 form-group">
          <button class="btn pull-right" type="submit">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Contact;
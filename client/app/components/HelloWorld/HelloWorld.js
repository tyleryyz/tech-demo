import React from 'react';

const AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: "AKIAJUPGD63PGO6TDA6A",
    secretAccessKey: "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",
    region: "us-west-2"
});

const ses = new AWS.SES();

const params = {
  Destination: {
    ToAddresses: ['jjg297@nau.edu']
  },
  Message: {
    Body: {
      Html: {
        Charset: 'UTF-8',
        Data:
          'This message body contains HTML formatting, like <a class="ulink" href="http://docs.aws.amazon.com/ses/latest/DeveloperGuide" target="_blank">Amazon SES Developer Guide</a>.'
      },
      Text: {
        Charset: 'UTF-8',
        Data: 'This is the message body in text format.'
      }
    },
    Subject: {
      Charset: 'UTF-8',
      Data: 'Test email from code'
    }
  },
  ReturnPath: 'jjg297@nau.edu',
  Source: 'jjg297@nau.edu'
};

ses.sendEmail(params, (err, data) => {
  if (err) console.log(err, err.stack)
  else console.log(data)
});

const HelloWorld = () => (
  <div>
	  <p>
	  	Hello World
	  </p>
	  <h2>
	  	Woah, cool stuff
	  </h2>
  </div>
);

export default HelloWorld;

const userConfirmationTemplate = (name) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .logo {
      width: 200px;
      margin: 20px 0;
    }
    .message {
      margin-bottom: 30px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="message">
      <h2>¡Gracias por contactarnos, ${name}!</h2>
      <p>Agradecemos tu interés en Beacon Governance. Hemos recibido tu mensaje y nos pondremos en contacto contigo.</p>
    </div>
    <img src="cid:logo" alt="Beacon Governance" class="logo"/>
    <p>Atentamente,<br>El equipo de Beacon Governance</p>
  </div>
</body>
</html>
`;

module.exports = userConfirmationTemplate;
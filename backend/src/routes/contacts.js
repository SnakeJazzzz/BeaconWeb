const express = require('express');
const router = express.Router();
const transporter = require('../config/email');
const userConfirmationTemplate = require('../templates/emails/userConfirmation');
const path = require('path');

router.post('/contact', async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Gracias por contactar a Beacon Governance',
      html: userConfirmationTemplate(name),
      attachments: [{
        filename: 'logo.svg',
        path: path.join(__dirname, '../../../public/LogoBlack.svg'),
        cid: 'logo'
      }]
    });

    // Send notification to admin emails
    const adminEmails = [process.env.ADMIN_EMAIL_1, process.env.ADMIN_EMAIL_2];
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: adminEmails.join(', '),
      subject: 'Nuevo contacto desde el sitio web',
      html: `
        <h2>Nuevo contacto recibido</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
      `
    });

    res.status(200).json({ message: 'Mensaje enviado con éxito' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error al enviar el mensaje' });
  }
});

module.exports = router;
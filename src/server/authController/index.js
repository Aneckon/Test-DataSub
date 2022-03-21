const dataAuth = require('../models');

class authController {
  async auth(req, res) {
    try {
      const { cardNumber, datePicker, cvv, amount } = req.body;
      const user = new dataAuth({ cardNumber, datePicker, cvv, amount });
      await user.save();
      return res.json({ message: 'Успешно отправлен запрос' });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new authController();

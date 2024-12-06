export default new (class RegisterController {
  register(req, res) {
    const { password, email } = req.body;
    console.log(password, email);
    const user = [
      {
        id: 1,
        email: email,
        password: password,
      },
    ];
    res.send(JSON.stringify(user));
  }
})();

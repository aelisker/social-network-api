const testContoller = {
  testGet(req, res) {
    console.log('Is this thing on?');
    res.json({ message: 'Looks like it' })
  }
}

module.exports = testContoller;
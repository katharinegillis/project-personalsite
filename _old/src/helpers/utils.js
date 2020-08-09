export default {
  getRandomInt(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  },
  generateId(length = 8) {
    const timestamp = new Date();

    const ts = timestamp.toString();
    const parts = ts.split('').reverse();
    let id = '';

    for (let i = 0; i < length; i += 1) {
      const index = this.getRandomInt(0, parts.length - 1);
      id += parts[index];
    }

    return id;
  },
};

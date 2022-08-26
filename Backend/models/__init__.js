const FileStorage = require('./engine/file_storage');

var storage = new FileStorage();

storage.reload();

module.exports = storage;

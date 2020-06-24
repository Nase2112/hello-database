//Importar mongoose
const mongoose = require('mongoose');

//Schema => Esquema o formato para los User
const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  mail: String,
  birthday: Date
});

//Creación del modelo llamado User y ↓formato↓
const User = mongoose.model('User', UserSchema);

//Exportar el modelo para usarlo en otros archivos o global
module.exports = User;
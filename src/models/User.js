const {Schema,model} = required('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,require:true},
    password:{type:String,required:true}
},{
    timestamps:true
});
//ASYNC debe estar antes del metodo que contiene el await
UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
};
//desifrar la contrasenia
UserSchema.methods.matchPassword = async function(password) {//comparamos el password del parametro
    //con el password de la funcion q encripta
    //aprovechando el alcance de una function normal
    //atravez de this
    await bcrypt.compare(password, this.password);
}

module.exports = model('User',UserSchema);
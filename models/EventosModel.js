import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Evento = db.define('eventos', {
    nombre: {
        type : DataTypes.STRING
    },
    fechaHora: {
        type : DataTypes.DATE
    },
    fk_recinto: {
        type : DataTypes.BIGINT
    },
    estatus : {
        type : DataTypes.INTEGER
    }
});

export default Evento;

(async()=> {
    await db.sync();
})();
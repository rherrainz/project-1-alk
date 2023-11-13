import { DataTypes, Model } from "sequelize";

const User = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        role:{
            type: DataTypes.ENUM(["admin", "user"]),
            defaultValue: "user"
        },
        password: {
            type: DataTypes.STRING
        },
        isActive:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        editedAt: {
            type: DataTypes.DATE,
            defaultValue: null
        }},
    {});
    //relaciones   
    //
    //

    return User;
};

export default User;

    

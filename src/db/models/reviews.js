import { DataTypes } from "sequelize";

const Reviews = (sequelize, Sequelize) => {
    const Reviews = sequelize.define('reviews', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        user: {
            type: DataTypes.UUID,
            allowNull: false
        },
        media: {
            type: DataTypes.UUID,
            allowNull: false
        },
        review: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        editedAt: {
            type: DataTypes.DATE,
            defaultValue: null
        }
    },
    {});
    //relaciones
    //
    //

    return Reviews;
};

export default Reviews;
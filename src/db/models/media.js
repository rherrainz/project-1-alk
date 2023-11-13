import { DataTypes } from "sequelize";

const Media = (sequelize, Sequelize) => {
    const Media = sequelize.define('media', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        releaseDate: {
            type: DataTypes.DATE,
            defaultValue: null
        },
        type:{
            type: DataTypes.ENUM(["movie", "series", "other"]),
            defaultValue: "movie"
        },
        duration: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        synopsis: {
            type: DataTypes.TEXT,
            defaultValue: null
        },
        cover: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        director: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        cast: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        genre: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        country: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        language: {
            type: DataTypes.STRING,
            defaultValue: null
        },
        imdbRating: {
            type: DataTypes.FLOAT,
            defaultValue: null
        },
        rottenTomatoesRating: {
            type: DataTypes.FLOAT,
            defaultValue: null
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        editedAt: {
            type: DataTypes.DATE,
            defaultValue: null
        }
    }, {});
    //relaciones

    return Media;
};

export default Media;
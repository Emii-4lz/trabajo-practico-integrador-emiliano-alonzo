import sequelize from '../config/database.js';
import { DataTypes } from 'sequelize';
import { Article } from './article.model.js';
import { Tag } from './tag.model.js';
// article_id (Foreign Key → Article)
// ● tag_id (Foreign Key → Tag)

export const ArticleTag = sequelize.define('ArticleTag', {
    article_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Article,
            key: 'id'
        },
    },
    tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Tag,
            key: 'id'
        },
    }
});
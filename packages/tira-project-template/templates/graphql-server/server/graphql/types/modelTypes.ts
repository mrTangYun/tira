import models from '../../models/sequelize';
import { convertFromSequelizeModels } from 'tira-graphql-sequelize';

export const { TodoTC } = convertFromSequelizeModels(models);

function resolveFields() {
  TodoTC.removeField(['createdAt']);
}

resolveFields();

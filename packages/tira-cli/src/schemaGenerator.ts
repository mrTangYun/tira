import * as path from 'path';
import { generateJsonFileByUrl } from 'tira-graphql';

const schemaConfig = require(path.resolve(process.cwd(), 'schema.config.js'));

export async function generateFrontendSchema() {
  if (schemaConfig.frontend) {
    const generatePath = path.resolve(process.cwd(), schemaConfig.frontend.schemaPath);
    await generateJsonFileByUrl(schemaConfig.frontend.remoteUrl, generatePath);
  }
}

export async function generateBackendSchema() {
  if (schemaConfig.backend) {
    const generatePath = path.resolve(process.cwd(), schemaConfig.backend.schemaPath);
    await generateJsonFileByUrl(schemaConfig.backend.remoteUrl, generatePath);
  }
}

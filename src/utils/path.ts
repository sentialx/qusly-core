import { dirname } from 'path';
import { promises as fs, constants } from 'fs';

import { IFile } from '../interfaces';

export const formatPath = (path: string, file: IFile) => {
  return `${path !== '/' ? path : ''}/${file.name.trim()}`;
}

export const checkIfExists = async (path: string) => {
  try {
    await fs.access(path, constants.F_OK);
  } catch (error) {
    return false;
  }
  return true;
}

export const ensureExists = async (localPath: string) => {
  const exists = await checkIfExists(localPath);

  if (!exists) {
    const dir = dirname(localPath);

    await fs.mkdir(dir, { recursive: true });
  }
}

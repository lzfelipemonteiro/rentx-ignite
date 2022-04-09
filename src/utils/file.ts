import fs from 'fs';

export const deleteFile = async (fileName: string) => {
  try {
    // * verifica se o arquivo existe
    await fs.promises.stat(fileName);
  } catch (error) {
    return;
  }

  await fs.promises.unlink(fileName);
};

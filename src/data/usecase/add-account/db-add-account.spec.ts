/* eslint-disable @typescript-eslint/no-unused-vars */
import { DbAddAccount } from './db-add-account';
import { Encrypter } from '../../protocols/encrypter';

interface SutTypes {
  sut: DbAddAccount;
  encryptStub: Encrypter;
}

const makeSut = (): SutTypes => {
  class EncryptStub implements Encrypter {
    async encrypt(value: string): Promise<string> {
      return new Promise((resolve) => resolve('hashed_password'));
    }
  }
  const encryptStub = new EncryptStub();
  const sut = new DbAddAccount(encryptStub);

  return {
    sut,
    encryptStub,
  };
};

describe('DbAddAccount Usecase', () => {
  test('Should call Encrypter with correct password', async () => {
    const { sut, encryptStub } = makeSut();
    const encryptSpy = jest.spyOn(encryptStub, 'encrypt');

    const accountData = {
      name: 'valid_name',
      email: 'valid_email@mail.com',
      password: 'valid_password',
    };

    await sut.add(accountData);
    expect(encryptSpy).toHaveBeenCalledWith('valid_password');
  });
});

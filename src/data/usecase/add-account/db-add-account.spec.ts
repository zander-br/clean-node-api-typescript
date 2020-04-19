/* eslint-disable @typescript-eslint/no-unused-vars */
import { DbAddAccount } from './db-add-account';
import { Encrypter } from './db-add-account-protocols';

interface SutTypes {
  sut: DbAddAccount;
  encryptStub: Encrypter;
}

const makeEncrypter = (): Encrypter => {
  class EncryptStub implements Encrypter {
    async encrypt(value: string): Promise<string> {
      return new Promise((resolve) => resolve('hashed_password'));
    }
  }

  return new EncryptStub();
};

const makeSut = (): SutTypes => {
  const encryptStub = makeEncrypter();
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

  test('Should throw if Encrypter throws', async () => {
    const { sut, encryptStub } = makeSut();
    jest.spyOn(encryptStub, 'encrypt')
      .mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())));

    const accountData = {
      name: 'valid_name',
      email: 'valid_email@mail.com',
      password: 'valid_password',
    };

    const promise = sut.add(accountData);
    await expect(promise).rejects.toThrow();
  });
});

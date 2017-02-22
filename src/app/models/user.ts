import { Photo } from './photo';

export class User {
  public userId: number;
  public firstName: string;
  public lastName: string;
  public userName: string;
  public email: string;
  public password: string;
  public gender: string;
  public created: Date;
  public updated: Date;
  public photoList: Photo[];
  public likedPhotoList: Photo[];
}
export interface IImage {
  type: 'image';
  imageLabel?: string;
  imageLink: { desktop: string; tablet: string };
  columns: 1 | 2;
}

export interface ISlider {
  type: 'slider';
  images: { imageLink: { desktop: string; tablet: string }; imageLabel: string }[];
  columns: 2;
}

export interface IText {
  type: 'text';
  textContent: string;
  columns: 1 | 2;
}

export type ContentType = IImage | IText | ISlider;

export interface IPage {
  title: string;
  content: ContentType[];
}

interface IEvent {
  id: string;
  title: string;
  banner: string;
  description: string;
  begin: Date;
  end: Date;
  created: Date; //дата створення події
  content: ContentType[];
}

export interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export interface IAdmin {
  //ToDo: change interface due to backend response
  id: string;
  name: string;
}

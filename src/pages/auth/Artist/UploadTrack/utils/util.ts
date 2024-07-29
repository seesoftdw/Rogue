import { scrollToElement } from "../../../../../utils/util";
import {
  AUDIO_FILE_EXTENSION,
  AUDIO_FILE_SIZE,
  IMAGE_FILE_EXTENSION,
  IMAGE_FILE_SIZE,
  PREVIEW_FILE_EXTENSION,
  PREVIEW_FILE_SIZE,
} from "./constant";

export const validate = (formData: any) => {
  const formErrors: any = {};
  
  if (formData.title === "") {
    formErrors.title = "Title is missing";
    const element = document.getElementsByName('title')[0];
    scrollToElement(element)
  }
  if (!formData.genre || formData.genre === "") {
    formErrors.genre = "Genre is missing";
    const element = document.getElementsByName('genre')[0];
    scrollToElement(element)
  }
  if (formData.lyric === "") {
    formErrors.lyric = "Lyrics are missing";
    const element = document.getElementsByName('lyric')[0];
    scrollToElement(element)
  }

  if (!formData.authors || formData.authors.length === 0) {
    formErrors.authors = "Authors are missing";
    const element = document.getElementsByName('authors')[0];
    scrollToElement(element)
  }

  if (!formData.writers || formData.writers.length === 0) {
    formErrors.writers = "Writers are missing";
    const element = document.getElementsByName('writers')[0];
    scrollToElement(element)
  }

  if (!formData.numberOfCopies  || formData.numberOfCopies === "") {
    formErrors.numberOfCopies = "Quantity is missing";
    const element = document.getElementsByName('numberOfCopies')[0];
    scrollToElement(element)
  }
  if (!formData.protected_audio_file_name  || formData.protected_audio_file_name === "") {
    formErrors.audioFile = "Audio file is missing";
    const element = document.getElementsByName('audioFile')[0];
    scrollToElement(element)
  }

  return formErrors;
};

export const validateFiles = (file: File, name: string) => {
  const formErrors: any = {};
  const fileType = file.type.split("/")[1];

  if (name === "posterFile") {
    if (file.size > IMAGE_FILE_SIZE) {
      formErrors.posterFile = "File is too large.";
    } else if (!IMAGE_FILE_EXTENSION.includes(fileType.toUpperCase())) {
      formErrors.posterFile = "File type is not valid.";
    }
  }

  if (name === "previewFile") {
    if (file.size > PREVIEW_FILE_SIZE) {
      formErrors.previewFile = "File is too large.";
    } else if (!PREVIEW_FILE_EXTENSION.includes(fileType.toUpperCase())) {
      formErrors.previewFile = "File type is not valid.";
    }
  }

  if (name === "audioFile") {
    if (file.size > AUDIO_FILE_SIZE) {
      formErrors.audioFile = "File is too large.";
    } else if (!AUDIO_FILE_EXTENSION.includes(fileType.toUpperCase())) {
      formErrors.audioFile = "File type is not valid.";
    }
  }

  return formErrors;
};

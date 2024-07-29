import { styled } from "@mui/material";
import { CreateUploadAsset } from "../../../../../models/Upload";

const SIZE = 1024 * 1024; // 1 MB
export const MIN_CHUNK_SIZE = SIZE * 10;
export const MAX_CHUNK_SIZE = SIZE * 50;
export const IMAGE_FILE_EXTENSION = ["PNG", "JPEG", "JPG"];
export const AUDIO_FILE_EXTENSION = ["WAV", "AIF", "AIFF", "FLAC", "MP3", "MPEG"];
export const PREVIEW_FILE_EXTENSION = ["WAV", "AIF", "AIFF", "FLAC", "MP3", "MPEG"];
export const IMAGE_FILE_SIZE = SIZE * 10; //10 MB
export const AUDIO_FILE_SIZE = SIZE * 600; //600 MB
export const PREVIEW_FILE_SIZE = SIZE * 10; //10 MB

export const DefaultFormData: CreateUploadAsset = {
  orh_account_id: crypto.randomUUID(),
  songId: crypto.randomUUID(),
  numberOfCopies: 0,
  poster_file_name: "",
  poster_md5hash: "",
  title: "",
  authors: null,
  writers: null,
  lyric: "",
  genre: "",
  description: "",
  protected_audio_file_name: "",
  protected_audio_md5hash: "",
  trailer_audio_file_name: "",
  trailer_audio_md5hash: "",
};

export const UploadFilesData = {
  previewVideoFile: null,
  previewAudioFile: null,
  audioFile: null,
  videoFile: null,
  posterFile: null,
};

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});


export const ASSET_INFO = {
  orh_account_id: crypto.randomUUID(),
  songId: crypto.randomUUID(),
  numberOfCopies: 1,
  poster_file_name: "",
  poster_md5hash: "",
  title: "Track title",
  authors: "Tasha, Masha",
  writers: "Michail",
  lyric: "",
  genre: "Pop",
  description: "description",
  protected_audio_file_name: "",
  protected_audio_md5hash: "",
  trailer_audio_file_name: "",
  trailer_audio_md5hash: "",
}
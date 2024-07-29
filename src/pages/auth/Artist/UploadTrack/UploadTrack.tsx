import {
  Box,
  Tabs,
  Grid,
  Tab,
  Typography,
  TextField,
  createTheme,
  ThemeProvider,
  TextareaAutosize,
  Button,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormHelperText,
} from "@mui/material";
import React, { useEffect } from "react";
import MainWrapper from "../../../../components/common/MainWrapper";
import { FaMusic } from "react-icons/fa6";
import TrackListing from "./ListTrackToMarketplace";
import { GENRELIST } from "./utils/genreList";
import { CreateUploadAsset } from "../../../../models/Upload";
import {
  ASSET_INFO,
  DefaultFormData,
  MAX_CHUNK_SIZE,
  MIN_CHUNK_SIZE,
  UploadFilesData,
  VisuallyHiddenInput,
} from "./utils/constant";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import {
  UploadAsset,
  completeUpload,
  createUpload,
  uploadFile,
  uploadFileChunk,
} from "../../../../services/uploadService";
import { generateMD5 } from "../../../../utils/hash";
import { validate, validateFiles } from "./utils/util";
import { Loader, LoaderProps } from "../../../../components/common/Loader";
import { removeKeyFromObj, scrollToElement } from "../../../../utils/util";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CloseIcon from "@mui/icons-material/Close";
import "../styles.scss";
import Link from "@mui/material/Link";
import {  useNavigate, useSearchParams } from "react-router-dom";

type Props = {};

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          borderBottom: "none",
          textDecorationLine: "none",
        },
      },
    },
  },
});

const tabStyle = {
  margin: "5% 0 0 1%",
};

const activeTabStyle = {
  background: "white",
  borderBottom: "none",
  margin: "5% 0 0 1%",
  borderTopLeftRadius: "7px",
  borderTopRightRadius: "7px",
  color: "black",
  textDecorationLine: "none",
};

const UploadTrack: React.FC<Props> = (props) => {
  const mainRef = React.useRef();
  const dispatch = useDispatch<AppDispatch>();
  const [tabValue, setTabValue] = React.useState(0);
  const [formData, setFormData] =
    React.useState<CreateUploadAsset>(DefaultFormData);
  const [uploadFiles, setUploadFiles] = React.useState<any>(UploadFilesData);
  const [formError, setFormError] = React.useState<any>({});
  const [fileError, setFileError] = React.useState<any>({});
  const [showLoader, setShowLoader] = React.useState<LoaderProps>({
    open: false,
    text: "",
  });
  const [uploadStatus, setUploadStatus] = React.useState<String>("pending");
  const [edit, setEdit] = React.useState<boolean>(false);


  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
  if (searchParams.get("edit")) {
   getAssetInfo();
  } else {
    setEdit(false);
  }
  }, []);

  const getAssetInfo = () => {
    setEdit(true);
    setFormData(ASSET_INFO); 
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleChange = (
    event:
      | SelectChangeEvent
      | React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
  ) => {
    const { name, value } = event.target;
    let formValue: any = value;
    if (name === "numberOfCopies") {
      formValue = parseInt(value);
    } else if (name === "authors" || name === "writers") {
      formValue = value.split(",");
    } else if (name === "lyric") {
      formValue = btoa(value);
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: formValue,
    }));
  };

  const resetFormData = () => {
    setFormData(DefaultFormData);
    setUploadFiles(UploadFilesData);
    setFileError({});
    setFormError({});
  };

  const handleUpload = async () => {
    const validationErros: any = validate(formData);
    if (Object.keys(validationErros).length > 0) {
      setFormError(validationErros);
    } else {
      try {
        setFileError({});
        setFormError({});
        const formObject = removeKeyFromObj(formData, "");
        setShowLoader({ open: true, text: "Uploading your track..." });
        try {
          const response = await dispatch(createUpload(formObject));
          if (response && response.payload) {
            const { asset_pre_signed_url } = response.payload;
            if (asset_pre_signed_url?.upload_ids?.length) {
              setShowLoader({ open: true, text: "Processeing your track..." });
              asset_pre_signed_url?.upload_ids?.forEach(
                async (item: any, index: number) => {
                  try {
                    const fileData = uploadFiles[item.file_name];
                    if (fileData) {
                      const totalChunks =
                        fileData.size > MAX_CHUNK_SIZE
                          ? Math.ceil(fileData.size / MAX_CHUNK_SIZE)
                          : Math.ceil(fileData.size / MIN_CHUNK_SIZE);
                      for (let i = 0; i < totalChunks; i++) {
                        const start = i * MIN_CHUNK_SIZE;
                        const end = Math.min(
                          start + MIN_CHUNK_SIZE,
                          fileData.size
                        );
                        const chunk = fileData.slice(start, end);
                        await uploadChunks(
                          chunk,
                          i + 1,
                          totalChunks,
                          item,
                          asset_pre_signed_url.url_request_uploadUrl
                        );
                      }
                      const data = {
                        uri: asset_pre_signed_url.url_complete_upload,
                        uuid: item.uuid,
                      };

                      await dispatch(completeUpload(data));

                      if (
                        asset_pre_signed_url?.upload_ids.length ===
                        index + 1
                      ) {
                        setShowLoader({ open: false, text: "" });
                        scrollToElement(mainRef);
                        setUploadStatus("success");
                        resetFormData();
                      }
                    }
                  } catch (err) {
                    setShowLoader({ open: false, text: "" });
                    setUploadStatus("error");
                  }
                }
              );
            } else {
              scrollToElement(mainRef);
              setShowLoader({ open: false, text: "" });
              resetFormData();
              setUploadStatus("success");
            }
          } else {
            setShowLoader({ open: false, text: "" });
            setUploadStatus("pending");
          }
        } catch {
          setUploadStatus("error");
          setShowLoader({ open: false, text: "" });
        }
      } catch (e) {
        setShowLoader({ open: false, text: "" });
        setUploadStatus("pending");
      }
    }
  };

  const uploadChunks = async (
    chunk: File,
    index: number,
    totalChunks: number,
    fileItems: any,
    uploadUrl: any
  ) => {
    const arrayBuffer = await chunk.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    const data: UploadAsset = {
      chunk_number: index.toString(),
      uuid: fileItems.uuid,
      uri: uploadUrl,
    };
    const response = await dispatch(uploadFileChunk(data));
    if (response && response.payload) {
      const data = { uri: response.payload.pre_signedUrl, body: uint8Array };
      await dispatch(uploadFile(data));
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    if (files?.length) {
      const validationErros: any = validateFiles(files[0], name);
      if (Object.keys(validationErros).length > 0) {
        setFileError(validationErros);
      } else {
        setFileError({});
        let fileData = {};
        if (name === "posterFile") {
          fileData = {
            poster_file_name: files[0].name,
            poster_md5hash: generateMD5(files[0].name),
          };
        } else if (name === "audioFile") {
          fileData = {
            protected_audio_file_name: files[0].name,
            protected_audio_md5hash: generateMD5(files[0].name),
          };
        } else if (name === "previewFile") {
          fileData = {
            trailer_audio_file_name: files[0].name,
            trailer_audio_md5hash: generateMD5(files[0].name),
          };
        }

        setFormData((prevState) => ({
          ...prevState,
          ...fileData,
        }));

        setUploadFiles((prevState: any) => ({
          ...prevState,
          [files[0].name]: files[0],
        }));
      }
    } else {
      return;
    }
  };

  const removeBrowsedFile = (name: string) => {
    const fileName = formData[name];
    const formObj = removeKeyFromObj(formData, name);
    const fileObj = removeKeyFromObj(uploadFiles, fileName);
    setFormData(formObj);
    setUploadFiles(fileObj);
  };

  const hideErrorMessage = () => {
    setUploadStatus("");
  };

  const handleCancel = () => {
    resetFormData();
    navigate("/artisttrack");
  };

  return (
    <Box ref={mainRef}>
      <MainWrapper>
        <Box width="100%" className="bg-grad-gray1">
          <Typography sx={{ fontSize: "36px", fontWeight: "bold" }}>
            Upload track
          </Typography>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box sx={{ mt: 0.3 }}>
              <ThemeProvider theme={theme}>
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  sx={{ "& .MuiTabs-indicator": { display: "none" } }}
                >
                  <Tab
                    className="artistsProfileTab"
                    style={tabValue === 0 ? activeTabStyle : tabStyle}
                    label="TRACK"
                  />
                  <Tab
                    className="artistsProfileTab"
                    style={tabValue === 1 ? activeTabStyle : tabStyle}
                    label="LISTING"
                  />
                </Tabs>
              </ThemeProvider>
            </Box>
          </Box>
        </Box>
        {tabValue === 0 && (
          <Box display={"flex"} py={0} className="upload-track">
            <Box flex={4}>
              {uploadStatus === "success" ? (
                <Box className="flex-spacebetween upload-success">
                  <Box display={"flex"} alignItems={"center"}>
                    <CheckCircleIcon color="success" /> &nbsp;
                    <Typography variant="body2">
                      {" Your track has been successfully processed."}
                    </Typography>
                    <ArrowRightAltIcon fontSize="small" />
                    <Link
                      className="cursor-pointer"
                      onClick={() => {
                        setTabValue(1);
                        setUploadStatus("");
                      }}
                    >
                      {" "}
                      <Typography variant="body2">
                        List your track in the marketplace
                      </Typography>
                    </Link>
                  </Box>
                  <Box display={"flex"} alignItems={"center"}>
                    <CloseIcon
                      color="disabled"
                      className="cursor-pointer"
                      onClick={hideErrorMessage}
                    />
                  </Box>
                </Box>
              ) : null}
              <Typography
                sx={{
                  color: "rgba(10, 32, 46, 0.7)",
                  fontSize: "14px",
                  pl: 23,
                  pt: 4,
                  pb: 1,
                }}
              >
                Track title
              </Typography>
              <TextField
                size="small"
                sx={{
                  width: "736px",
                  ml: 23,
                  background: "rgba(10, 32, 46, 0.05)",
                }}
                name="title"
                onChange={handleChange}
                error={!!formError.title}
                helperText={formError.title}
                value={formData.title}
              />
              <Typography
                sx={{
                  color: "rgba(10, 32, 46, 0.7)",
                  fontSize: "14px",
                  pl: 23,
                  pt: 1.5,
                  pb: 1,
                }}
              >
                Description
              </Typography>
              <Box sx={{ ml: 23 }}>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={7}
                  style={{
                    width: "736px",
                    padding: "8px",
                    borderRadius: "4px",
                    borderColor: "gray",
                    background: "rgba(10, 32, 46, 0.05)",
                  }}
                  name="description"
                  onChange={handleChange}
                  value={formData.description ? formData.description : ""}
                />
              </Box>
              <Typography
                sx={{
                  color: "rgba(10, 32, 46, 0.7)",
                  fontSize: "14px",
                  pl: 23,
                  pt: 1.5,
                  pb: 1,
                }}
              >
                Genre
              </Typography>
              <FormControl
                size="small"
                sx={{ m: 1, minWidth: 120, ml: 23, width: "224px" }}
              >
                <Select
                  defaultValue="Select"
                  id="grouped-native-select"
                  label=""
                  name="genre"
                  onChange={handleChange}
                  value={formData.genre ? formData.genre : ""}
                >
                  <MenuItem aria-label="None" value="Select">
                    <em>Select</em>
                  </MenuItem>
                  {GENRELIST.map((item) => (
                    <MenuItem value={item} key={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
                {formError.genre && (
                  <FormHelperText className="error">
                    {formError.genre}
                  </FormHelperText>
                )}
              </FormControl>
              <Typography
                sx={{
                  color: "rgba(10, 32, 46, 0.7)",
                  fontSize: "14px",
                  pl: 23,
                  pt: 1.5,
                  pb: 1,
                }}
              >
                Authors
              </Typography>
              <TextField
                size="small"
                sx={{
                  width: "736px",
                  ml: 23,
                  background: "rgba(10, 32, 46, 0.05)",
                }}
                name="authors"
                onChange={handleChange}
                error={!!formError.authors}
                helperText={formError.authors}
                value={formData.authors ? formData.authors : ""}
              />
              <Typography
                sx={{
                  color: "rgba(10, 32, 46, 0.7)",
                  fontSize: "14px",
                  pl: 23,
                  pt: 1.5,
                  pb: 1,
                }}
              >
                Lyrics
              </Typography>
              <Box sx={{ ml: 23 }}>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={7}
                  style={{
                    width: "736px",
                    padding: "8px",
                    borderRadius: "4px",
                    borderColor: "gray",
                    background: "rgba(10, 32, 46, 0.05)",
                  }}
                  name="lyric"
                  onChange={handleChange}
                  className="textArea"
                  value={formData.lyric ? atob(formData.lyric) : ""}
                />
                {formError.lyric ? (
                  <FormHelperText className="error" style={{ width: "736px" }}>
                    {formError.lyric}
                  </FormHelperText>
                ) : null}
              </Box>
              <Typography
                sx={{
                  color: "rgba(10, 32, 46, 0.7)",
                  fontSize: "14px",
                  pl: 23,
                  pt: 1.5,
                  pb: 1,
                }}
              >
                Writers
              </Typography>
              <TextField
                size="small"
                sx={{
                  width: "736px",
                  ml: 23,
                  background: "rgba(10, 32, 46, 0.05)",
                }}
                onChange={handleChange}
                name="writers"
                error={!!formError.writers}
                helperText={formError.writers}
                value={formData.writers ? formData.writers : ""}
              />
              <Box
                sx={{
                  height: "30px",
                  borderBottom: "1px solid rgba(10, 32, 46, 0.2)",
                  width: "736px",
                  ml: 23,
                }}
              ></Box>
              <Typography
                sx={{
                  color: "rgba(10, 32, 46, 0.7)",
                  fontSize: "14px",
                  pl: 23,
                  pt: 1.5,
                  pb: 1,
                  fontWeight: "bold",
                }}
              >
                Audio{" "}
              </Typography>
              <Box>
                {formData.protected_audio_file_name ? (
                  <Typography variant="body2" className="flex-center">
                    <FaMusic className="icon-20" />
                    <label className="file-name">
                      {formData.protected_audio_file_name}
                    </label>
                    <CloseIcon
                      className="icon-20 cursor-pointer"
                      onClick={() =>
                        removeBrowsedFile("protected_audio_file_name")
                      }
                    />
                  </Typography>
                ) : null}
                {fileError.audioFile || formError.audioFile && (
                  <div className="error file">{fileError.audioFile || formError.audioFile}</div>
                )}
                
                <Button
                  component="label"
                  sx={{
                    height: "28px",
                    width: "112px",
                    background:
                      "linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)",
                    fontSize: "12px",
                    color: "rgb(255, 255, 255)",
                    fontWeight: "bold",
                    ml: 23,
                    mt: 2,
                  }}
                >
                  <VisuallyHiddenInput
                    name="audioFile"
                    type="file"
                    hidden
                    onChange={handleFileChange}
                    accept="audio/*"
                    value={""}
                  />
                  BROWSE FILE
                </Button>
              </Box>
              <Typography
                sx={{
                  color: "rgba(10, 32, 46, 0.4)",
                  fontSize: "14px",
                  pl: 23,
                  pt: 2,
                  pb: 1,
                }}
              >
                A 600MB maximum file size. Lossless WAV, AIF or FLAC file
                format.
              </Typography>
              <Typography
                sx={{
                  color: "rgba(10, 32, 46, 0.7)",
                  fontSize: "14px",
                  pl: 23,
                  pt: 1.5,
                  pb: 1,
                  fontWeight: "bold",
                }}
              >
                Audio Preview{" "}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(10, 32, 46, 0.4)",
                  fontSize: "14px",
                  pl: 23,
                  pt: 1,
                  pb: 1,
                }}
              >
                Users will be able to listen to a 30 second preview of the track
                before purchasing.
              </Typography>
              <Typography
                sx={{
                  color: "rgba(10, 32, 46, 0.4)",
                  fontSize: "14px",
                  pl: 23,
                  pt: 1,
                  pb: 1,
                }}
              >
                We’ll generate the 30 second preview from the beginning of the
                track or <br />
                you can upload your own 30 seconds:
              </Typography>
              {formData.trailer_audio_file_name ? (
                <Typography variant="body2" className="flex-center">
                  <FaMusic className="icon-20" />
                  <label className="file-name">
                    {formData.trailer_audio_file_name}
                  </label>
                  <CloseIcon
                    className="icon-20 cursor-pointer"
                    onClick={() => removeBrowsedFile("trailer_audio_file_name")}
                  />
                </Typography>
              ) : null}
              <Button
                component="label"
                sx={{
                  height: "28px",
                  width: "178px",
                  background: "white",
                  fontSize: "12px",
                  color: "rgba(10, 32, 46, 0.6)",
                  fontWeight: "bold",
                  ml: 23,
                  mt: 2,
                  border: "1px solid rgba(10, 32, 46, 0.4)",
                }}
              >
                <VisuallyHiddenInput
                  name="previewFile"
                  type="file"
                  hidden
                  onChange={handleFileChange}
                  accept="audio/*"
                  value={""}
                />
                BROWSE PREVIEW FILE
              </Button>
              {fileError.previewFile && (
                <div className="error file">{fileError.previewFile}</div>
              )}
              <Typography
                sx={{
                  color: "rgba(10, 32, 46, 0.4)",
                  fontSize: "14px",
                  pl: 23,
                  pt: 2,
                  pb: 1,
                }}
              >
                Maximum length 30 seconds. WAV, AIF, FLAC or MP3 file format.
              </Typography>
              <Box
                sx={{
                  height: "10px",
                  borderBottom: "1px solid rgba(10, 32, 46, 0.2)",
                  width: "736px",
                  ml: 23,
                }}
              ></Box>
              <Typography
                sx={{
                  color: "rgba(10, 32, 46, 0.7)",
                  fontSize: "14px",
                  pl: 23,
                  pt: 1.5,
                  pb: 1,
                  fontWeight: "bold",
                }}
              >
                Quantity
              </Typography>
              <TextField
                size="small"
                placeholder="100"
                sx={{
                  width: "166px",
                  ml: 23,
                  background: "rgba(10, 32, 46, 0.05)",
                }}
                name="numberOfCopies"
                onChange={handleChange}
                value={formData.numberOfCopies ? formData.numberOfCopies : ""}
                error={!!formError.numberOfCopies}
                helperText={formError.numberOfCopies}
              />{" "}
              copies
              <Typography
                sx={{
                  color: "rgba(10, 32, 46, 0.4)",
                  fontSize: "14px",
                  pl: 23,
                  pt: 2,
                  pb: 1,
                }}
              >
                Specify the number of copies you want to make available for sale{" "}
                <br />
                Once set, the quantity cannot be changed later.
              </Typography>
              <Box
                sx={{
                  height: "10px",
                  borderBottom: "1px solid rgba(10, 32, 46, 0.2)",
                  width: "736px",
                  ml: 23,
                }}
              ></Box>
              <Grid item xs={11}>
                <Grid container>
                  <Grid item xs={8}>
                    <Typography
                      sx={{
                        color: "rgba(10, 32, 46, 0.7)",
                        fontSize: "14px",
                        pl: 23,
                        pt: 2,
                        fontWeight: "bold",
                      }}
                    >
                      Artwork
                    </Typography>
                    {formData.poster_file_name ? (
                      <Typography variant="body2" className="flex-center">
                        <FaMusic className="icon-20" />
                        <label className="file-name">
                          {formData.poster_file_name}
                        </label>
                        <CloseIcon
                          className="icon-20 cursor-pointer"
                          onClick={() => removeBrowsedFile("poster_file_name")}
                        />
                      </Typography>
                    ) : null}
                    <Button
                      component="label"
                      sx={{
                        height: "28px",
                        width: "112px",
                        background: "white",
                        fontSize: "12px",
                        color: "rgba(10, 32, 46, 0.6)",
                        fontWeight: "bold",
                        ml: 23,
                        mt: 2,
                        border: "1px solid rgba(10, 32, 46, 0.4)",
                      }}
                    >
                      <VisuallyHiddenInput
                        name="posterFile"
                        type="file"
                        hidden
                        onChange={handleFileChange}
                        accept="image/png, image/jpeg, image.jpg"
                        value={""}
                      />
                      BROWSE FILE
                    </Button>
                    {fileError.posterFile && (
                      <div className="error file">{fileError.posterFile}</div>
                    )}
                    <Typography
                      sx={{
                        color: "rgba(10, 32, 46, 0.4)",
                        fontSize: "14px",
                        pl: 23,
                        pt: 2,
                        pb: 1,
                      }}
                    >
                      Minimum resolution 1400x1400 pixels. <br />
                      Supported file formats PNG, JPG. Maximum file size 10MB.
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Box
                      sx={{
                        height: "140px",
                        width: "140px",
                        background: "rgba(10, 32, 46, 0.05)",
                        border: "1px solid rgba(10, 32, 46, 0.2)",
                        mt: 1,
                        ml: 5,
                        pt: 3,
                        pl: 3,
                      }}
                    >
                      <FaMusic
                        style={{
                          height: "80.5px",
                          width: "80.5px",
                          color: "gray",
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Box
                sx={{
                  height: "10px",
                  borderBottom: "1px solid rgba(10, 32, 46, 0.2)",
                  width: "736px",
                  ml: 23,
                }}
              ></Box>
              <Box
                display={"flex"}
                justifyContent={"end"}
                className="upload-btn-wrapper"
              >
                <Box>
                  <Button className="cancel-upload-btn" onClick={handleCancel}>
                    CANCEL
                  </Button>
                </Box>
                <Box>
                  <Button className="upload-track-btn" onClick={handleUpload}>
                    UPLOAD TRACK
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
        {tabValue === 1 && <TrackListing />}
      </MainWrapper>
      <Loader
        open={showLoader.open}
        text={showLoader.text}
        showLoaderWithText
      />
    </Box>
  );
};

export default UploadTrack;

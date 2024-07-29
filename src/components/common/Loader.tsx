import { Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Fragment } from "react/jsx-runtime";

export interface LoaderProps {
  open: boolean;
  text?: String,
  showLoaderWithText?: boolean
}

export const Loader = (props: LoaderProps) => {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={props.open}
      >
        {props.showLoaderWithText ? (
          <Fragment>
          <CircularProgress color="inherit" />
          <Typography variant="body2" className="loaderText">{props.text}</Typography>
          </Fragment>
        ) : (
          <CircularProgress color="inherit" />
        )}
      </Backdrop>
    </div>
  );
};

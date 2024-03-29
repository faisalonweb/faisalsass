import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import submitIcon from "@src/assets/svgs/Frame.svg";
import handshakeIcon from "@src/assets/svgs/handshake.svg";
import { LocalizationInterface } from "@src/helpers/interfaces/localizationinterfaces";
import { localizedData } from "@src/helpers/utils/language";
import "@src/components/shared/popUps/congratsModal/congratsModal.scss";

interface Props {
  open: boolean;
  handleClose: () => void;
  action: string | undefined;
}

const CongratsModal = ({ open, handleClose, action }: Props) => {
  const constantData: LocalizationInterface = localizedData();
  const { newEmployeeCreated, congrats, backToListing, employeeUpdated } =
    constantData.Modals;

  const moveToListing = () => {
    handleClose();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} className="CongratsModal">
        <DialogContent className="CongratsModal__Content">
          <Box className="content-cls">
            <Box className="congrats-box">
              <Typography className="congrats-text">{congrats}</Typography>
              <img className="hey-img" src={handshakeIcon} />
            </Box>
            <Typography className="new-employee-text">
              {action === "edit" ? employeeUpdated : newEmployeeCreated}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions className="CongratsModal__Actions">
          <>
            <Button
              onClick={moveToListing}
              className="submitBtn"
              sx={{ ml: "12px !important" }}
            >
              {backToListing}
              <span>
                {" "}
                <img className="submit-img" src={submitIcon} alt="submit" />
              </span>{" "}
            </Button>
          </>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CongratsModal;

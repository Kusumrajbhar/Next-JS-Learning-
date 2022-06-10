import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles({
  mainCard: {
    backgroundColor: "#e8eaf6",
    textAlign: "center",
    padding: "20px",
  },
  ImageBorderRadius: {
    borderRadius: "99999px",
  },
  cardContent: {
    justifyContent: "center",
  },
  contentSpaceBetween: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttonStyle: {
    borderRadius: "44px",
    padding: "8px 20px",
  },
});

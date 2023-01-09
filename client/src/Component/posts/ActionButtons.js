import Button from "react-bootstrap/Button";
import playIcon from "../../assets/play-clean-svgrepo-com.svg";
import editIcon from "../../assets/plus-circle-fill-svgrepo-com.svg";
import deleteIcon from "../../assets/trash-can-svgrepo-com.svg";
import { PostContext } from "../../contexts/PostContext";
import { useContext } from "react";

const ActionButtons = ({ url, _id }) => {
  const { deletePost, findPost, setShowUpdatePostModal } =
    useContext(PostContext);

  const choosePost = (postId) => {
    findPost(postId);
    setShowUpdatePostModal(true);
  };

  return (
    <>
      <Button className="post-button my-auto" href={url} target="_blank">
        <img src={playIcon} alt="play" width="28" height="28" />
      </Button>
      <Button
        className="post-button my-auto"
        onClick={choosePost.bind(this, _id)}
      >
        <img src={editIcon} alt="edit" width="24" height="24" />
      </Button>
      <Button
        className="post-button my-auto bg-danger"
        onClick={deletePost.bind(this, _id)}
      >
        <img src={deleteIcon} alt="delete" width="24" height="24" />
      </Button>
    </>
  );
};

export default ActionButtons;

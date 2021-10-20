import React from "react";
import ReactJWPlayer from "react-jw-player";

const SinglePlayer = ({ playerId, mediaId }) => {
  const onReady = () => {
    document.getElementsByClassName("jw-player-wrapper")[0].id =
      "video-container"; // Need id to target the wx container
  };

  return (
    <div
      data-mediaid={mediaId}
      style={{
        height: "100%",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        minHeight: "200px"
      }}
    >
      <ReactJWPlayer
        playerId={playerId}
        playerScript={`https://cdn.jwplayer.com/libraries/${playerId}.js`}
        playlist={`https://cdn.jwplayer.com/v2/media/${mediaId}`}
        className="jw-player-wrapper"
        onReady={onReady}
      />
    </div>
  );
};

export default SinglePlayer;

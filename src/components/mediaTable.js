import React from 'react';
import PropTypes from 'prop-types';
import MediaRow from './mediaRow';

const MediaTable = ({ media }) => {
  return (
    <table>
      <tbody>
        {media.map((file, index) => (
          <MediaRow file={file} key={index} />
        ))}
      </tbody>
    </table>
  );
};

MediaTable.propTypes = {
  media: PropTypes.array
};

export default MediaTable;

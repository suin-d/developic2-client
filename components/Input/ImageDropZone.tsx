import axios from 'axios';
import React from 'react';
import Dropzone from 'react-dropzone';
import { ImageDropZoneContainer } from './styles';

type ImageDropZonePropsType = {
  width?: number;
  height?: number;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  axiosPath?: string;
};
export default function ImageDropZone({
  image,
  setImage,
  width,
  height,
  axiosPath = 'thumbnail',
}: ImageDropZonePropsType): JSX.Element {
  const onDrop = (files: File[]) => {
    if (files.length > 1) {
      return alert('하나의 이미지만 선택해주세요.');
    }
    const formData = new FormData();
    formData.append('image', files[0]);
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_HOST}/upload/${axiosPath}`, formData)
      .then(res => {
        console.log(res.data);
        setImage(res.data);
      });
  };

  return (
    <ImageDropZoneContainer background={image} width={width} height={height}>
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} multiple={false} />
              <span>+</span>
              <span>이미지를 끌어넣거나, 눌러주세요</span>
            </div>
          </section>
        )}
      </Dropzone>
    </ImageDropZoneContainer>
  );
}

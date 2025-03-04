import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import searchImages from "../gallery-api";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageModal from "./ImageModal/ImageModal";

function App() {
  const [request, setRequest] = useState("");
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const onSubmit = (searchRequest) => {
    setRequest(searchRequest);
    setPage(1);
    setPhotos([]);
  };

  useEffect(() => {
    if (!request) return;

    const fetching = async () => {
      try {
        setLoading(true);
        setError(false);

        const imagesArr = await searchImages(request, page);

        if (imagesArr.results <= 9) {
          setLoading(false);
        }

        setPhotos((prevPhotos) => [...prevPhotos, ...imagesArr.results]);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetching();
  }, [request, page]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBar onSubmit={onSubmit} />
      {error && <ErrorMessage />}
      <ImageGallery photos={photos} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {photos.length > 0 && photos.length % 9 === 0 && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        image={selectedImage}
      />
    </>
  );
}

export default App;
